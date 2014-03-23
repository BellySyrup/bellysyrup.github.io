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
//  Preselect of Components
//
//
//  Revisions:
//  05.03.14  6.06  Fehler behoben bei custom batterie
//  23.01.14  6.06  Preselect für Custom Data
//  19.02.13  6.00  Erstellt
//*****************************************************************************


function preselectComponents(){

  //if (isCommercialUser){
  var urlParam  = unescape(window.location.search);
  var strParam  = new Array();
  var name;
  var splitVars = new Array();
  var tmp       = new Array();


  urlParam = urlParam.toLowerCase().replace(/_/g," "); // falls ein _ vorhanden = Space
  splitVars = urlParam.split("&");
  
  for (i=1;i<splitVars.length;i++) {

    tmp      = splitVars[i].split("=");
    name     = tmp[0];  
    strParam[name] = tmp[1];
  }
  
  // Die Sprache wird bereits beim Initialisieren gesetzt. Muss also nicht erneut gesetzt werden


  // Set Motor Cooling
  if (strParam["cooling"]) {
     for (i=0; i< document.getElementById("inGMotorCooling").options.length;i++){
        if (document.getElementById("inGMotorCooling").options[i].value == strParam["cooling"]){
           document.getElementById("inGMotorCooling").options[i].selected=true;
           break;
        } 
     }
  }


  //set Weight
  if (strParam["weight"]) {
    document.getElementById("inGWeight").value = strParam["weight"];
    g2oz(document.getElementById("inGWeight").value, document.getElementById("inGWeightOz"))
  }
  
  if (strParam["calc"]) { //Art der Gewichtsberechnung - All-Up oder Summe
     if      (strParam["calc"] == "auw")    document.getElementById("inGWeightCalc").options[0].selected=true;
     else if (strParam["calc"] == "sum")    document.getElementById("inGWeightCalc").options[1].selected=true;
  }
  
  if (strParam["rotornumber"]) document.getElementById("inGRotors").value = strParam["rotornumber"];



  //set atmospheric conditions
  if (strParam["elevation"])  {
     document.getElementById("inGElevation").value = strParam["elevation"];
     m2ft(document.getElementById("inGElevation").value, document.getElementById("inGElevationFt"));
  }
  if (strParam["airtemp"]) {
     document.getElementById("inGTemp").value = strParam["airtemp"];
     c2f(document.getElementById("inGTemp").value, document.getElementById("inGTempF"));
  }
    if (strParam["qnh"]) {
     document.getElementById("inGPressure").value = strParam["qnh"];
     hPa2inHg(document.getElementById("inGPressure").value, document.getElementById("inGPressureInHg"));
  }

  // Set Battery
  if (strParam["chargestate"]) { 
     if      (strParam["chargestate"] == "6") document.getElementById("inBChargeState").options[0].selected=true;
     else if (strParam["chargestate"] == "0")  document.getElementById("inBChargeState").options[1].selected=true;
     else if (strParam["chargestate"] == "-6") document.getElementById("inBChargeState").options[2].selected=true;
  }
  if (strParam["s"]) document.getElementById("inBS").value = strParam["s"];
  if (strParam["p"]) document.getElementById("inBP").value = strParam["p"];

  if (strParam["batteries"]) {
     for (i=1; i< document.getElementById("inBCell").options.length;i++){
        if (document.getElementById("inBCell").options[i].text.toLowerCase().indexOf(strParam["batteries"]) >=0){
           document.getElementById("inBCell").options[i].selected=true;
           break;
        } 
     }
     //Custom Cells
     if(strParam["batteries"] == "0" ){
       document.getElementById("inBCell").options[0].selected=true;
       if (strParam["battcap"]) document.getElementById("inBCellCap").value = strParam["battcap"];
       if (strParam["battri"]) document.getElementById("inBRi").value = strParam["battri"];
       if (strParam["battv"]) document.getElementById("inBVcell").value = strParam["battv"];
       if (strParam["battccont"]) document.getElementById("inBCcont").value = strParam["battccont"];
       if (strParam["battcmax"]) document.getElementById("inBCmax").value = strParam["battcmax"];
       if (strParam["battweight"]) document.getElementById("inBWeight").value = strParam["battweight"];
       g2oz(document.theForm.inBWeight.value,document.theForm.inBWeightOz);
       document.getElementById("inBCap").value = document.theForm.inBCellCap.value*document.theForm.inBP.value;
       
     } else {
       configBattery();
     }
  }
  
  // Set ESC
  if (strParam["esc"]) {
     for (i=1; i< document.getElementById("inEType").options.length;i++){
        if (document.getElementById("inEType").options[i].text.toLowerCase().indexOf(strParam["esc"]) >=0){
           document.getElementById("inEType").options[i].selected=true;
           break;
        } 
     }
        
     //Custom ESC
     if(strParam["esc"] == "0" ){
       document.getElementById("inEType").options[0].selected=true;
       if (strParam["esccont"]) document.getElementById("inEContCurrent").value = strParam["esccont"];
       if (strParam["escmax"]) document.getElementById("inEMaxCurrent").value = strParam["escmax"];
       if (strParam["escri"]) document.getElementById("inERi").value = strParam["escri"];
       if (strParam["escweight"]){
          document.getElementById("inEWeight").value = strParam["escweight"];
          g2oz(document.theForm.inEWeight.value,document.theForm.inEWeightOz)
       }
     } else {
        configEsc();
     }
  }

  // Set Motor
  if (strParam["motor"]) {
    
     for (i=1; i< document.getElementById("inMManufacturer").options.length;i++){
        if (document.getElementById("inMManufacturer").options[i].text.toLowerCase() == strParam["motor"]){
           document.getElementById("inMManufacturer").options[i].selected=true;
           loadMotorTyps(document.theForm);
           break;
        } 
     }
     
     if(strParam["type"]) {
        for (i=1; i< document.getElementById("inMType").options.length;i++){
           if (document.getElementById("inMType").options[i].value.toLowerCase().indexOf(strParam["type"]) >=0){
              document.getElementById("inMType").options[i].selected=true;
              break;
           } 
        } 
     }
     
     // Custom Motor
     if(strParam["type"] == "0") {
       document.getElementById("inMType").options[0].selected=true;
       if (strParam["motorkv"]) document.getElementById("inMKv").value = strParam["motorkv"];
       if (strParam["motorio"]) document.getElementById("inMIo").value = strParam["motorio"];
       if (strParam["motorvio"]) document.getElementById("inMVIo").value = strParam["motorvio"];
       if (strParam["motorlimit"]) document.getElementById("inMLimit").value = strParam["motorlimit"];
        for (i=0; i< document.getElementById("inMLimitType").options.length;i++){
           if (document.getElementById("inMLimitType").options[i].value.toLowerCase().indexOf(strParam["motorlimittype"]) >=0){
              document.getElementById("inMLimitType").options[i].selected=true;
              break;
           } 
       }
       if (strParam["motorri"]) document.getElementById("inMRi").value = strParam["motorri"];
       if (strParam["motorlength"]) document.getElementById("inMLength").value = strParam["motorlength"];
       if (strParam["motorpoles"]) document.getElementById("inMPoles").value = strParam["motorpoles"];
       if (strParam["motorweight"]) document.getElementById("inMWeight").value = strParam["motorweight"];
       mm2inch(document.theForm.inMLength.value,document.theForm.inMLengthInch);
       g2oz(document.theForm.inMWeight.value,document.theForm.inMWeightOz);
     } else {
        configMotor();
     } 
  }
  
  //set Propeller  
  if (strParam["propeller"]) {
     for (i=1; i<  document.getElementById("inPType").options.length;i++){
        if (document.getElementById("inPType").options[i].text.toLowerCase().indexOf(strParam["propeller"]) >=0){
           document.getElementById("inPType").options[i].selected=true;
           break;
        } 
     }
     if (strParam["proptwist"]) {
       for (i=0; i<  document.getElementById("inPTwist").options.length;i++){
         if (document.getElementById("inPTwist").options[i].value.toLowerCase().indexOf(strParam["proptwist"]) >=0){
           document.getElementById("inPTwist").options[i].selected=true;
           break;
         }
       }
     }
     if (strParam["diameter"]) document.getElementById("inPDiameter").value = strParam["diameter"];
     if (strParam["pitch"])    document.getElementById("inPPitch").value = strParam["pitch"];
     if (strParam["blades"])   document.getElementById("inPBlades").value = strParam["blades"];
     
     if(strParam["propeller"] == "0" ){
        document.getElementById("inPType").options[0].selected=true;
        if (strParam["propconst"])   document.getElementById("inPConst").value = strParam["propconst"];  
     } else {
        configProp();
     }
  }
  
    //set Ducted Fan  
  if (strParam["edf"]) {
     for (i=1; i<  document.getElementById("inPType").options.length;i++){
        if (document.getElementById("inPType").options[i].text.toLowerCase().indexOf(strParam["edf"]) >=0){
           document.getElementById("inPType").options[i].selected=true;
           break;
        } 
     }
     configEDF();
  }
  if (strParam["fsa"]) document.getElementById("inPDuct").value = strParam["fsa"];
  if (strParam["unit"]) {
     for (i=1; i<  document.getElementById("inPDuctType").options.length;i++){
        if (document.getElementById("inPDuctType").options[i].value.toLowerCase().indexOf(strParam["unit"]) >=0){
           document.getElementById("inPDuctType").options[i].selected=true;
           break;
        } 
     }
  }  
  if (strParam["speed"]) {
    document.getElementById("inPSpeed").value = strParam["speed"];
    kmh2mph(document.getElementById("inPSpeed").value, document.getElementById("inPSpeedMph"));
  }


  //set Rotor  
  if (strParam["rotor"]) {
     for (i=1; i<  document.getElementById("inPType").options.length;i++){
        if (document.getElementById("inPType").options[i].text.toLowerCase().indexOf(strParam["rotor"]) >=0){
           document.getElementById("inPType").options[i].selected=true;
           break;
        } 
     }
     if (strParam["diameter"]) document.getElementById("inPDiameterMM").value = strParam["diameter"];
     mm2inch(document.getElementById("inPDiameterMM").value, document.getElementById("inPDiameter"))
     if (strParam["pitch"]) {
       for (i=0; i<  document.getElementById("inPPitch").options.length;i++){
         if (document.getElementById("inPPitch").options[i].value.toLowerCase().indexOf(strParam["pitch"]) >=0){
           document.getElementById("inPPitch").options[i].selected=true;
           break;
         }
       }
     }
     if (strParam["blades"])   document.getElementById("inPBlades").value = strParam["blades"];
     if (strParam["rotorteeth"])    document.getElementById("inPGearMain").value = strParam["rotorteeth"];
     if (strParam["motorteeth"])    document.getElementById("inPGearMotor").value = strParam["motorteeth"];
     
     //Custom Rotor
     if(strParam["rotor"] == "0" ){
        document.getElementById("inPType").options[0].selected=true;
        if (strParam["propconst"])   document.getElementById("inPConst").value = strParam["propconst"];  
     } else {
        configRotor();
     }
  }

  
  
  if (strParam["gear"]) document.getElementById("inPGearRatio").value = strParam["gear"];



}

