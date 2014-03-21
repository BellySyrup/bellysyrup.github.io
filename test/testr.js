$(function(){
	init();
});

function init(){
	$('head').append('<link rel="stylesheet" href="pesticide.css">');
	addBox();
	initPesticide();
	initImageSwap();




	var height = $('.testrLegend').height()+32;
	console.log(height)
	$('.testrLegend').css({'bottom':-height});
	$('.testrLegend').hover(function(){
		$('.testrLegend').stop().animate({'bottom':'0'});
	},function(){
		$('.testrLegend').stop().animate({'bottom':-height});
	});
}

function addBox(){
	console.log('/****** addBox(); ******/');
	var x = '<div class="testrLegend"></div>';
	$('body').append(x);
	$('body').addClass('testr');
}

/****** Image Swap ******/

function initImageSwap(){
	var imageswapBtn = '<div class="testrBtn imageSwapBtn">Image Swap</div>';
	$('.testrLegend').append(imageswapBtn)
	$('.imageSwapBtn').click(function(){
		toggleImageSwap();
	});
}

function toggleImageSwap(){
	var x = $('body').hasClass('imageSwap');
	var y = 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/800px-Smiley.svg.png';
	if(x){
		$('body').removeClass('imageSwap');
		$('.imageSwapBtn').removeClass('active');
		console.log('/****** Image Swap On ******/');
	}else{
		$('body').addClass('imageSwap');
		$('.imageSwapBtn').addClass('active');
		console.log('/****** Image Swap On ******/');
	}
}


/****** Pesticide ******/

function initPesticide(){
	var pestBtn = '<div class="testrBtn pesticideBtn">pesticide</div>';
	$('.testrLegend').append(pestBtn)
	$('.pesticideBtn').click(function(){
		togglePesticide();
	});
}

function togglePesticide(){
	var x = $('body').hasClass('pesticide')
	if(x){
		$('body').removeClass('pesticide');
		$('.pesticideBtn').removeClass('active');
		console.log('/****** Pesticide Off ******/');
	} else {
		$('body').addClass('pesticide');
		$('.pesticideBtn').addClass('active');
		console.log('/****** Pesticide On ******/');
	}
}