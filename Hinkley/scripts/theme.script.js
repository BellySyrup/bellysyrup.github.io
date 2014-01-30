/*

	1. HEADER
	2. NAVIGATION
	4. WORK
	5. BLOG
	6. TOGGLE BOX (SHORTCODES)
	7. SKILLBAR (SHORTCODES)
    8. TAB CONTENT (SHORTCODES)
	9. ALERT BOX (SHORTCODES)
	10. CLEAR INPUNT

*/

(function ($) {

    'use strict';

    /* --------------------------------------------------------------------- */
    /* 1. HEADER
    /* --------------------------------------------------------------------- */

    var navistatus = 0;

    $("#open-nav").click(function(){
        if(navistatus==0)
        {
            $("#header").clearQueue().animate({
                left: '0'
            },500,'swing');
            $("#page-wrapper").clearQueue().animate({
                left: '260px'
            },500,'swing');

            navistatus = 1;
        } else {
            $("#page-wrapper").clearQueue().animate({
                left: '0'
            },600,'easeOutBounce');
            $("#header").clearQueue().animate({
                left: '-260px'
            },600,'easeOutBounce');

            navistatus = 0;
        }
    });


    $(".scrollto").click(function(){
        var topoffset = 0;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });




    /* --------------------------------------------------------------------- */
    /* 2. NAVIGATION
    /* --------------------------------------------------------------------- */

    $("#main-navigation li a").click(function(){
        var topoffset = 0;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });
	

    var mainNav = $("#main-navigation"),
        mainItems = mainNav.find("a"),
        scrollTo = mainItems.map(function(){
            var item = $( $( this ).attr( "href" ) );
            if (item.length) { return item; }
        });

    $( window ).scroll( function () {

        var mainHeight = mainNav.height();
        var offsetTop = $( this ).scrollTop() + mainHeight + 200;

        var current = scrollTo.map( function() {
            if( $( this ).offset().top < offsetTop )
                return this;
        } );

        if( current.length ) {
            current = current[ current.length -1 ];
            var id = current.attr( "id" );

        } else {
            var id = "";
        }

        mainItems
            .removeClass( "active" )
            .filter( "[href=#"+id+"]" )
            .addClass( "active" );
    });




    /* --------------------------------------------------------------------- */
    /* 3. BANNER
    /* --------------------------------------------------------------------- */

	function sizeBanner()
	{
		var windowHeight = $(window).height();
		$("#banner").css("height",windowHeight+"px");
	}
	$(window).resize(function(){
		sizeBanner()
	});




    /* --------------------------------------------------------------------- */
    /* 4. WORK
    /* --------------------------------------------------------------------- */

   	$("#close-work-wrapper").click(function(){
        $("#work-wrapper").slideUp(1000);
        $(".work-article").fadeOut(800);
   	});

    function doafterloadwork()
    {
        $("#work-loader").css("display","none");
        $("#work-wrapper .close").fadeIn(800);
        $(".work-article").fadeIn(1000);
        $("#work-wrapper").css("height","auto");

        /* === FUNCTION TO DO AFTER LOADED THE WORK DETAILS === */

        $('.work-slider').bxSlider({
            slideWidth: 1600,
            minSlides: 1,
            maxSlides: 1
        });
    }

    $("#work-preview li a").click(function(){

        var windowheight = $(window).height();
        var folder  = 'work/',
            hash    = $(this).attr('work-link'),
            url     = hash.replace(/[#\#]/g, '' );

        if($("#work-wrapper").is(":hidden"))
        {
            $("#work-wrapper .close").hide();
            $("#work-loader").css("display","block");
            $("#load-work-content").html("");
            $("#work-wrapper").css("height",windowheight+"px");
            $("#work-wrapper").slideDown(1000);

            $('html, body').clearQueue().animate({
                scrollTop: $("#work-wrapper").offset().top
            },1400,function(){

                $("#load-work-content").load(folder+url, function(){
                    doafterloadwork();
                });
            });
        } else {
            var getwrapperheight = $("#work-wrapper").height();
            $("#work-wrapper").css("height",getwrapperheight+"px");
            $("#work-wrapper .close").fadeOut(800);
            $(".work-article").fadeOut(800);
            $("#work-loader").delay(850).fadeIn();

            $('html, body').clearQueue().animate({
                scrollTop: $("#work-wrapper").offset().top
            },1800,function(){

                $("#load-work-content").load(folder+url, function(){
                    doafterloadwork();
                });
            });
        }
    });


    /* --------------------------------------------------------------------- */
    /* 5. BLOG
    /* --------------------------------------------------------------------- */

    var minWidth    = 965;
    var windowWidth = $(window).width();

    function setBlog()
    {
        windowWidth = $(window).width();
        if(windowWidth < minWidth)
        {
           $("#blog-preview li .layer").css({
                top: '25%',
                left: '0',
                width: '100%',
                opacity: '1'
           });
        } else {
        $("#blog-preview li .layer").css({
            top: '40%',
            left: '-50%',
            width: '50%',
            opacity: '0'
        });
        }
    }

    setBlog();
    $(window).resize(function(){
        setBlog();
    });


    $("#blog-preview li").mouseenter(function(){
        if(windowWidth > minWidth)
        {
            $(this).children(".layer").clearQueue().animate({
                left: '0',
                opacity: '1'
            },400);
        }
    }).mouseleave(function(){
        if(windowWidth > minWidth)
        {
            $(this).children(".layer").clearQueue().animate({
                left: '-50%',
                opacity: '0'
            },400);
        }
    });



    /* === LOAD BLOG DETAILS === */

    $("#close-blog-wrapper").click(function(){
        $("#blog-wrapper").slideUp(1000);
        $(".blog-article").fadeOut(800);
    });

    function doafterloadblog()
    {
        $("#blog-loader").css("display","none");
        $("#blog-wrapper .close").fadeIn(800);
        $(".blog-article").fadeIn(1000);
        $("#blog-wrapper").css("height","auto");

        /* === FUNCTION TO DO AFTER LOADED THE WORK DETAILS === */

        $('.blog-slider').bxSlider({
            slideWidth: 1600,
            minSlides: 1,
            maxSlides: 1
        });
    }

    $("#blog-preview li a").click(function(){

        var windowheight = $(window).height();
        var folder  = 'blog/',
            hash    = $(this).attr('blog-link'),
            url     = hash.replace(/[#\#]/g, '' );

        if($("#blog-wrapper").is(":hidden"))
        {
            $("#blog-wrapper .close").hide();
            $("#blog-loader").css("display","block");
            $("#load-blog-content").html("");
            $("#blog-wrapper").css("height",windowheight+"px");
            $("#blog-wrapper").slideDown(1000);

            $('html, body').clearQueue().animate({
                scrollTop: $("#blog-wrapper").offset().top
            },1400,function(){

                $("#load-blog-content").load(folder+url, function(){
                    doafterloadblog();
                });
            });
        } else {
            var getwrapperheight = $("#blog-wrapper").height();
            $("#blog-wrapper").css("height",getwrapperheight+"px");
            $("#blog-wrapper .close").fadeOut(800);
            $(".blog-article").fadeOut(800);
            $("#blog-loader").delay(850).fadeIn();

            $('html, body').clearQueue().animate({
                scrollTop: $("#blog-wrapper").offset().top
            },1800,function(){

                $("#load-blog-content").load(folder+url, function(){
                    doafterloadblog();
                });
            });
        }
    });



    /* --------------------------------------------------------------------- */
    /* 6. TOGGLE BOX (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".toggle-box .toggle .header").click(function(){
		if($(this).parent(".toggle").children(".content").is(":hidden"))
		{
            $(this).addClass("active");
			$(this).parent(".toggle").children(".content").slideDown();
			$(this).parent(".toggle").children(".header").children(".plus").css({ display: 'none' });
			$(this).parent(".toggle").children(".header").children(".minus").css({ display: 'inline-block' });
		} else {
            $(this).removeClass("active");
			$(this).parent(".toggle").children(".content").slideUp();
			$(this).parent(".toggle").children(".header").children(".plus").css({ display: 'inline-block' });
			$(this).parent(".toggle").children(".header").children(".minus").css({ display: 'none' });
		}
	});
	
	
	
	
    /* --------------------------------------------------------------------- */
    /* 7. SKILLBAR (SHORTCODES)
    /* --------------------------------------------------------------------- */
	
	$(".skillbar").each(function(){
		var percent = $(this).attr("data-percent");
		$(this).children(".percent-bg").css("width",percent+"%");
	});




    /* --------------------------------------------------------------------- */
    /* 8. TAB CONTENT (SHORTCODES)
     /* --------------------------------------------------------------------- */

    $(".tab-content-navi").each(function(){
        var link = $(this).children("li:first-child").children("a");
        var contentId = link.attr("open-content");
        $("#"+contentId).css("display","block");
        link.addClass("active");
    });

    $(".tab-content-navi li a").click(function(){
        var contentId = $(this).attr("open-content");

        if($("#"+contentId).is(":hidden"))
        {
            var list = $(this).parent("li").parent("ul");
            list.children("li").each(function(){
                $(this).children("a").removeClass("active");
                var contentId = $(this).children("a").attr("open-content");
                $("#"+contentId).css("display","none");
            });
            $("#"+contentId).fadeIn(400);
            $(this).addClass("active");
        }
    });
	
	
	
	
    /* --------------------------------------------------------------------- */
    /* 9. ALERT BOX
    /* --------------------------------------------------------------------- */
	
	$(".alert-box .close").click(function(){
		$(this).parent(".alert-box ").fadeOut(350);
	});




    /* --------------------------------------------------------------------- */
    /* 10. CLEAR INPUNT
    /* --------------------------------------------------------------------- */

    var defaultvalue;
    $(".cleartext").focusin(function() {
        defaultvalue = this.defaultValue;
        if(this.value == this.defaultValue) {
            this.value = '';
        }
    }).focusout(function(){
        if($(this).val() == '')
        {
            this.value = defaultvalue;
        }
    });


})(jQuery);

