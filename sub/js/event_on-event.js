/*event_on-event.js*/

//초기설정 함수
function readyAct(){
	
	$('.main-txt').css({
		top: '-100px'
	});
	
}


//켰을때 진행되는 함수
function flowTxt(){
	
	$('.main-txt').animate({
		top: '60px'
	},1500,'easeOutElastic');
	
}


$(function(){
	
	//alert('dd');
	
	readyAct();
	
	flowTxt();
	
	
});//jquery