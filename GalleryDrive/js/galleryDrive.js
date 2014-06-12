function galleryDrive(x){
	url = 'https://googledrive.com/host/'+x+'/';
	y='';
	$.get( url, function( data ) {
	  	x = $.parseHTML(data);
	  	console.log(x[3]);
		$('#galleryDrive').html(x[3]);
		$($('.folder-cell a').get().reverse()).each(function(index){ 
		  	// y+='<img src="'+url+$(this)[0].text+'" />';

		  	// todo:
		  	// get file type and build return based on type, ie video, image, sound, text etc...
		  	newFile = $(this)[0].text;
		  	if(newFile.indexOf('jpg') > 0 || newFile.indexOf('png') > 0){
		  		if(newFile == 'me.jpg' || newFile == 'helwyr.jpg' || newFile == 'grad.jpg'){
		  			console.log('exceptions found: ' + newFile);
		  		} else {
		  			y+='<a href="'+url+$(this)[0].text+'" data-lightbox="images"><img src="'+url+$(this)[0].text+'" /></a>';
		  		}
		  	} else if(newFile.indexOf('mp4') > 0){
		  		y+='<video controls><source src="'+url+$(this)[0].text+'" type="video/mp4"></video>';
		  	} else if(newFile.indexOf('txt') > 0){
		  		y+='<a class="download" href="'+url+newFile+'"><p><img src="./img/download.png" alt="download" /></p></a>'

		  	} else {
		  		console.log('file found, but not supported. ' + $(this)[0].text);
		  	}
		});
		$('#galleryDrive').html(y)
	});
}

