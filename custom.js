// Dashy Scripts
// Grabs camera images every X seconds and refreshes embedded img
setInterval(function() {
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var c3 = document.getElementById('c3');
		c1.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
		c2.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
		c3.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
}, 30000);