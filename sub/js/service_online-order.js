/*service_online-order.js*/


$(function () {

    $(window).scroll(function () {
        var winH = $(window).scrollTop();
        console.log(winH);

        //delivery-service app 하나씩 뿅뿅


        if (winH > 100) {
            $('.delivery-app>ul>li.delivery-1').animate({
                opacity: 1,
                bottom: '-20px'
            }, 700, 'easeOutElastic');

            $('.delivery-app>ul>li.delivery-2').delay(500).animate({
                opacity: 1,
                bottom: '-20px'
            }, 700, 'easeOutElastic');

            $('.delivery-app>ul>li.delivery-3').delay(900).animate({
                opacity: 1,
                bottom: '-20px'
            }, 700, 'easeOutElastic');

            $('.delivery-app>ul>li.delivery-4').delay(1300).animate({
                opacity: 1,
                bottom: '-20px'
            }, 700, 'easeOutElastic');

        }

		if(winH>500){
			$('.best-up').animate({
                 opacity:1,
				top:'30px'
               
			},700);
		}
        
        if(winH>600){
            $('.best-down').animate({
                opacity:1,
				top:'30px'
            },700);
        }
        
        if(winH>1350){
            $('.txt1').animate({
                bottom:'50px'
            },500,function(){
                $('.txt2').animate({
                   bottom:'50px' 
                },500,function(){
                    $('.txt3').animate({
                       bottom:'50px' 
                    });
                });
            });
        }





    }); //window scroll





}); // jQuery
