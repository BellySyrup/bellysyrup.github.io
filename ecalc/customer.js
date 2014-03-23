//*****************************************************************************
//  (c) Copyright by Markus Mueller, Solution for All, www.s4.ch, Switzerland
//
//  All source codes, data, texts, pictures and graphs and their arrangements 
//  are subject to copyright and are the intellectual property of 
//  Solution for All Markus Müller. They may neither be copied for forwarding 
//  nor used in an amended form or non other websites nor servers nor any kind 
//  of electronic device.
//
//  (c) This Source-Code might NOT be used without any permission from M. Mueller
//
//*****************************************************************************
//
//  Custom Shop Definitions & Black List
//  activate URL CHECK!!
//
//
//  Revisions:
//  29.01.14  6.06  Vorbereitung auf Subscription: Custom Components, 
//                  Generate Link & full list of components nun steurbar
//  19.02.13  6.00  Erstellt
//*****************************************************************************

// Illegale Nutzung: verhindert externe Nutzung in einem Frame
if (top!=self) location.replace("./illegalcopy.htm");

//Sprachwahl
var theLanguage ="";
if (getParameterByName("lang") == "de"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_de.js'><\/script>";
} else if (getParameterByName("lang") == "cn"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cn.js'><\/script>";
} else if (getParameterByName("lang") == "cz"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_cz.js'><\/script>";
} else if (getParameterByName("lang") == "es"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_es.js'><\/script>";
} else if (getParameterByName("lang") == "fr"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_fr.js'><\/script>";
} else if (getParameterByName("lang") == "jp"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_jp.js'><\/script>";
} else if (getParameterByName("lang") == "pl"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pl.js'><\/script>";
} else if (getParameterByName("lang") == "pt"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_pt.js'><\/script>";
} else if (getParameterByName("lang") == "ps"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ps.js'><\/script>";
} else if (getParameterByName("lang") == "ru"){
   theLanguage = "<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_ru.js'><\/script>";
} else {
   theLanguage ="<script language='javascript' type='text/javascript' src='./calcinclude/lang/lang_en.js'><\/script>"; //Default sprache Enlish
}


var theCSS		= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc.css' />";

var theCells	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/cell.js'><\/script>";

var theESC	 	= "<script language='javascript' type='text/javascript' src='./calcinclude/data/esc.js'><\/script>";

var theMotors   = "<OPTION value=39>actro <OPTION value=52>Aeolian <OPTION value=41>ARC <OPTION value=1>AXI <OPTION value=23>Cobra <OPTION value=25>Cyclon <OPTION value=65>D-Power <OPTION value=38>Dualsky <OPTION value=27>Dymond <OPTION value=30>E-flite <OPTION value=31>EMAX <OPTION value=62>Engel MT <OPTION value=10>ePower X <OPTION value=50>EP Product <OPTION value=69>Exceed RC <OPTION value=32>Faigao <OPTION value=33>Flyware <OPTION value=19>Gens ace <OPTION value=2>Hacker <OPTION value=36>Himax <OPTION value=3>Hyperion <OPTION value=28>Infinite <OPTION value=66>iPower <OPTION value=64>Jeti <OPTION value=61>KDEDirect <OPTION value=37>KEDA <OPTION value=6>Kontronik <OPTION value=20>Lehner <OPTION value=11>Leomotion <OPTION value=59>Leopard <OPTION value=56>LiPolice <OPTION value=55>Magic Torque <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=60>Planet-Hobby <OPTION value=40>Plettenberg <OPTION value=53>PowerHD <OPTION value=48>ProTronik <OPTION value=51>Pulso <OPTION value=54>RCTimer <OPTION value=43>RedRock <OPTION value=47>RimFire <OPTION value=44>robbe ROXXY <OPTION value=42>Roton <OPTION value=8>Scorpion <OPTION value=63>SunnySky <OPTION value=68>Tacon <OPTION value=58>Tenshock <OPTION value=45>Thunder Tiger <OPTION value=46>Tiger Motor <OPTION value=34>Torcster <OPTION value=35>Turnigy <OPTION value=21>Typhoon (HET) <OPTION value=7>Waypoint <OPTION value=49>Xera <OPTION value=67>X-Team"; // <OPTION value=0>Alle </OPTION>";

var thePropeller= "<script language='javascript' type='text/javascript' src='./calcinclude/data/propeller.js'><\/script>";

var theCounter	= "<img src='http://www.easycounter.com/counter.php?s4a,eCalc' border='0' alt='Website Hit Counter'>"  //esayCounter wird nur noch als Totalizer genutzt
                  + "<a href='http://www.modellflugtipps.de/toplinks/toplinks.php?id=2016' target='_blank'>"
                  + "<img src='http://www.modellflugtipps.de/toplinks/image.php?id=2016' border=0 vspace=0 hspace=0 height='0' width='0'></a>";

var theShopLogo = "<a href='http://www.s4a.ch' target='_blank'><img border='0' src='./calcinclude/logo/p_s4alogo.gif' width='81' height='45'></a>"; 

