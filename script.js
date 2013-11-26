$(function(){
	title();
	footer();
});

function title(){
	console.log('title();');
	title = 'mnmlist';
	$('.post h2 a:first-child').html(title);
}

function footer(){
	console.log('footer();');
	link1 = '<a href="http://sconzen.github.io/posts" id="posts">more</a>';
	link2 = '<a href="http://sconzen.github.io/">uncopyright</a>';
	link3 = '<a href="http://sconzen.github.io/">feed</a>';
	link4 = '<a href="http://sconzen.github.io/less.html">less</a>';
	footer = link1 + ' :: ' + link2 + ' :: ' + link3 + ' :: ' + link4;
	$('#footer').html('<p>'+footer+'</p>');
}