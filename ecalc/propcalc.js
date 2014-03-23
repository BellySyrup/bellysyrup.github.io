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
var theCalcVersion = "6.501, 25.02.14";
//
//  propCalc specific functions
//
//
//  Revisions:
//  29.04.13  6.02  Error im ASP abfangen
//  16.03.13  6.01  Graphik wieder eingebaut
//  19.02.13  6.00  Erstellt
//*****************************************************************************

function verifyPropResults(){
   //Prop Stall
   if (1* document.getElementById("outPEffPitch").value / document.getElementById("outPEffDiameter").value > 0.665){
       errorMsg  = errorMsg  + msgPropStall; 
       document.getElementById("lblPPitch").style.color = cErrorColor;
       document.getElementById("inPPitch").style.color = cErrorColor;
       document.getElementById("lblPDiameter").style.color = cErrorColor;
       document.getElementById("inPDiameter").style.color = cErrorColor;
       document.getElementById("lblPThrust").style.color = cErrorColor;
       document.getElementById("outPThrust").style.color = cErrorColor;
       document.getElementById("uPThrust").style.color = cErrorColor;
       document.getElementById("outPThrustOz").style.color = cErrorColor;
       document.getElementById("uPThrustOz").style.color = cErrorColor;
   }

   //Prop Negative Pitch
   if (1* document.getElementById("outPEffPitch").value < 0){
       errorMsg  = errorMsg  + msgNegPitch; 
       document.getElementById("lblPPitch").style.color = cErrorColor;
       document.getElementById("inPPitch").style.color = cErrorColor;
       document.getElementById("inPTwist").style.color = cErrorColor;       
       document.getElementById("lblPThrust").style.color = cErrorColor;
       document.getElementById("outPThrust").style.color = cErrorColor;
       document.getElementById("uPThrust").style.color = cErrorColor;
       document.getElementById("outPThrustOz").style.color = cErrorColor;
       document.getElementById("uPThrustOz").style.color = cErrorColor;
   }

}


