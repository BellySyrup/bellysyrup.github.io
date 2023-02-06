// Dashy Scripts by stephan
v = '0.1.5';
console.log('Dashy scripts '+v);

// Create images for each IP camara in wrapped div#c
// refreshes every 30 seconds
function camera(){
	var s = 'style="width:100%;max-width:640px;"';
	var c = document.getElementById('c');	// get wrapper
	var builder =  '<img id="c1" '+s+' src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11"/>';
	    builder += '<img id="c2" '+s+' src="http://sconzen.github.io/images/banner.jpg"/>';
	
	c.innerHTML = builder;

	setInterval(function(){
		var c1 = document.getElementById('c1');
		var c2 = document.getElementById('c2');
		//var c3 = document.getElementById('c3');
		
		c1.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
		//c2.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
		//c3.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
		
		c1.srcset = c1.src;
		//c2.srcset = c2.src;
		//c3.srcset = c3.src;
	},5000);
	
}

function ltt() {
	var v = document.getElementById('v');
	var builder =  '<iframe src="https://www.youtube.com/embed?listType=user_uploads&list=LinusTechTips" title="latest LTT"></iframe>';
	v.innerHTML = builder;
}

camera();
ltt();