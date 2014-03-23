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
//  Library
//
//
//  Revisions:
//  04.02.14  6.06  addDrive() für eDrive Speicherung
//  10.12.13  6.05  getMotorData()/configMotor(): Getriebemotoren setzen automatisch das Gear-Ratio auf grund des Motornamens ein
//                  Format für Motorname: "x.y:1" e.g. "L3038-1500 6.7:1"
//  20.10.13  6.04  Verify AUW>Drive Weight
//  06.06.13  6.03  Enable ESC Field (misspell inEMaxCurrent, line 616) korrigiert
//  19.02.13  6.00  Erstellt 
//*****************************************************************************

// Verlinkung lang_xx.js in customer.js festlegen
var theLanguages =    "<option value='cn'>&#20013;&#25991;</option>"
					 +"<option value='cz'>čeština</option>"
					 +"<option value='de'>deutsch</option>"
                     +"<OPTION selected value='en'>english</OPTION>"
					 +"<option value='es'>español</option>"
					 +"<option value='fr'>français</option>"
					 +"<option value='jp'>&#26085;&#26412;&#35486;</option>"
					 +"<option value='ps'>فارسی</option>"
					 +"<option value='pl'>polski</option>"
					 +"<option value='pt'>português</option>"
					 +"<option value='ru'>русский</option>";
                     


var cErrorColor = "#FF4040";
var cRegularColor ="#000000";
var errorMsg ="";

// Rechte Maustaste deaktivieren
document.oncontextmenu = disableRightClick;
function disableRightClick(){return false;}

//**** General Tools *****



//*** ruft die gleiche URL incl. ?.. auf und ersetzt dabei lang=xx mit lang=yy
function changeLanguage(selectObj){

   var newURL
   newURL = document.location.href;
   
   if (document.location.search == ""){
      newURL = newURL + "?lang=" + getSelectValue(selectObj);
   }else if (getParameterByName("lang") == ""){
      newURL = newURL + "&lang=" + getSelectValue(selectObj);
   }else{
      var strPos
      strPos = newURL.indexOf("lang=");
      if (strPos > 0){
         var strReplace;
         strReplace = newURL.substr(strPos, 7);
         newURL = newURL.replace(strReplace, "lang="+getSelectValue(selectObj));
      }
   }
      
   document.location.replace(newURL);
}


// Runden von Werten auf #Dezimalen
function round( Thevalue, Places ) {
	return (Math.round( Thevalue * Math.pow(10,Places) ) / Math.pow(10,Places));
}

// wandelt alle Eingabefelder mit , in . um, damit kein Berechnungserror entsteht
function replaceComma(){  
   for (i=0; i<document.theForm.elements.length;i++){
      if (document.theForm.elements[i].type == "text") document.theForm.elements[i].value = document.theForm.elements[i].value.replace(/,/g,".");
   }
}

function isNumber(object){
   replaceComma();
   if (parseFloat(object.value) == object.value) {
      object.style.color = cRegularColor;
      return true;
   } else {
      object.style.color = cErrorColor;
      alert(msgNotANumber);
      object.value = "0";
      return false;
   }
}

function isPositiveNumber(object){
   replaceComma();
   if ((parseFloat(object.value) == object.value)&& (parseFloat(object.value)>0)) {
      object.style.color = cRegularColor;
      return true;
   } else {
      object.style.color = cErrorColor;
      alert(msgZeroOrLess);
      object.value = "1";
      return false;
   }
}

function validateNumbers(){
   var errorDetected = false;
   document.getElementById("errorMsg").innerHTML=" ";
   for (i=0; i<document.theForm.elements.length;i++){
      if ((document.theForm.elements[i].type == "text") && (parseFloat(document.theForm.elements[i].value) != document.theForm.elements[i].value)) {
        document.theForm.elements[i].style.color = cErrorColor;
        document.theForm.elements[i].value = "NaN";
        errorDetected = true;
      }else {
        document.theForm.elements[i].style.color = cRegularColor;
      }
   }
   if (errorDetected) {
      document.getElementById("errorMsg").innerHTML = errInvalidValue;
      return false;
   } else{
      return true;
   }    
  
}

