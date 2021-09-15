//coffee.js



$(function(){
	//클릭시 영양소정보 나오고 들어가기
	
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
	
	//탭메뉴 클릭시 각 메뉴들 스크롤탑 구현
	// 각 메뉴들 top으로부터 값 구하기
	
	

	
	//탭메뉴 클릭했을때
	
	//1. 클릭한 탭메뉴 효과 주기
	$('.menu-title-one li').click(function(e){
			e.preventDefault();
		
		
		$('.menu-title-one li').removeClass('on');
		$(this).addClass('on').siblings().removeClass('on');
		
		var idx = $(this).index();
		//console.log(idx);
		
		var section = $('section>div').eq(idx);
		console.log(section);
		
		var secDistance = section.offset().top-150;
		console.log(secDistance);
		
		$('html,body').stop().animate({
			scrollTop: secDistance
		},700);
		
	}); //탭메뉴 클릭이벤트
	
	//탭메뉴 안보였다가 스크롤 내렸을때 나오기
	
	
	
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
	
	});//window
	
});//jQuery