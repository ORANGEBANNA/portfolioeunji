/*menu_new&hot.js*/

//1. 스크롤했을때 summer멘트 왼쪽에서 슈웅!
//2. 스크롤했을때 뉴메뉴 1번->2번->3번-4번 순서대로 떠오르게 구현

$(function () {
    
    
    //alert('dd');
    
$(window).scroll(function () {
        //2. 스크롤했을때 뉴메뉴 1번->2번->3번-4번

        //console.log(winH);
        // new1~new4까지의 offset/top값 구하기
    var winH = $(window).scrollTop();
        console.log(winH);
    
    var gap = 800;
  
    var flowLeft_1 = $('.new1').offset().top-gap;
    var flowLeft_2 = $('.new2').offset().top-gap;
    var flowLeft_3 = $('.new3').offset().top-gap;
    var flowLeft_4 = $('.new4').offset().top-gap;
	//console.log(a,b,c,d);
    
        
    if(flowLeft_1<winH){
        $('.new1').stop().animate({
            marginLeft:0
        },600);

    }
        
	if(flowLeft_2<winH){
		$('.new2').stop().animate({
			marginLeft:0
		},600);
	}	
	
	if(flowLeft_3<winH){
		$('.new3').stop().animate({
			marginLeft:0
		},600);
	}
	
	if(flowLeft_4<winH){
		$('.new4').stop().animate({
			marginLeft:0
		},600);
	}
	
   }); //window scroll
    
    }); //jQuery

 


