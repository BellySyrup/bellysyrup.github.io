$(function(){
  var config = {
            move: '0px',
            reset: true
          };

  window.scrollReveal = new scrollReveal(config);

	x=" <a href='http://www.innovasium.com' target='_blank'><img src='https://googledrive.com/host/0BxjvFCbJpltvbDRyZUZZYXBCa2s/inno.png' alt='Powered by Innovasium'/></a>";
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

    jQuery('#bannerText').css({
      'opacity' : 1-(scrollPos/300)
    });
    
    $('.banner').css({
      'background-position' : 'center ' + (-scrollPos/4)+"px"
    });    
  }