function resetErrors(){

    errorMsg = "";
    document.getElementById("errorMsg").innerHTML = errorMsg;
    
    //Alle Eingaben auf schwarze Schrift setzten
    for (i=0; i<document.theForm.elements.length;i++){
      if ((document.theForm.elements[i].type == "text")||(document.theForm.elements[i].type == "select-one")){
         document.theForm.elements[i].style.color = cRegularColor;
      }
    }   
    
    //Alle Spans auf schwarze Schrift setzten
    var spans = document.getElementsByTagName("span");
    for (var i=0;i<spans.length;i++) {
       spans[i].style.color = cRegularColor;
    }
    
    //Remarks wieder auf Rot setzten
    document.getElementById("errorMsg").style.color = cErrorColor;

}


function verifyGeneralResults(){

   //Antriebe haben meist 2s und mehr
   if (1*document.getElementById("inBS").value < 2){ 
      errorMsg = errorMsg + msgTwoCells;
   }
   
   //zu hohe Betriebsspannung
   if((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value=='A') && (document.getElementById("inMLimit").value!="") && (1*document.getElementById("outOptI").innerHTML > 0.9*document.getElementById("inMLimit").value)) { 
       errorMsg = errorMsg  + msgUMotorHigh;
       document.getElementById("lblMaxV").style.color = cErrorColor;
       document.getElementById("outMaxV").style.color = cErrorColor;
       document.getElementById("uMaxV").style.color = cErrorColor;
   }
   if((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value=='W') && (document.getElementById("inMLimit").value!="") && (1*document.getElementById("outOptI").innerHTML*document.getElementById("outOptV").innerHTML > 0.9*document.getElementById("inMLimit").value)) { 
       errorMsg  = errorMsg  + msgUMotorHigh;
       document.getElementById("lblMaxV").style.color = cErrorColor;
       document.getElementById("outMaxV").style.color = cErrorColor;
       document.getElementById("uMaxV").style.color = cErrorColor;
   }

   //unter iMax unter Iopt
   if ( (1* document.getElementById("outOptI").innerHTML > 1 * document.getElementById("outMaxI").innerHTML) && (1*document.getElementById("outOptEfficiency").innerHTML-1*document.getElementById("outMaxEfficiency").innerHTML > 3)) {
	   errorMsg  = errorMsg  +  msgBelowIOpt;
       document.getElementById("lblMaxI").style.color = cErrorColor;
       document.getElementById("outMaxI").style.color = cErrorColor;
       document.getElementById("uMaxI").style.color = cErrorColor;
       document.getElementById("lblMaxEfficiency").style.color = cErrorColor;
       document.getElementById("outMaxEfficiency").style.color = cErrorColor;
       document.getElementById("uMaxEfficiency").style.color = cErrorColor;

   }

   //Battery Overload
   if (1* document.getElementById("outBLoad").innerHTML > 1* document.getElementById("inBCmax").value){
       errorMsg  = errorMsg  + msgMaxCuttentBattery; 
       document.getElementById("lblBCRate").style.color = cErrorColor;
       document.getElementById("inBCmax").style.color = cErrorColor;
       document.getElementById("lblBLoad").style.color = cErrorColor;
       document.getElementById("outBLoad").style.color = cErrorColor;
       document.getElementById("uBLoad").style.color = cErrorColor;
   }
   
   //ESC Overload
   if (1* document.getElementById("outMaxI").innerHTML > 1* document.getElementById("inEMaxCurrent").value){
       errorMsg  = errorMsg  + msgMaxCurrentESC; 
       document.getElementById("lblEMaxCurrent").style.color = cErrorColor;
       document.getElementById("inEMaxCurrent").style.color = cErrorColor;
       document.getElementById("lblMaxI").style.color = cErrorColor;
       document.getElementById("outMaxI").style.color = cErrorColor;
       document.getElementById("uMaxI").style.color = cErrorColor;
   }
   
   //Motor Overload
   if ((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value=='A') && 1* document.getElementById("outMaxI").innerHTML > 1* document.getElementById("inMLimit").value){
       errorMsg  = errorMsg  + msgMaxCurrentMotor; 
       document.getElementById("lblMLimit").style.color = cErrorColor;
       document.getElementById("inMLimit").style.color = cErrorColor;
       document.getElementById("inMLimitType").style.color = cErrorColor;
       document.getElementById("lblMaxI").style.color = cErrorColor;
       document.getElementById("outMaxI").style.color = cErrorColor;
       document.getElementById("uMaxI").style.color = cErrorColor;
   }

   //Motor Overtemperature
   if (1* document.getElementById("outMaxTemp").innerHTML > 80){
       errorMsg  = errorMsg  + msgOverTemp ; 
       document.getElementById("lblMaxTemp").style.color = cErrorColor;
       document.getElementById("outMaxTemp").style.color = cErrorColor;
       document.getElementById("uMaxTemp").style.color = cErrorColor;
       document.getElementById("outMaxTempF").style.color = cErrorColor;
       document.getElementById("uMaxTempF").style.color = cErrorColor;
   }

   if ((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value=='W') && 1* document.getElementById("outMaxWin").innerHTML > 1* document.getElementById("inMLimit").value){
       errorMsg  = errorMsg  + msgMaxPowerMotor; 
       document.getElementById("lblMLimit").style.color = cErrorColor;
       document.getElementById("inMLimit").style.color = cErrorColor;
       document.getElementById("inMLimitType").style.color = cErrorColor;
       document.getElementById("lblMaxWin").style.color = cErrorColor;
       document.getElementById("outMaxWin").style.color = cErrorColor;
       document.getElementById("uMaxWin").style.color = cErrorColor;
   }

 
   // Unrealistisches Setup
   if ((1* document.getElementById("outMaxEfficiency").innerHTML <= 0)||((1* document.getElementById("outMaxI").innerHTML > 1* document.getElementById("outOptI").innerHTML) && (1*document.getElementById("outMaxEfficiency").innerHTML < 40))){ 
       errorMsg  = errorMsg  + msgUnrealsisticSetup;
   }
   
   // AUW Impossible (AUW<=Drive)
   if (1* document.getElementById("outTotAUW").innerHTML <= 1* document.getElementById("outTotDriveWeight").innerHTML){ 
       errorMsg  = errorMsg  + msgAuwImpossible;
       
       document.getElementById("inGWeight").style.color = cErrorColor;
       document.getElementById("inGWeightOz").style.color = cErrorColor;
       document.getElementById("inGWeightCalc").style.color = cErrorColor;
       
       document.getElementById("lblTotDriveWeight").style.color = cErrorColor;
       document.getElementById("outTotDriveWeight").style.color = cErrorColor;
       document.getElementById("uTotDriveWeight").style.color = cErrorColor;
       document.getElementById("outTotDriveWeightOz").style.color = cErrorColor;
       document.getElementById("uTotDriveWeightOz").style.color = cErrorColor;
       
       document.getElementById("lblTotAUW").style.color = cErrorColor;
       document.getElementById("outTotAUW").style.color = cErrorColor;
       document.getElementById("uTotAUW").style.color = cErrorColor;
       document.getElementById("outTotAUWOz").style.color = cErrorColor;
       document.getElementById("uTotAUWOz").style.color = cErrorColor;

   }



   
}

