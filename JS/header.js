/*header.js*/
//navigation 구현

$(function(){
	
	$('.gnb li').mouseenter(function () {
		$('.sub').slideDown();
	});

	$('header').mouseleave(function () {
		$('.sub').stop().slideUp();
	});
});