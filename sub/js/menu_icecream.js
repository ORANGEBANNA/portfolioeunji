//icecream.js

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
	
	//탭메뉴 스크롤 어느 시점에 내려오게 하기
	
	
	//화면 스크롤시 원하는 지점 찾기
	$(window).scroll(function(){
		
	var winH = $(window).scrollTop();
	console.log(winH);
        
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
		
	});//화면 스크롤
	
	//탭메뉴 클릭시 그 메뉴 위치로 스크롤탑 구현하기
	
	$('.menu-title-one li').click(function(e){
		
		e.preventDefault();
		
		$(this).addClass('on').siblings().removeClass('on');
		
		var idx = $(this).index();
		//console.log(idx);
		
		var section = $('section>div').eq(idx);
		//console.log(section);
		
		var secDistance = section.offset().top-150;
		console.log(secDistance);
		
		$('html,body').animate({
			scrollTop: secDistance
		});
		
	
	});// 탭메뉴 클릭
	
	
	
});//jQuery