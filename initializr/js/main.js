/*************
Project: Tweet Me
Author: Stephan
Description: a string converter for twitter, meant to shorten fully typed words to popular abbreviations, such as be right back -> brb, to adjust for twitters 140 character limit

Current workflow:
	1. focus text area
	2. when key is pressed
		a. check if spacebar is pressed
		b. loop through array
		c. convert string to lowercase
		d. check if matching strings exist
		e. if so convert string to short counterpart
		f. replace string with new string
		g. update counter
		h. if counter is within specifc threshold, adjust color

Todo:
	ignore hashtags
	add tweet button functionality
	test on mobile / browsers
	update info modal
*************/
$(function(){
	b = $('#tweetbox');
	c = $('#counter');
	counter = 0;
	limit = 140;

	b.focus();
	b.keyup(function(e){
		temp = b.val();
		counter = b.val().length;

		if(e.keyCode == 32){
			$.each(w,function(i,v){
			if (temp.toLowerCase().indexOf(v[0]) >= 0){
				n = temp.toLowerCase().replace(v[0], v[1]);
				b.val(n);
			}
		});
		}
		
		
		c.text(counter);
		if(counter >= 130){
			c.removeClass('label-warning');
			c.addClass('label-danger');
		} else if(counter > 120 && counter <= 129){
			c.removeClass('label-danger');
			c.addClass('label-warning');
		} else {
			c.removeClass('label-danger');
			c.removeClass('label-warning');
		}
	});
});
