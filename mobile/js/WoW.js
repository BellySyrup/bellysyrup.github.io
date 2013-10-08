$(function(){
	// create list of toons from array
	console.log('WoW loaded');
	var toons = new Array();
	toons[0] = 'Helwyr';
	toons[1] = 'Foongai';
	toons[2] = 'Laughterhaus';
	toons[3] = 'Fleebag';
	toons[4] = 'Acidburn';
	toons[5] = 'Brewmeister';
	toons[6] = 'Thorynn';
	toons[7] = 'Baninii';
	toons[8] = 'Runee';

	// loop through toons array
	$.each(toons,function(index,value){
		// console.log(value);
		checkToon(value);
		$('#toons').append('<li><a href="http://us.battle.net/wow/en/character/jaedenar/'+value+'/simple"><img src="" id="'+value+'" alt="'+value+'"/>'+value+'</a><a href="http://www.guildox.com/wow/toon/us/Jaedenar/'+value+'"></a></li>')
	});
	 $("#list").listview("refresh");

	 //http://us.battle.net/static-render/us/jaedenar/126/132626046-avatar.jpg Helwyr Thumbnail

	 
	 
});

function foo(data) {
	console.log(data);
	console.log("http://us.battle.net/static-render/us/"+data.thumbnail);
	$('#'+data.name).attr('src','http://us.battle.net/static-render/us/'+data.thumbnail)
}
 

function checkToon(name){
	$.ajax({
	  url: "http://us.battle.net/api/wow/character/jaedenar/"+name+"?jsonp=foo",
	  type: 'GET',
	  dataType: 'jsonp'
	});
}