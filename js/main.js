jQuery(function($){

	$('.tempMsg').hover(function(){
		$(this).addClass('hover')
	},function(){
		$(this).removeClass('hover')
	});
	
	$('.tempMsg').click(function(){
		if($(this).hasClass('clicked')){
			$(this).removeClass('clicked');
		}else{
			$(this).addClass('clicked');
		}
	});
	
});
