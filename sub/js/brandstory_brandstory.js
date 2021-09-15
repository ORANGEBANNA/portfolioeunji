/*brandstory_brandstory.js*/

$(function(){

$(window).scroll(function(){
    
    var winH = $(window).scrollTop();
    console.log(winH);
    
    var gap = 600;
    
    
    
    var flowTop_1 = $('.brand_1').offset().top-gap;
    var flowTop_2 = $('.brand_2').offset().top-gap;
    var flowTop_3 = $('.brand_3').offset().top-gap;
    var flowTop_4 = $('.brand_4').offset().top-gap;
    
    //console.log(flowTop_1,flowTop_2,flowTop_3,flowTop_4);
    
    if(flowTop_1<winH){
        $('.brand_1').stop().animate({
            opacity: 1,
            bottom:'-60px'
        },400);
    }
     if(flowTop_2<winH){
        $('.brand_2').stop().animate({
            opacity: 1,
            bottom:'-60px'
        },400);
    }
     if(flowTop_3<winH){
        $('.brand_3').stop().animate({
            opacity:1,
            bottom:'-60px'
        },400);
    }
     if(flowTop_4<winH){
        $('.brand_4').stop().animate({
            opacity:1,
            bottom:'-60px'
        },400);
    }
    
    
}); //window scroll

}); //jquery