$(function(){
	// create list of toons from array
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

	$.each(toons,function(index,value){
		checkToon(value);
		$('#toons').append('<li id="'+value+'"><a href="http://us.battle.net/wow/en/character/jaedenar/'+value+'/simple"><img src="" id="" alt=""/><span>'+value+'</span></a><a href="http://www.guildox.com/wow/toon/us/Jaedenar/'+value+'"></a></li>');
	});

	$("#list").listview("refresh");
	 
});

function foo(data) {

	n = data.name;
	l = data.level;
	r = data.race;
	g = data.gender;
	rl = data.realm;
	c = data.class;
	t = 'http://us.battle.net/static-render/us/'+data.thumbnail;
	ap = data.achievementPoints;
	PC(c);

	$this = $('#'+n);
	$this.find('img').attr('src',t);
	$this.find('span').html(n + ' - ' + l + ' ' + c);

	console.log(data);

}
 

function checkToon(name){
	$.ajax({
	  url: "http://us.battle.net/api/wow/character/jaedenar/"+name+"?jsonp=foo",
	  type: 'GET',
	  dataType: 'jsonp'
	});
}

function PC(e){switch(e){case 1:c="Warrior";break;case 2:c="Paladin";break;case 3:c="Hunter";break;case 4:c="Rogue";break;case 5:c="Priest";break;case 6:c="Death Knight";break;case 7:c="Shaman";break;case 8:c="Mage";break;case 9:c="Warlock";break;case 10:c="Monk";break;case 11:c="Druid";break}return c}