//asynchroner Aufruf der Berechnung (asp)
// benötigt jquery.js bzw. jquery.min.js
function calculate(){

//um Java Consolen Befehl $(":disabled").removeAttr("disabled") abzufangen
if (!withCustom && !document.getElementById("inMKv").disabled) {
 //alert("Error due manipulation....");
 return;
}


if (!isFullList) alert(msgRestrictedVersion);

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
	var splittedResult = result.split(";");
	
	if (splittedResult[0].indexOf("Error:") == 0) { //Error bei ASP Berechnung, Rückgabe des Errors ausgeben 
	  		// Motor@Opt
	    document.getElementById("outOptI").innerHTML="-";
	    document.getElementById("outOptV").innerHTML="-";
	    document.getElementById("outOptRpm").innerHTML="-";
	    document.getElementById("outOptWin").innerHTML="-";
	    document.getElementById("outOptWout").innerHTML="-";
	    document.getElementById("outOptEfficiency").innerHTML="-";
	
	    //Motor@Max
	    document.getElementById("outMaxI").innerHTML="-";
	    document.getElementById("outMaxV").innerHTML="-";
	    document.getElementById("outMaxRpm").innerHTML="-";
	    document.getElementById("outMaxWin").innerHTML="-";
	    document.getElementById("outMaxWout").innerHTML="-";
	    document.getElementById("outMaxTemp").innerHTML="-";
	    document.getElementById("outMaxTempF").innerHTML="-"; 
	    document.getElementById("outMaxEfficiency").innerHTML="-";
	    
	    //Propeller
	    document.getElementById("outPThrust").innerHTML = "-";
	    document.getElementById("outPThrustOz").innerHTML = "-";
	    document.getElementById("outPRpm").innerHTML = "-";
	    document.getElementById("outPStallThrust").innerHTML = "-";
	    document.getElementById("outPStallThrustOz").innerHTML = "-";
	    document.getElementById("outPPitchSpeed").innerHTML = "-";
	    document.getElementById("outPPitchSpeedMph").innerHTML = "-";
	    document.getElementById("outPTipSpeed").innerHTML = "-";
	    document.getElementById("outPTipSpeedMph").innerHTML = "-";
	    document.getElementById("outPEfficiency").innerHTML = "-";
	    document.getElementById("outPEfficiencyOz").innerHTML =  "-";
	
		//Battery
	    document.getElementById("outBLoad").innerHTML = "-";
	    document.getElementById("outBVoltage").innerHTML = "-";
	    document.getElementById("outBRatedVoltage").innerHTML = "-";
	    document.getElementById("outBFlightTime").innerHTML = "-";
	    document.getElementById("outBMixedFlightTime").innerHTML = "-";
	    document.getElementById("outBWeight").innerHTML = "-";
	    document.getElementById("outBWeightOz").innerHTML = "-";
		
		//Total
	    document.getElementById("outTotDriveWeight").innerHTML = "-";
	    document.getElementById("outTotDriveWeightOz").innerHTML = "-";
	    document.getElementById("outTotAUW").innerHTML = "-";
	    document.getElementById("outTotAUWOz").innerHTML = "-";
	    document.getElementById("outTotPowerWeight").innerHTML = "-";
	    document.getElementById("outTotPowerWeightOz").innerHTML = "-";
	    document.getElementById("outTotThrustWeight").innerHTML = "-";
	    document.getElementById("outTotPin").innerHTML = "-";
	    document.getElementById("outTotPout").innerHTML = "-";
	    document.getElementById("outTotEfficiency").innerHTML = "-";
	    
	    //Effektiv Diameter/Pitch umgerechnet auf 2 Blatt
	    document.getElementById("outPEffDiameter").value = 1;
	    document.getElementById("outPEffPitch").value = 1;

	    graphicDataStr = "0|0|0|0|0|0";
	    
	    resetErrors();
	    plotMotorGraph(false);

        alert(msgCalcError +  result ); 
	}else{
	
		//alert(result);
		// Resultate abfüllen
		
		// Motor@Opt
	    document.getElementById("outOptI").innerHTML=splittedResult[0];
	    document.getElementById("outOptV").innerHTML=splittedResult[1];
	    document.getElementById("outOptRpm").innerHTML=splittedResult[2];
	    document.getElementById("outOptWin").innerHTML=splittedResult[3];
	    document.getElementById("outOptWout").innerHTML=splittedResult[4];
	    document.getElementById("outOptEfficiency").innerHTML=splittedResult[5];
	
	    //Motor@Max
	    document.getElementById("outMaxI").innerHTML=splittedResult[6];
	    document.getElementById("outMaxV").innerHTML=splittedResult[7];
	    document.getElementById("outMaxRpm").innerHTML=splittedResult[8];
	    document.getElementById("outMaxWin").innerHTML=splittedResult[9];
	    document.getElementById("outMaxWout").innerHTML=splittedResult[10];
	    document.getElementById("outMaxTemp").innerHTML=splittedResult[11];
	    document.getElementById("outMaxTempF").innerHTML=round(9.0*splittedResult[11]/5.0+32,0); 
	    document.getElementById("outMaxEfficiency").innerHTML=splittedResult[12];
	    
	    //Propeller
	    document.getElementById("outPThrust").innerHTML = splittedResult[13];
	    document.getElementById("outPThrustOz").innerHTML = round(1/28.35*splittedResult[13],1);
	    document.getElementById("outPRpm").innerHTML = splittedResult[14];
	    document.getElementById("outPStallThrust").innerHTML = splittedResult[15];
	    document.getElementById("outPStallThrustOz").innerHTML = round(1/28.35*splittedResult[15],1);
	    document.getElementById("outPPitchSpeed").innerHTML = splittedResult[16];
	    document.getElementById("outPPitchSpeedMph").innerHTML = round(1/1.61*splittedResult[16],0);
	    document.getElementById("outPTipSpeed").innerHTML = splittedResult[17];
	    document.getElementById("outPTipSpeedMph").innerHTML = round(1/1.61*splittedResult[17],0);
	    document.getElementById("outPEfficiency").innerHTML = splittedResult[18];
	    document.getElementById("outPEfficiencyOz").innerHTML =  round(1/28.35*splittedResult[18],2);
	
		//Battery
	    document.getElementById("outBLoad").innerHTML = splittedResult[19];
	    document.getElementById("outBVoltage").innerHTML = splittedResult[20];
	    document.getElementById("outBRatedVoltage").innerHTML = splittedResult[21];
	    document.getElementById("outBFlightTime").innerHTML = splittedResult[22];
	    document.getElementById("outBMixedFlightTime").innerHTML = splittedResult[23];
	    document.getElementById("outBWeight").innerHTML = splittedResult[24];
	    document.getElementById("outBWeightOz").innerHTML = round(1/28.35*splittedResult[24],1);
		
		//Total
	    document.getElementById("outTotDriveWeight").innerHTML = splittedResult[25];
	    document.getElementById("outTotDriveWeightOz").innerHTML = round(1/28.35*splittedResult[25],1);
	    document.getElementById("outTotAUW").innerHTML = splittedResult[26];
	    document.getElementById("outTotAUWOz").innerHTML = round(1/28.35*splittedResult[26],0);
	    document.getElementById("outTotPowerWeight").innerHTML = splittedResult[27];
	    document.getElementById("outTotPowerWeightOz").innerHTML = round(0.454*splittedResult[27],0);
	    document.getElementById("outTotThrustWeight").innerHTML = splittedResult[28];
	    document.getElementById("outTotPin").innerHTML = splittedResult[29];
	    document.getElementById("outTotPout").innerHTML = splittedResult[30];
	    document.getElementById("outTotEfficiency").innerHTML = splittedResult[31];
	    
	    //Effektiv Diameter/Pitch umgerechnet auf 2 Blatt
	    document.getElementById("outPEffDiameter").value = splittedResult[32];
	    document.getElementById("outPEffPitch").value = splittedResult[33];
	    
	    graphicDataStr = splittedResult[34];
	
	
	    resetErrors();
	    verifyGeneralResults();
	    verifyPropResults();
	    if (errorMsg != "") {
	        errorMsg = "<ul>" + errorMsg + "<\/ul>";
	        document.getElementById("errorMsg").innerHTML = errorMsg;
	    }
	    plotMotorGraph(false);
	
	    //Verify Results: evaluateResult() --> Prüfen auf überschreitungen, früherWarning
	  }
    }
  }
  
  
// Berechnung absetzten, falls alle Eingaben eine Zahl repräsentieren
if (validateNumbers()){
   var theURL = "./calcinclude/propcalc.asp?";
   
   for (i=0; i<document.theForm.elements.length;i++){
      if ((document.theForm.elements[i].type == "text")||(document.theForm.elements[i].type == "select-one")){
         theURL = theURL + document.theForm.elements[i].name + "=" + document.theForm.elements[i].value + "&"; 
      }
   }
   //alert(theURL);

   xmlhttp.open("GET",theURL,true);
   xmlhttp.send();
}
}