// bei der Demoversion werden die DD nur 
// mit einer zufälligen Auswahl gefüllt
function incBy()	{  

    if(isFullList){
       return 1;
    } else {
       return Math.floor((Math.random()*2)+2); // incby 2...4
    }
}

// gibt den gewählten Wert einer DD zurück
function getSelectValue(selectTag)	{  
    var the_index = selectTag.selectedIndex;
	return selectTag.options[the_index].value;
}


// ** Battery Cell DD Laden
function loadCell(formObj){
   var typ = formObj.inBCell;
   var i,a;

   typ.options.length=0; // bestehende Inhalte der DD löschen


   for (i=0; i < cellArray.length; i=i+incBy()){
      //a = cellArray[i];
      //typ.options[i+1] = new Option(a[0]+" - "+a[4]+"/"+a[5]+"C",i+1,false,false);
      //typ.options[i] = new Option(cellArray[i],i+1,false,false);
      typ.add(new Option(cellArray[i],i+1,false,false));
   }
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true),typ[0]);
   } else {
      typ.add(new Option(lblChoose,-1,true,true),typ[0]);
   }
   
   configBattery();
}

function loadEsc(formObj){
   typ = formObj.inEType;
   
   typ.options.length=0; // bestehende Inhalte der DD löschen
      
   for (i=0; i < controlerArray.length; i++){ //i=i+incBy()
      //a = controlerArray[i];
      //typ.options[i+1] = new Option(a[0],i+1,false,false);
      //typ.options[i] = new Option(controlerArray[i],i+1,false,false);
      typ.add(new Option(controlerArray[i],i+1,false,false));
   }
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true),typ[0]);
   } else {
      typ.add(new Option(lblChoose,-1,true,true),typ[0]);
   }
   
   configEsc();

}

