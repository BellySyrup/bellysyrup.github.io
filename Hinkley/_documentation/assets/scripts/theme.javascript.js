
jQuery(document).ready(function($) {


    /* --------------------------------------------------------------------- */
    /* NAVIGATION
    /* --------------------------------------------------------------------- */

    $("#main-navigation li a").click(function(){
        var topoffset = 100;
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
	
	
	
    $(".sub-navi a").click(function(){
        var topoffset = 100;
        $('html, body').clearQueue().animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - topoffset
        }, 1800,'swing');
        return false;
    });



});

