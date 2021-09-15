/*brandstory_history.js*/

$(function () {
    
    $(window).scroll(function(){
       
        var winH = $(window).scrollTop();
        console.log(winH);
        
       if(winH>50){
           $('.wrap_1').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
       if(winH>330){
           $('.wrap_2').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
        if(winH>670){
           $('.wrap_3').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
        if(winH>900){
           $('.wrap_4').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
        if(winH>1250){
           $('.wrap_5').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
        if(winH>1400){
           $('.wrap_6').animate({
               opacity:1,
               top:'40px'
           },700);
       } 
        
        
        
    });//window scroll
   



}); //jquery