// *** Motor Typen DD Laden
function loadMotorTyps(formObj){
   var herst = formObj.inMManufacturer[formObj.inMManufacturer.selectedIndex].value;
   var typ = formObj.inMType;
   var i,j;
   var len = typ.options.length;
   var m;

   //Clear old List
   typ.options.length=0;
   //for (i=len-1; i>=1; i--){
   //   typ.options[i]=null;   // (Position 0 (Anderer/Custom) nicht löschen)
   //}

   //Fill up Motortyps
   //typ.options[0] = new Option("Anderer",0,true,true);
   var j=0;
   for (i=0; i < motorArray.length; i=i+incBy()){
      m = motorArray[i];                    // if Calc does not Work with error on this line 
                                            // check in the Motor DB the data format specialy 
                                            // there are all commas, also after ],
    
      if ((m[0] == herst) || (herst == 0)) {
         typ.options[j]        = new Option(m[1]+" ("+m[2]+")",m[0]+"|"+m[1],false,false);
         j++
      }
      // if ((m[0]>herst) && !(herst == 0)) break;
   }
   
   if (withCustom) {
      typ.add(new Option(lblCustom,0,true,true),typ[0]);
   } else {
      typ.add(new Option(lblChoose,-1,true,true),typ[0]);
   }
   
   configMotor();
}

function loadPropeller (formObj){
   typ = formObj.inPType;
   for (i=0; i < propellerArray.length; i++){  //+incBy()
      a = propellerArray[i];
      typ.add(new Option(a[0],i+1,false,false));
      //typ.options[i] = new Option(a[0],i+1,false,false);
      //typ.options[i+1] = new Option(propellerArray[i],propellerArray[i],false,false);
   }
   
   //if (withCustom) {
   //   typ.add(new Option(lblCustom,0,true,true),typ[0]);
   //} else {
   //   typ.add(new Option(lblChoose,-1,true,true),typ[0]);
   //}
   
   configProp();

}

function loadEDF (formObj){
   typ = formObj.inPType;
   for (i=0; i < fanArray.length; i++){ //i=i+incBy()
      typ.add(new Option(fanArray[i],i+1,false,false));
      //a = propellerArray[i];
      //typ.options[i+1] = new Option(fanArray[i],i+1,false,false);
      //typ.options[i+1] = new Option(propellerArray[i],propellerArray[i],false,false);

   }

}

function loadRotor (formObj){
   typ = formObj.inPType;
   for (i=0; i < rotorArray.length; i++){
      typ.add(new Option(rotorArray[i],i+1,false,false));
      //a = propellerArray[i];
      //typ.options[i+1] = new Option(rotorArray[i],i+1,false,false);
      //typ.options[i+1] = new Option(propellerArray[i],propellerArray[i],false,false);

   }

}




