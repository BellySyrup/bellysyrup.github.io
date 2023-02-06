// Dashy Scripts
// Grabs camera images every X seconds and refreshes embedded img
console.log('load custom scripts');
var c = document.getElementById('c');	// get wrapper
var x = '<img id="c1" src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11" style="width:100%;"/>';
c.innerHTML = x;

setInterval(function(){
	var c1 = document.getElementById('c1');
	//var c2 = document.getElementById('c2');
	//var c3 = document.getElementById('c3');
	c1.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
	console.log('refresh camera' + c1.src);
	//c2.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
	//c3.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
},30000);

		// <img id="c1" src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11" style="width:100%;"/>
         //   <img id="c2" src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11" style="width:100%;"/>
          //  <img id="c3" src="http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11" style="width:100%;"/>
		  
console.log('end load custom scripts');