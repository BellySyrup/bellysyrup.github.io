// full author name
a = 'Stephan Conzen';

// title of site
b =	'I&apos;m so bad I make medicine sick.';

// long description
c = 'I bring the web to life. I&apos;m so bad I make medicine sick.';

// url for image to display
d = 'http://sconzen.github.io/me.jpg';

// url for site
e = 'http://sconzen.github.io';

// twitter account
f = 'sconzen';

$(function(){g = '<meta name="author" content="'+a+'"><meta name="description" content="'+c+'"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="'+f+'"><meta name="twitter:title" content="'+b+'"><meta name="twitter:description" content="'+c+'"><meta name="twitter:creator" content="'+f+'"><meta name="twitter:image:src" content="'+d+'"><meta name="twitter:domain" content="'+e+'"><meta property="og:type" content="website"><meta property="og:title" content="'+b+'"><meta property="og:site_name" content="'+a+'"><meta property="og:url" content="'+e+'"><meta property="og:description" content="'+c+'"><meta property="og:image" content="'+d+'"><meta name="viewport" content="width=device-width, initial-scale=1">';$('head').append(g);});