//asynchroner Motordaten laden
// benötigt jquery.js bzw. jquery.min.js
function getMotorData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Berechnung empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen
	    document.getElementById("inMKv").value=splittedResult[0];
	    document.getElementById("inMRi").value=round(0.001*splittedResult[1],4);
	    document.getElementById("inMIo").value=splittedResult[2];
	    document.getElementById("inMVIo").value=splittedResult[3];
	    document.getElementById("inMPoles").value=splittedResult[4];
	    document.getElementById("inMLimit").value=splittedResult[5];
	    if (splittedResult[6] == 'A'){
           document.getElementById("inMLimitType").options[0].selected=true;
        } else {
           document.getElementById("inMLimitType").options[1].selected=true;
        }
	    document.getElementById("inMLength").value=splittedResult[7];
	    mm2inch(splittedResult[7],document.getElementById("inMLengthInch"));
	    document.getElementById("inMWeight").value=splittedResult[8];
	    g2oz(splittedResult[8], document.getElementById("inMWeightOz"));
	    
	    //Getriebe Motor: Getriebeverhältnis einfüllen
	    // Zwingendes format: x.y:1 !!
	    var gear;
	    var mName;
	    
	    mName = document.getElementById("inMType").options[document.getElementById("inMType").selectedIndex].value;
	    
	    if (mName.indexOf(":") >= 0){
	       gear = mName.substring(mName.indexOf(":")-3, mName.indexOf(":"))
	       if (document.getElementById("inPGearRatio")) document.getElementById("inPGearRatio").disabled= true;
	    } else {
	       if (document.getElementById("inPGearRatio").disabled){ //wenn zuvor ein getriebemotor gewählt war, dann gear wieder auf 1:1 stellen
	         gear = "1";
	       } else {
	         if (document.getElementById("inPGearRatio")) gear=document.getElementById("inPGearRatio").value; //wenn zuvor ein nicht-getriebemotor gewählt war, dann gear belassen
	       }
	       if (document.getElementById("inPGearRatio")) document.getElementById("inPGearRatio").disabled= false;
	    }
	    if (document.getElementById("inPGearRatio")) document.getElementById("inPGearRatio").value=gear;

	    }
	  }
	  
	  
	// Motordaten anfrage
	var theURL = "./calcinclude/data/motor.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}

function getCellData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Daten empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen
	    document.getElementById("inBCellCap").value=splittedResult[0];
	    document.getElementById("inBCap").value= 1*document.getElementById("inBP").value*splittedResult[0];
	    document.getElementById("inBRi").value=splittedResult[1];
	    document.getElementById("inBWeight").value=splittedResult[2];
        g2oz(document.getElementById("inBWeight").value, document.getElementById("inBWeightOz"));
	    document.getElementById("inBCcont").value=splittedResult[3];
	    document.getElementById("inBCmax").value=splittedResult[4];
	    document.getElementById("inBVcell").value=splittedResult[5];
	    }
	  }
	  
	  
	// Propellerdaten anfrage
	var theURL = "./calcinclude/data/cell.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}

function getEscData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Daten empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen
	    document.getElementById("inERi").value=splittedResult[0];
	    document.getElementById("inEWeight").value=splittedResult[1];
        g2oz(document.getElementById("inEWeight").value, document.getElementById("inEWeightOz"));
	    document.getElementById("inEContCurrent").value=splittedResult[2];
	    document.getElementById("inEMaxCurrent").value=splittedResult[3];

	    }
	  }
	  
	  
	// Propellerdaten anfrage
	var theURL = "./calcinclude/data/esc.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}


function getPropData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Daten empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen
	    document.getElementById("inPConst").value=splittedResult[0];
	    }
	  }
	  
	  
	// Propellerdaten anfrage
	var theURL = "./calcinclude/data/propeller.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}

function getRotorData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Daten empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen
	    document.getElementById("inPConst").value=splittedResult[0];
	    }
	  }
	  
	  
	// Propellerdaten anfrage
	var theURL = "./calcinclude/data/propeller.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}

function getEDFData(key){

	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    // Daten empfangen
		var result = xmlhttp.responseText;
		var splittedResult = result.split(",");
		//alert(result);
		
		// Resultate abfüllen  Dia, Pitch,	#Blades,PropKonst,eta, 	FSA
	    document.getElementById("inPDiameter").value=splittedResult[0];
	    document.getElementById("inPPitch").value=splittedResult[1];
	    document.getElementById("inPBlades").value=splittedResult[2];
	    document.getElementById("inPConst").value=splittedResult[3];
	    document.getElementById("inPEfficiency").value=splittedResult[4];
	    document.getElementById("inP100FSA").value=splittedResult[5];
	    }
	  }
	  
	  
	// Propellerdaten anfrage
	var theURL = "./calcinclude/data/propeller.asp?key="+escape(key);
	//alert(theURL);
	xmlhttp.open("GET",theURL,true);
	xmlhttp.send();
	
}





