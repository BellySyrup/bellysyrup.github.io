$(function(){
  var config = {
            reset: true
          };

  window.scrollReveal = new scrollReveal(config);

	x=" <a href='http://www.innovasium.com' target='_blank'><img src='img/inno.png' alt='Powered by Innovasium'/></a>";
	$(".inno").each(function(){
		y=$(this).find("h3").html();
		y+=x;$(this).find("h3").html(y);
	});
	$(".banner, .thumbnail").addClass("animated fadeIn");

});
$(window).scroll(function() {	      
		scrollBanner();	      
});
function scrollBanner() {
    scrollPos = jQuery(this).scrollTop();

    // jQuery('.banner div').css({
    //   'margin-top' : -(scrollPos/3)+"px",
    //   'opacity' : 1-(scrollPos/300)
    // });
    
    $('.banner').css({
      'background-position' : 'center ' + (-scrollPos/8)+"px"
    });    
  }