function createLink(){

   //if (validateNumbers()){

      var theLink = "";

      theLink = "http://"+location.host+parent.location.pathname;
      theLink = theLink.substring(0,theLink.lastIndexOf('.'))+".php";

      var tmpStr = location.search.split("&"); //Shopname
      if (tmpStr[0] =="")
        theLink=theLink+"?ecalc"
      else
        theLink=theLink+tmpStr[0];

      
	  if (document.getElementById("lang")) theLink = theLink + "&lang=" + document.getElementById("lang")[document.getElementById("lang").selectedIndex].value;      


	  if (document.getElementById("inGMotorCooling")) theLink = theLink + "&cooling=" + document.getElementById("inGMotorCooling")[document.getElementById("inGMotorCooling").selectedIndex].value;      

      if (document.getElementById("inGRotors")) theLink = theLink + "&rotornumber=" + document.getElementById("inGRotors").value;

      if (document.getElementById("inGWeight")) theLink = theLink + "&weight=" + document.getElementById("inGWeight").value;
	  if (document.getElementById("inGWeightCalc")) theLink = theLink + "&calc=" + document.getElementById("inGWeightCalc")[document.getElementById("inGWeightCalc").selectedIndex].value;      


      if (document.getElementById("inGElevation")) theLink = theLink + "&elevation=" + document.getElementById("inGElevation").value;
      if (document.getElementById("inGTemp")) theLink = theLink + "&airtemp=" + document.getElementById("inGTemp").value;
      if (document.getElementById("inGPressure")) theLink = theLink + "&qnh=" + document.getElementById("inGPressure").value;
      
      if (document.getElementById("inBCell").selectedIndex > 0){ 
         theLink = theLink + "&batteries=" + document.getElementById("inBCell").options[document.getElementById("inBCell").selectedIndex].text;
      } else {
         //Custom Cells
         theLink = theLink + "&batteries=" + document.getElementById("inBCell").selectedIndex; 
         theLink = theLink + "&battcap=" + document.getElementById("inBCellCap").value;
         theLink = theLink + "&battri=" + document.getElementById("inBRi").value;
         theLink = theLink + "&battv=" + document.getElementById("inBVcell").value;
         theLink = theLink + "&battccont=" + document.getElementById("inBCcont").value;
         theLink = theLink + "&battcmax=" + document.getElementById("inBCmax").value;
         theLink = theLink + "&battweight=" + document.getElementById("inBWeight").value;
      }
      if (document.getElementById("inBChargeState")){
         theLink = theLink + "&chargestate="+ document.getElementById("inBChargeState").options[document.getElementById("inBChargeState").selectedIndex].value
      }
      theLink = theLink + "&s=" + document.getElementById("inBS").value;
      theLink = theLink + "&p=" + document.getElementById("inBP").value;
    
      if (document.getElementById("inEType").selectedIndex > 0) theLink = theLink + "&esc=" + document.getElementById("inEType").options[document.getElementById("inEType").selectedIndex].text;
      //Custom ESC
      if (document.getElementById("inEType").selectedIndex == 0) {
         theLink = theLink + "&esc=" + document.getElementById("inEType").selectedIndex;
         theLink = theLink + "&esccont=" + document.getElementById("inEContCurrent").value;         
         theLink = theLink + "&escmax=" + document.getElementById("inEMaxCurrent").value;         
         theLink = theLink + "&escri=" + document.getElementById("inERi").value;         
         theLink = theLink + "&escweight=" + document.getElementById("inEWeight").value;     
      }

      if (document.getElementById("inMManufacturer").selectedIndex > 0) {
         theLink = theLink + "&motor=" + document.getElementById("inMManufacturer").options[document.getElementById("inMManufacturer").selectedIndex].text
      } else {
         theLink = theLink + "&motor=" + document.getElementById("inMManufacturer").selectedIndex;
      }

      if (document.getElementById("inMType").selectedIndex > 0) {
         theLink = theLink + "&type=" + document.getElementById("inMType").options[document.getElementById("inMType").selectedIndex].value;
      } else {
         //Custom Motor
         theLink = theLink + "&type=" + document.getElementById("inMType").selectedIndex;
         theLink = theLink + "&motorkv=" + document.getElementById("inMKv").value;         
         theLink = theLink + "&motorio=" + document.getElementById("inMIo").value;         
         theLink = theLink + "&motorvio=" + document.getElementById("inMVIo").value;         
         theLink = theLink + "&motorlimit=" + document.getElementById("inMLimit").value;         
         theLink = theLink + "&motorlimittype=" + document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].value;
         theLink = theLink + "&motorri=" + document.getElementById("inMRi").value;         
         theLink = theLink + "&motorlength=" + document.getElementById("inMLength").value;         
         theLink = theLink + "&motorpoles=" + document.getElementById("inMPoles").value;         
         theLink = theLink + "&motorweight=" + document.getElementById("inMWeight").value;               
      }

      if ((document.getElementById("inPGearRatio")) && (document.getElementById("inPGearRatio").value != "1.00")) theLink = theLink + "&gear=" + document.getElementById("inPGearRatio").value;      



      if ((location.pathname.indexOf("motorcalc") >= 0) || (location.pathname.indexOf("xcoptercalc") >= 0)){
        if (document.getElementById("inPType").selectedIndex > 0){
           theLink = theLink + "&propeller=" + document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text;
        } else {
           //Custom Prop
           theLink = theLink + "&propeller=" + document.getElementById("inPType").selectedIndex;
           if (document.getElementById("inPConst").value != "") theLink = theLink + "&propconst=" + document.getElementById("inPConst").value;
        }
        if (!document.getElementById("inPTwist").disabled) theLink = theLink + "&proptwist=" +  document.getElementById("inPTwist").options[document.getElementById("inPTwist").selectedIndex].value;           
        if (document.getElementById("inPDiameter").value != "") theLink = theLink + "&diameter=" + document.getElementById("inPDiameter").value;
        if (document.getElementById("inPPitch").value    != "") theLink = theLink + "&pitch=" + document.getElementById("inPPitch").value;
        if (document.getElementById("inPBlades").value   != "") theLink = theLink + "&blades=" + document.getElementById("inPBlades").value;

      }



      if (location.pathname.indexOf("fancalc") >= 0){
        if (document.getElementById("inPType").selectedIndex > 0){
           theLink = theLink + "&edf=" + document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text;
           theLink = theLink + "&fsa=" + document.getElementById("inPDuct").value;
           theLink = theLink + "&unit=" + document.getElementById("inPDuctType").value;
           theLink = theLink + "&speed=" + document.getElementById("inPSpeed").value;
        }
      }



      if (location.pathname.indexOf("helicalc") >= 0){
        if (document.getElementById("inPType").selectedIndex > 0){
           theLink = theLink + "&rotor=" + document.getElementById("inPType").options[document.getElementById("inPType").selectedIndex].text;
        } else {
           //Custom Rotor
           theLink = theLink + "&rotor=" + document.getElementById("inPType").selectedIndex;
           if (document.getElementById("inPConst").value != "") theLink = theLink + "&propconst=" + document.getElementById("inPConst").value;        
        }
        if (document.getElementById("inPDiameterMM").value != "") theLink = theLink + "&diameter=" + document.getElementById("inPDiameterMM").value;
        if (!document.getElementById("inPPitch").disabled) theLink = theLink + "&pitch=" +  document.getElementById("inPPitch").options[document.getElementById("inPPitch").selectedIndex].value;           
        if (document.getElementById("inPBlades").value   != "") theLink = theLink + "&blades=" + document.getElementById("inPBlades").value;
        if (document.getElementById("inPGearMain").value    != "") theLink = theLink + "&rotorteeth=" + document.getElementById("inPGearMain").value;
        if (document.getElementById("inPGearMotor").value    != "") theLink = theLink + "&motorteeth=" + document.getElementById("inPGearMotor").value;
      }
     

	  
	  theLink= theLink.toLowerCase().replace(/\s/g,"_");
	  //theLink = "sorry, not yet available - coming soon..."  // <----- ENTFERNEN!!
	
	  //alert(theLink);
	  document.getElementById("directLink").innerHTML = theLink;
	  document.getElementById("directLink").href = theLink;
	  document.getElementById("directLink").target="_top";
  //}

}