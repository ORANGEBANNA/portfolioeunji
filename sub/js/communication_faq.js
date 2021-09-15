/*communication_faq.js*/

$(function(){
	
	$('.faq-txt table .question').click(function(){
		$(this).next().slideToggle().siblings().find('.answer').slideUp();
		
	});
	
	
	
});