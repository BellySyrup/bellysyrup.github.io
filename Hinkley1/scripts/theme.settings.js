/*

	1. WORK PREVIEW HOVERDIR
	2. PARALLAX BACKGROUNDS
	3. SLIDER
	  3.1 MACBOOK DEVICE SLIDER
	  3.2 IPHONE DEVICE SLIDER
	  3.3 COMMENT SLIDER
	4. CAROUSEL
	  4.1 CLIENT CAROUSEL

*/

(function ($) {

    'use strict';

    /* ----------------------------------------- */
    /* 1. WORK PREVIEW HOVERDIR
    /* ----------------------------------------- */

    $(function() {
        $(' #work-preview > li ').each( function() { $(this).hoverdir(); } );
    });


    $(function(){
        $('#work-preview').mixitup();
    });



    /* ----------------------------------------- */
    /* 2. PARALLAX BACKGROUNDS
    /* ----------------------------------------- */

    $('#banner').parallax({
        speed :	0.25
    });
    $('.paralax-content').parallax({
        speed :	0.25
    });



    /* ----------------------------------------- */
    /* 3. SLIDER
    /* ----------------------------------------- */

    /* ==== 3.1 MACBOOK DEVICE SLIDER  ==== */

    $('#macbook-01').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: true
    });

    /* ==== 3.2 IPHONE DEVICE SLIDER  ==== */

    $('#iphone-01').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        auto: true,
        autoDelay: 500
    });

    /* ==== 3.3 COMMENT SLIDER  ==== */

    $('#comment-slider').bxSlider({
        slideWidth: 1200,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
		touchEnabled: false
    });



	$(window).load(function(){

	    /* ----------------------------------------- */
	    /* 4. CAROUSEL
	    /* ----------------------------------------- */

	    /* ==== 4.1 CLIENT CAROUSEL  ==== */

	    $('#client-carousel').carouFredSel({
	        responsive: true,
	        width: '100%',
	        scroll: 2,
	        items: {
	            width: 300,
	            visible: {
	                min: 2,
	                max: 4
	            }
	        }
	    });

	});


})(jQuery);

