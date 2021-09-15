/*brandstory_donut-movie.js*/

//2. 자동실행 함수 만들기
 var autocall;

$(function(){
   
    
	autocall = setInterval(leftFlow);
	
	//3. 마우스 호버시 멈췄다가 다시 실행
	$('.flowimg li').hover(function(){
		 clearInterval(autocall);
	}, function(){
		autocall = setInterval(function(){
			leftFlow();
		});
	});
	
});//jquery


//1.왼쪽으로 이동하는 함수 만들기

var pnum = 0; // 이동 픽셀수

function leftFlow(){
	
	pnum++; //1씩 증가
	
var pw = $('.flowimg li').first().width();
//console.log(pw);

if(pnum>pw)	{
$('.flowimg').append($('.flowimg li').first()).css({
	left:0
});
	
	pnum = 0;
	
}else{

	$('.flowimg').css({
		left: -pnum + 'px'
	});
}
	
}

