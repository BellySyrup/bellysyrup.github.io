$(document).mousemove(function(e) {
	var $width = ($(document).width()) / 255;
	var $pageX = parseInt(e.pageX / $width, 0.5);
	$("body").css("background-color", "hsl("+$pageX+",80% ,65%)");
}); 