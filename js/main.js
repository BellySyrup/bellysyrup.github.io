jQuery(function($){
	randomColor = Math.floor((Math.random()*8)+1);
	switch(randomColor){
		case 1:
			randomColor = 'teal'
			break;
		case 2:
	  		randomColor = 'blue'
	  		break;
	  	case 3:
			randomColor = 'purple'
			break;
		case 4:
	  		randomColor = 'darkpurple'
	  		break;
	  	case 5:
			randomColor = 'red'
			break;
		case 6:
	  		randomColor = 'orange'
	  		break;
	  	case 7:
			randomColor = 'green'
			break;
		case 8:
	  		randomColor = 'skyblue'
	  		break;
		default:
	  		randomColor = 'blue'
	}
	//$('body').css({'background':randomColor});
	console.log($('body').css('background-color'));
});


/*
.teal{background: #008299;}
.blue{background: #2672EC;}
.purple{background: #8C0095;}
.darkpurple{background: #5133AB;}
.red{background: #AC193D;}
.orange{background: #D24726;}
.green{background: #008A00;}
.skyblue{background: #094AB2;}

*/