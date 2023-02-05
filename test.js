setInterval(function() {
				var myImageElement = document.getElementById('testimg');
					myImageElement.src = 'http://admin:kermit101@192.168.50.11/snap.jpg?JpegCam=11&rand=' + Math.random();
				}, 5000);