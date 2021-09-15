//donut.js

$(function(){
	

	
	$('button').click(function(){
		$(this).siblings().css({
			opacity:1
		});
	});
	
	$('.nutrition-info').click(function(){
		$(this).css({
			opacity:0
		});
	});
	
	//탭메뉴 클릭+스크롤탑 이벤트 구현
	
	$('.menu-title-one li').click(function(e){
		
		e.preventDefault();
		//클릭시 'on'클래스 추가하기
		$(this).addClass('on').siblings().removeClass('on');
		
		var idx = $(this).index();
		//console.log(idx);
		
		var section = $('section>div').eq(idx);
		//console.log(section);
		
		var secDistance = section.offset().top-150;
		//console.log(secDistance);
		
		$('html,body').animate({
			scrollTop: secDistance
		});
		
	});
	
	//탭메뉴 어느정도 위치에서 스르륵 오르내리기 구현
	
	$(window).scroll(function(){
		
		
		var winH = $(window).scrollTop();
		//console.log(winH);
        
        var topScroll = 400;
		
		if(winH>topScroll){
			$('.menu-title-one').css({
				top: '220px',
				transition: 'all 3s'
			});
		}else{
			$('.menu-title-one').css({
				top:'-220px',
				transition: 'all 3s'
			});
		}
		
	});
	
	
});//jQuery