var theDonationForm =""; //wird erst im lang_xx.js gesetzt

var theEDriveLink= "";

var searchButton = "<input class='input' type='button' id='BtnSearch' name='BtnSearch' value='   search...   ' disabled onClick='javascript:openSearch();'/>";


userStatementAccepted = false;


function getParameterByName(name)
{
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.search);
  if(results == null)
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}


// Links von fremden Seiten werden nicht akzeptiert!!
function isCallAllowed(theShopName, theShopURL){  
   var tmpStr = top.location.search.split("&");       // 1. Parameter in URL = "?Shopname"
   if ((tmpStr[0] == "?"+theShopName) && ((top.document.referrer.search(theShopURL) >= 0) || (top.document.referrer.search("s4a.ch") >=0) || (top.document.referrer.search("ecalc.ch") >=0) || (top.document.referrer == ""))){
      return true;
   }else {
      return false;
   }
}

//Meldungenbeim Eintreten und Verlassen

function acceptUserStatement() {
   var msg = "";

   
   if (!isServicePayed) msg = msgUserStatement1;
   msg = msg + msgUserStatement2;
   if (confirm(msg)){
      userStatementAccepted = true;
   } else {
     alert(msgUserStatementNotAccepted);
     location.replace("./indexcalc.htm");
   }
}

function showLeaveMsg(){
  var msg="";

  if(!isServicePayed){

     msg= msgLeave;
        
     //alert(history.next.search("s4a.ch"));
     //if (history.next.search("s4a.ch") == -1){
     alert(msg);
     //document.paypal.submit();   
     //}
  }
}


// Black List: hier könnten fremde Nutzer geblockt werden --> auch bei edrive.htm einfügen!

if (top.document.referrer.indexOf("modellbau-ramseyer.ch") >= 0) location.replace("./accessdenied.htm?modellbau-ramseyer.ch");
if (top.document.referrer.indexOf("flightcorner.ch") >= 0) location.replace("./accessdenied.htm?flightcorner.ch");
if (top.document.referrer.indexOf("injetdesigns.com") >= 0) location.replace("./accessdenied.htm?injetdesigns.com");
if (top.document.referrer.indexOf("rcshop.kz") >= 0) location.replace("./accessdenied.htm?rcshop.kz");
if (top.document.referrer.indexOf("zenn.hu") >= 0) location.replace("./accessdenied.htm&zenn.hu");
if (top.document.referrer.indexOf("2dogrc.com") >= 0) location.replace("./accessdenied.htm?2dogrc.com");
if (top.document.referrer.indexOf("thommys.com") >= 0) location.replace("./accessdenied.htm?thommys.com");
if (top.document.referrer.indexOf("rc-terminal.de") >= 0) location.replace("./accessdenied.htm?rc-terminal.de");





// Kunden Whitelabeling
var isServicePayed = true;     //true: payed customized eCalc version
var withCustom = false;        // ture: eCalc does allow Custom Components
var withLinkGeneration = true; //true: eCalc dees display "generate Link" and does handle parameter links
var isFullList = true;         //true: eCalc does display the full set of components

if (isCallAllowed("s4a","s4a.ch") || isCallAllowed("s4a","ecalc.ch") ) {
   isServicePayed = false;
   withCustom = false;
   withLinkGeneration = false;
   isFullList = false;
}

else if (isCallAllowed("ecalc","ecalc.ch") || isCallAllowed("ecalc","s4a.ch") ) {
   isServicePayed = false;
   withCustom = false;
   withLinkGeneration = false;
   isFullList = false;
}

//else if (isCallAllowed("ecalc","rcgroups.com")) {
//   isServicePayed = false;
//   withCustom = false;
//   withLinkGeneration = false;
//}


else if (isCallAllowed("castle","castlecreations.com")){ //Customer since 17.6.2010, Hersteller
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_castle.css' />";
   theShopLogo = "<a href='http://www.castlecreations.com' target='_top'><img border='0' src='./calcinclude/logo/castlecreations.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors   = "<OPTION value=1>AXI <OPTION value=30>E-flite <OPTION value=2>Hacker <OPTION value=36>Himax <OPTION value=61>KDEDirect <OPTION value=6>Kontronik <OPTION value=11>Leomotion <OPTION value=5>NeuMotors <OPTION value=57>O.S.Motor <OPTION value=40>Plettenberg <OPTION value=47>RimFire <OPTION value=8>Scorpion";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js'> </script>";
   searchButton = "";
}

else if (isCallAllowed("dualsky","dualsky.com")) { //Customer since 15.7.10, Hersteller
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_dualsky.css' />";
   theShopLogo = "<a href='http://www.dualsky.com/' target='_top'><img border='0' src='./calcinclude/logo/dualsky.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=38 selected>Dualsky </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_dualsky.js'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_dualsky.js'> </script>";
}