//**** Eingabe Felder Sperren/Freigeben 
function configBattery(){
   if (1*getSelectValue(document.theForm.inBCell) == 0){
      document.theForm.inBCellCap.disabled = false;
      document.theForm.inBCap.disabled = false;
      document.theForm.inBRi.disabled = false;
      document.theForm.inBVcell.disabled = false;
      document.theForm.inBWeight.disabled = false;
      document.theForm.inBWeightOz.disabled = false;
      document.theForm.inBCcont.disabled = false;
      document.theForm.inBCmax.disabled = false;
   } else {
      //document.theForm.inBCellCap.value = cellArray[getSelectValue(document.theForm.inBCell)-1][1];
      //document.theForm.inBCap.value = document.theForm.inBCellCap.value * document.theForm.inBP.value;
      //document.theForm.inBRi.value = cellArray[getSelectValue(document.theForm.inBCell)-1][2];
      //document.theForm.inBVcell.value = cellArray[getSelectValue(document.theForm.inBCell)-1][6];
      //document.theForm.inBWeight.value = cellArray[getSelectValue(document.theForm.inBCell)-1][3];
      //g2oz(cellArray[getSelectValue(document.theForm.inBCell)-1][4], document.getElementById("inBWeightOz"));
      //document.theForm.inBCcont.value = cellArray[getSelectValue(document.theForm.inBCell)-1][4];
      //document.theForm.inBCmax.value = cellArray[getSelectValue(document.theForm.inBCell)-1][5];
      if (1*getSelectValue(document.theForm.inBCell) > 0) getCellData(document.getElementById("inBCell").options[document.getElementById("inBCell").selectedIndex].text);
      document.theForm.inBCellCap.disabled = true;
      document.theForm.inBCap.disabled = true;
      document.theForm.inBRi.disabled = true;
      document.theForm.inBVcell.disabled = true;
      document.theForm.inBWeight.disabled = true;
      document.theForm.inBWeightOz.disabled = true;
      document.theForm.inBCcont.disabled = true;
      document.theForm.inBCmax.disabled = true;
   }
}

function configEsc(){
   if (1*getSelectValue(document.theForm.inEType) == 0){
      document.theForm.inEContCurrent.disabled = false;
      document.theForm.inEMaxCurrent.disabled = false;
      document.theForm.inERi.disabled = false;
      document.theForm.inEWeight.disabled = false;
      document.theForm.inEWeightOz.disabled = false;
   } else {
   	  //document.theForm.inEContCurrent.value = controlerArray[getSelectValue(document.theForm.inEType)-1][3];
   	  //document.theForm.inEMaxCurrent.value = controlerArray[getSelectValue(document.theForm.inEType)-1][4];
   	  //document.theForm.inERi.value = controlerArray[getSelectValue(document.theForm.inEType)-1][1];
   	  //document.theForm.inEWeight.value = controlerArray[getSelectValue(document.theForm.inEType)-1][2];
   	  //g2oz(controlerArray[getSelectValue(document.theForm.inEType)-1][2],document.getElementById("inEWeightOz"));
   	  
      if (1*getSelectValue(document.theForm.inEType) > 0) getEscData(document.getElementById("inEType").options[document.getElementById("inEType").selectedIndex].text);
      document.theForm.inEContCurrent.disabled = true;
      document.theForm.inEMaxCurrent.disabled = true;
      document.theForm.inERi.disabled = true;
      document.theForm.inEWeight.disabled = true;
      document.theForm.inEWeightOz.disabled = true;
   }
}

function configMotor(){
   if (1*getSelectValue(document.theForm.inMType) == 0){
      document.theForm.inMKv.disabled = false;
      document.theForm.inMIo.disabled = false;
      document.theForm.inMVIo.disabled = false;
      document.theForm.inMRi.disabled = false;
      document.theForm.inMLimit.disabled = false;
      document.theForm.inMLimitType.disabled = false;
      document.theForm.inMWeight.disabled = false;
      document.theForm.inMWeightOz.disabled = false;
      document.theForm.inMLength.disabled = false;
      document.theForm.inMLengthInch.disabled = false;
      document.theForm.inMPoles.disabled = false;
	  if (document.getElementById("inPGearRatio")) document.getElementById("inPGearRatio").disabled= false;

   } else {
      if (1*getSelectValue(document.theForm.inMType) != -1) getMotorData(document.getElementById("inMType").options[document.getElementById("inMType").selectedIndex].value);
      document.theForm.inMKv.disabled = true;
      document.theForm.inMIo.disabled = true;
      document.theForm.inMVIo.disabled = true;
      document.theForm.inMRi.disabled = true;
      document.theForm.inMLimit.disabled = true;
      document.theForm.inMLimitType.disabled = true;
      document.theForm.inMWeight.disabled = true;
      document.theForm.inMWeightOz.disabled = true;
      document.theForm.inMLength.disabled = true;
      document.theForm.inMLengthInch.disabled = true;
      document.theForm.inMPoles.disabled = true;
   }
}

