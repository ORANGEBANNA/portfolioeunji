/*flow.js*/

function readyTxt(){
	$('.main-txt').css({
		top: '-100px'
	});
}

function downTxt(){
	$('.main-txt').animate({
		top: 0
	},1500);
}

$(function(){
	//alert('dd');
	readyTxt();
	
	downTxt();
	
});