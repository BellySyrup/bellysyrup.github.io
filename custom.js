// Dashy Scripts
v = '0.1.2';
console.log('dashy scripts '+v);

// Create images for each IP camara in wrapped div#c
// refreshes every 30 seconds
function camera(){
	var s = 'style="width:100%;max-width:640px;"';
	var c = document.getElementById('c');	// get wrapper
	c.innerHTML = 	'<img id="c1" '+s+' src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11"/>' +
					'<img id="c2" '+s+' src="http://sconzen.github.io/images/banner.jpg"/>'; // create camera img

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
		console.log(v);
		test();
	},30000);

}

function test(){
	
	console.log('testing... potentially volatile!');
	var s = document.createElement('script');
	s.src = 'http://sconzen.github.io/custom.js';
	document.body.appendChild(s);
	
	console.log('done testing... did we make it?');
}

console.log('load custom scripts');

camera();


console.log('end load custom scripts');