else if (isCallAllowed("grischa","grischamodellbau.ch")) { //Commercial since 1.1.12, Distributor
   theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa.jpg'></a>";
   if (window.location.pathname.indexOf("fancalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_fan.jpg'></a>";
   } else if (window.location.pathname.indexOf("helicalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_heli.jpg'></a>";
   } else if (window.location.pathname.indexOf("xcoptercalc")> 0){
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_xcopter.jpg'></a>";
   } else {
      theShopLogo = "<a href='http://www.grischamodellbau.ch' target='_top'><img border='0' src='./calcinclude/logo/grischa_prop.jpg'></a>";
   };

   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors    = "<OPTION value=30>E-flite <OPTION value=50>EP Product<OPTION value=36>Himax <OPTION value=48>ProTronik <OPTION value=44>robbe ROXXY <OPTION value=45>Thunder Tiger </OPTION>";
   searchButton = "";
}

else if (isCallAllowed("leomotion","leomotion.com") || isCallAllowed("leomotion","leomotion.ch")|| isCallAllowed("leomotion","slowflyer.ch")) { //10.11, Gratis
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_leomotion.css' />";
   theShopLogo = "<a href='http://www.leomotion.com' target='_top'><img border='0' src='./calcinclude/logo/leomotion.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js'> </script>";
   theMotors = "<OPTION value=11 selected>Leomotion <OPTION value=5>NeuMotors </OPTION>";
   theEDriveLink= "&nbsp;<span onClick=javascript:addDrive('http://www.ecalc.ch/admin_leomotion/add.asp')> > </span>";
}

else if (isCallAllowed("eflight","")){  //since 2006, , Distributor

   //alert(top.document.referrer);
   if ((top.document.referrer.search("epower.ch/login") >= 0)|| (top.document.referrer.search("ecalc.ch") >=0)) {
      theShopLogo = "<a href='http://www.eflight.ch' target='_top'><img border='0' src='./calcinclude/logo/eflight.gif'></a>";
      theDonationForm = theShopLogo; // Keine spende anzeigen
      theMotors = "<OPTION value=1>AXI <OPTION value=10>ePower <OPTION value=2>Hacker <OPTION value=3>Hyperion <OPTION value=64>Jeti <OPTION value=4>Mini AC <OPTION value=9>Mega Motor <OPTION value=5>NeuMotors <OPTION value=6>Kontronik <OPTION value=8>Scorpion </OPTION>";
      searchButton = "";
   }else{  //alle anderen Aufrufe müssen über Login!
       sec="motorcalc";
       //alert(window.location.pathname);
       if (top.location.pathname=="/motorcalc.php" || top.location.pathname=="/motorcalc.htm"){
         sec="motorcalc";
       }
       else if (top.location.pathname=="/fancalc.php" || top.location.pathname=="/fancalc.htm"){
          sec="fancalc";
       }
       else if (top.location.pathname=="/helicalc.php" || top.location.pathname=="/helicalc.htm"){
          sec="helicalc";
       }
       else if (top.location.pathname=="/xcoptercalc.php" || top.location.pathname=="/xcoptercalc.htm"){
          sec="xcoptercalc";
       };

       top.location.replace("http://epower.ch/login/in.php?sec="+sec);
   } 

}

else if (isCallAllowed("hacker","hacker-motor.com") || isCallAllowed("hacker","hacker-motor-shop.com") || isCallAllowed("hacker","para-rc.de")){ //Hersteller test bis 31.1.14
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_hacker.css' />";
   theShopLogo = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='http://www.hacker-motor.com/e_calc/hacker_logo_left.png'></a>";
   theDonationForm = "<a href='http://hacker-motor.com' target='_top'><img border='0' src='http://www.hacker-motor.com/e_calc/hacker_logo_right.png'></a>";   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theMotors = "<OPTION value=2 selected>Hacker </OPTION>";
   theCells="<script language='JavaScript' src='./calcinclude/data/cell_hacker.js'> </script>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_hacker.js'> </script>";
}

else if (isCallAllowed("neumotors","neumotors.com")){ //Hersteller since 15.5.2010
   theCSS	= "<link rel=stylesheet type='text/css' href='calcinclude/css/ecalc_neumotors.css' />";
   theShopLogo = "<a href='http://www.neumotors.com' target='_top'><img border='0' src='./calcinclude/logo/neumotors.jpg'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theMotors = "<OPTION value=5 selected>NeuMotors </OPTION>";
   theESC="<script language='JavaScript' src='./calcinclude/data/esc_castle.js'> </script>";

}


//---- TESTING -------------

else if (isCallAllowed("generic","ecalc.ch")) { //Testing 20.3
   theShopLogo = "<a href='http://www.s4a.ch/' target='_top'><img border='0' src='./calcinclude/logo/generic.gif'></a>";
   theDonationForm = theShopLogo; // Keine spende anzeigen
   theShopForm = "";
   withLinkGeneration = false;
   isFullList = false;      

}


//end Testing-----


else{
    isServicePayed = true;
    isCommercialUser = false;
    withLinkGeneration = false;
    isFullList = true;
}


// Werbung Anzeigen, wenn der Service nicht für einen Kunden ist
var displayAds=!isServicePayed;



         
         