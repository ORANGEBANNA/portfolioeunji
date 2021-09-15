/*brandstory_brand-video.js*/

//2. 자동실행 함수 만들기
var autocall;

$(function () {
	autocall = setInterval(leftFlow);

	//3. 마우스 호버시 멈췄다가 다시 실행
	$('.flowimg li').hover(function () {
		clearInterval(autocall);
	}, function () {
		autocall = setInterval(function () {
			leftFlow();
		});
	});

	//브랜드영상 _1cut slider


	//1. 클릭한 tabmenu active class값 주기
	$('.tabmenu>li').click(function (e) {
		e.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

	});
	
	
	//li의 각 너비 값 구하기
	var j = $('.tabmenu>li>div>ul>li').width();
	//console.log(j);
	
	//축적되는 j의 너비를 담을 변수
	var pno = 0;
	
	var num = 0;


	$('.left-btn').click(function(e){
		e.preventDefault();

		num = num - 1;
		//console.log(abc);
		
		pno = num * j;
		
		//console.log(pno);

		$('.tabmenu>li>div>ul>li').stop().animate({
			left: -pno + 'px'
		}, 500);
		

	});


	$('.right-btn').click(function(e){
		e.preventDefault();

		var check = 0; //광클금지
		if (check == 1) return false;
		check = 1;
		
		num = num + 1;
		
		pno = num * j;
		
		//console.log(pno);

		$('.tabmenu>li>div>ul>li').stop().animate({
			left: -pno + 'px'
		}, 500);

	});


	

	///////////클릭 했을때 이동 함수 만들기///////////

	function moveBtn() {
		$('.tabmenu>li>div>ul>li').stop().animate({
			left: -j + 'px'
		}, 500);
	}


}); //jquery


//1.왼쪽으로 이동하는 함수 만들기

var pnum = 0; // 이동 픽셀수

function leftFlow() {

	pnum++; //1씩 증가

	var pw = $('.flowimg li').first().width();
	//console.log(pw);

	if (pnum > pw) {
		$('.flowimg').append($('.flowimg li').first()).css({
			left: 0,
			transition: 'all 3s'
		});

		pnum = 0;

	} else {

		$('.flowimg').css({
			left: -pnum + 'px',
			transition: 'all 3s'
		});
	}

}

//////////////////////////////////////////////////////