function configProp(){
   var i;
   if (1*getSelectValue(document.theForm.inPType) == 0){
      document.theForm.inPConst.disabled = false;
      document.theForm.inPTwist.disabled = false;
   } else {
      if (1*getSelectValue(document.theForm.inPType) > 0) getPropData(document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text);
      document.theForm.inPConst.disabled = true;  
      if (propellerArray[getSelectValue(document.theForm.inPType)-1][1]) {

        for(var i=0; i < document.getElementById("inPTwist").options.length; i++){
          if(document.getElementById("inPTwist").options[i].value == "0") document.getElementById("inPTwist").selectedIndex = i;
        }
        document.theForm.inPTwist.disabled = true;
      }else{
        document.theForm.inPTwist.disabled = false;
      }
   }
}

function configEDF(){
   var i;
   if (1*getSelectValue(document.theForm.inPType) == 0){
      //Enable Fields
   } else {
      getEDFData(document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text);
	  // Disable Fields not needed as thay are hidden
   }
}

function configRotor(){
   var i;
   if (1*getSelectValue(document.theForm.inPType) == 0){
      document.theForm.inPConst.disabled = false;
   } else {
      getPropData(document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text);
      document.theForm.inPConst.disabled = true;  
   }
}


//**** Input - Conversions metric <--> imperial****

function m2ft(mValue, ftTag){ 
   ftTag.value = round(3.2808*mValue,0);
   ftTag.style.color = cRegularColor;
}

function ft2m(ftValue, mTag){   
   mTag.value = round(1.0/3.2808*ftValue,0);
   mTag.style.color = cRegularColor;
}

function mm2inch(mmValue, inchTag){   
   inchTag.value = round(1.0/25.4*mmValue,2);
   inchTag.style.color = cRegularColor;
}

function inch2mm(inchValue, mmTag){   
   mmTag.value = round(25.4*inchValue,1);
   mmTag.style.color = cRegularColor;
}

function kmh2mph(kmhValue, mphTag){   
   mphTag.value = round(1.0/1.61*kmhValue,1);
   mphTag.style.color = cRegularColor;
}

function mph2kmh(mphValue, kmhTag){   
   kmhTag.value = round(1.61*mphValue,1);
   kmhTag.style.color = cRegularColor;
}

function g2oz(gValue, ozTag){   
   ozTag.value = round(1.0/28.3495*gValue,1);
   ozTag.style.color = cRegularColor;
}

function oz2g(ozValue, gTag){   
   gTag.value = round(28.3495*ozValue,0);
   gTag.style.color = cRegularColor;
}

function c2f(cValue, fTag){  //°C --> °F
   fTag.value = round(9.0*cValue/5.0+32,0);
   fTag.style.color = cRegularColor;
}

function f2c(fValue, cTag){  //°F --> °C
   cTag.value = round(5.0/9.0*(1.0*fValue-32),0);
   cTag.style.color = cRegularColor;
}

function hPa2inHg(hPaValue, inHgTag){  //°C --> °F
   inHgTag.value = round(1/33.864*hPaValue,2);
   inHgTag.style.color = cRegularColor;
}

function inHg2hPa(inHgValue, hPaTag){  //°C --> °F
   hPaTag.value = round(33.864*inHgValue,0);
   hPaTag.style.color = cRegularColor;
}


