---
layout: new
title: galleryDrive.js
---

# GalleryDrive.js

## A basic jquery plugin for google drive hosted files

GalleryDrive lets you create a gallery feed from any public Google Drive folder.

[Demo](http://sconzen.github.io/projects/gallerydrive/demo.html) [Download](http://sconzen.github.io/projects/gallerydrive/gallerydrive.zip)

### Installation

	<script src="js/jquery.min.js"></script>
	<script src="js/galleryDrive.js"></script>

This plugin requires jQuery, which is also included in the demo. Include jQuery.min.js and galleryDrive.js

***

	<script>
		$(function(){
			galleryDrive('0BxjvFCbJpltvRlBOZllQazRlWWs');
		});
	</script>

To set up your GalleryDrive, replace this code with your public folder ID. When you create and open a public folder in google drive, the ID is in the URL.

***

	<div id="galleryDrive"/>

Throw the galleryDrive container anywhere on your page you would like to display your gallery. The gallery is built to be responsive, so it will scale to the size of whatever container you throw it in.

***
