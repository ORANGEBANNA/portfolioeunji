////index.js///
$(function () {

    //alert('안녕'); test_

    //네비게이션

    $('.gnb li').mouseenter(function () {
        $('.sub').slideDown();
    });

    $('header').mouseleave(function () {
        $('.sub').stop().slideUp();
    });


    //메인배너 슬라이더
    //블릿 초기설정

    $('.btngrp li').css({
        color: '#cde1be'
    });


    $('.btn0').css({
        color: '#00704a'
    });

    $('.main-inner>li:first').insertBefore($('.main-inner>li:last'));

    /*$('.main-inner').css('left','0');*/

    var i = 0;

    function leftMove() {
        i++;

        $('.main-inner').animate({
            left: '-100%'

        }, 800, function () {

            $('.main-inner>li:first').insertAfter($('.main-inner>li:last'));
            $('.main-inner').css('left', '0');

            $('.btngrp li').css({
                color: '#cde1be'
            });


            $('.btn' + i).css({
                color: '#00704a'
            });

            if (i === 2) {
                $('.btn0').css({
                    color: '#00704a'
                });

                i = 0;
            }

        });

    }



    var autoSlider = setInterval(function () {
        leftMove();
    }, 3000);

    $('.main-inner').hover(
        function () {
            clearInterval(autoSlider);
        },
        function () {
            autoSlider = setInterval(function () {
                leftMove();
            }, 3000);
        }

    ); //hover



    $('.btngrp li').click(function () {
        btnb = $(this).index();
        console.log(btnb);

        $('.btngrp li').css({
            color: '#cde1be'
        });

        $(this).css('color', '#00704a');
        $('.main-inner').animate({
            left: (100 * -btnb) + '%'
        });
    }); //btngrp li click


    $(window).scroll(function () {

        var winH = $(window).scrollTop();
        console.log(winH);


        if (winH < 800) {
            $('.promise1').animate({
                opacity: 1,
                top: '-30px'
            }, 500, function () {
                $('.promise2').animate({
                    opacity: 1,
                    top: '-30px'
                }, 500, function () {
                    $('.promise3').animate({
                        opacity: 1,
                        top: '-30px'
                    }, 500, function () {
                        $('.promise4').animate({
                            opacity: 1,
                            top: '-30px'
                        }, 500);
                    });
                });
            });
        }

    }); //window scroll



    //section 2 4컷 슬라이드

    var count = $('.favorite-menu').length;
    console.log(count);

    var j = 0;

    function fourcut() {
        $('.favorite-wrap').stop().animate({
            left: -(j * 1200) / 4
        });
    }


    $('.left-btn').click(function (e) {
        e.preventDefault();
        if (j > 0) {
            j = j - 1;
            fourcut();
        }

    });

    $('.right-btn').click(function (e) {
        e.preventDefault();

        if (j < count - 4) {
            j = j + 1;
            fourcut();
        }
    });


    //sns 갤러리 부분

    //a태그 기본이동 막기
    $('.sns-image ul li a').click(function (e) {
        e.preventDefault();
    })


    $('.sns-image ul li').mouseenter(function () {

        $(this).css('opacity', '0.3');
       // $(this).siblings().css('opacity','0.3');

        var imagesrc = $(this).children().attr('href');
        console.log(imagesrc);

        $('.big-img>img').attr('src', imagesrc);
    });

    $('.sns-image ul li').mouseleave(function () {
        $(this).css('opacity','1');
        //$(this).siblings().css('opacity', '0.3');

    }); // mouseenter,mouseleave




}); //jQuery