// **** Komponenten zu eDrive Hinzufügen ****
function addDrive(theLinkToDrive){

   var strCell = document.getElementById("inBCell")[document.getElementById("inBCell").selectedIndex].text
   var strProp = document.getElementById("inPType")[ document.getElementById("inPType").selectedIndex].text;
   
   strCell = strCell.split(" - ");
   if (document.getElementById("outPThrust")) strProp = strProp + " " + document.getElementById("inPDiameter").value + "x" + document.getElementById("inPPitch").value + "\"";
   

   theLinkToDrive = theLinkToDrive 
      + "?Akku=" + strCell [0]
      + "&numcells=" + document.getElementById("inBS").value  
      + "&cellsparallel=" + document.getElementById("inBP").value
      + "&Regler=" + document.getElementById("inEType")[document.getElementById("inEType").selectedIndex].text
      + "&Motor=" + document.getElementById("inMManufacturer")[document.getElementById("inMManufacturer").selectedIndex].text + " " + document.getElementById("inMType")[document.getElementById("inMType").selectedIndex].text
      + "&Prop=" + strProp
      + "&outPowersys=" + document.getElementById("outTotDriveWeight").innerHTML
      + "&outImotor=" + document.getElementById("outMaxI").innerHTML;
      
      if (document.getElementById("outPThrust")) theLinkToDrive = theLinkToDrive + "&outPropSThrust=" + document.getElementById("outPThrust").innerHTML
      if (document.getElementById("outPPitchSpeed")) theLinkToDrive = theLinkToDrive + "&outPitchSpeed=" + document.getElementById("outPPitchSpeed").innerHTML;

      if (document.getElementById("outFThrust")) theLinkToDrive = theLinkToDrive + "&outPropSThrust=" + document.getElementById("outFThrust").innerHTML
      if (document.getElementById("outFEffluxKmh")) theLinkToDrive = theLinkToDrive + "&outPitchSpeed=" + document.getElementById("outFEffluxKmh").innerHTML;
      
   //location.replace(theLinkToDrive);
   window.open(theLinkToDrive, '_blank','location=yes,height=450,width=900,scrollbars=yes,status=yes');
 
}

var searchWindow; // Global, damit bei applySLanguage() ansprechbar
function openSearch(){

   var theSearchLink = "./search.asp?";
   var thePackV = 15.0;
   var theManufNbr = "&mn=";
   var theManufTxt = "&mt=";
   
   if(searchWindow) searchWindow.close(); //falls such fenster offen, dann erst schliessen
   
   if (document.getElementById("inBVcell").value != "NaN") thePackV = 1*document.getElementById("inBS").value*document.getElementById("inBVcell").value;
   if (thePackV <=0) thePackV = 15.0; 
   theSearchLink = theSearchLink + "pv=" + thePackV
   
   //DD Hersteller mitgeben
   theManufNbr = theManufNbr + document.getElementById("inMManufacturer").options[1].value;
   theManufTxt = theManufTxt + document.getElementById("inMManufacturer").options[1].text;
   for (i=2; i<document.getElementById("inMManufacturer").options.length; i++){
     theManufNbr = theManufNbr + ":" + document.getElementById("inMManufacturer").options[i].value;
     theManufTxt = theManufTxt + ":" + document.getElementById("inMManufacturer").options[i].text;  
   }
   theSearchLink = theSearchLink + theManufNbr + theManufTxt;
   
   // aktuel definiertes Kv, P, m mitgeben
   if (document.getElementById("inMKv").value != "NaN" && 1*document.getElementById("inMKv").value > 0) theSearchLink = theSearchLink + "&kv="+ document.getElementById("inMKv").value;
   
   if (1*document.getElementById("outMaxWin").innerHTML > 0){   //P aus Berechnung
      theSearchLink = theSearchLink + "&li="+ 1*document.getElementById("outMaxWin").innerHTML;
      theSearchLink = theSearchLink + "&tl=W";
   }else{                                                       // P (A) von Motor
      if (document.getElementById("inMLimit").value != "NaN" && 1*document.getElementById("inMLimit").value > 0) theSearchLink = theSearchLink + "&li="+ document.getElementById("inMLimit").value;
      if (document.getElementById("inMLimit").value != "NaN" && 1*document.getElementById("inMLimit").value > 0) theSearchLink = theSearchLink + "&tl=" + document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value;
   }
   
   if (document.getElementById("inMWeight").value != "NaN" && 1*document.getElementById("inMWeight").value > 0) theSearchLink = theSearchLink + "&wt="+ document.getElementById("inMWeight").value;
   
   var xPos = screen.width - 560;
   searchWindow = window.open(theSearchLink, '_blank','location=no,height=600,width=530,scrollbars=yes,status=yes, top=20, left='+xPos);

}

