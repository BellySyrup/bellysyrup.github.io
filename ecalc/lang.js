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
//  Spachkonserve English
//
//
//  Revisions:
//  19.02.13  6.00  Erstellt
//*****************************************************************************

var translatedBy=			"translated to english by Markus Mueller";

if (!isServicePayed)
    theDonationForm = 		"<form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>"+
							"<input type='hidden' name='cmd' value='_s-xclick'>"+
							"<input type='hidden' name='hosted_button_id' value='UHHTBVT44LR2N'>"+
							"<input type='image' src='https://www.paypalobjects.com/en_US/CH/i/btn/btn_donateCC_LG.gif' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!'>"+
							"<img alt='' border='0' src='https://www.paypalobjects.com/de_DE/i/scr/pixel.gif' width='1' height='1'></form>";



var msgUserStatement1 = "This is a Service from Solution for All (www.s4a.ch).\n\n" +
                        "Become a member today and get instantly the full version.\n" +
                        "Thank you.\n\n" +
                        "For commercial use please contact info@ecalc.ch\n\n";

var msgUserStatement2 =	"Statement for using this calculator:\n" +
                  		"All values are calculated and may deviate from the real.\n" +
                  		"Before flight you have to recheck the actual max. values.\n" +
                  		"All max. values must stay within the limits of the manufacturers.\n"+
                  		"A commercial use is forbidden. We reject any liability!\n"+
                  		"eCalc is subject to copyright and intellectual property rights.\n\n"+
                  		"Do you accept this Statement?";

var msgLeave =			"This is a free Service from Solution for All (www.s4a.ch).\n" +
             			"For continuous develpment we appreciate donation from satisfied customers.\n" +
             			"Thank you.";

var msgUserStatementNotAccepted	="You did not accept the statement for using this\ncalculator. Therefore no calculation is done.";


// **** Validate Numbers
var msgNotANumber 			= "This is not a valid number.";
var msgZeroOrLess			= "This is not a valid number.\nNumber must be greater than 0!";
var msgCalcError			= "Your Parameters lead to a calculation error.\nPlease check your input parameters.\n"

var errInvalidValue			= "Red marked value(s) represent(s) invalid numbers (NaN). Please check and correct.";


// **** verify Results - Error Messages
var msgTwoCells 		= "<li>Most Motor uses at least 2 LiPo Cells or more.<\/li>";

var msgUMotorHigh 		= "<li>The Motor Voltage is close or over to the Limit - please verify the max. allowed Motor Voltage<\/li>";

var msgBelowIOpt 		= "<li>Running below the Current of optimal Efficiency is inefficient. Use a smaller motor<\/li>";

var msgMaxCuttentBattery= "<li>max. current over the limit of the battery. Choose a battery with higher capacity and/or C-rate.<\/li>";

var msgMaxCurrentESC 	= "<li>max. current over the limit of the speed controller. Choose a bigger esc.<\/li>";

var msgMaxCurrentMotor	= "<li>max. current over the limit of the motor. Please verify the limits (current, power, rpm) defined by the manufacturer!<\/li>";

var msgMaxPowerMotor 	= "<li>max. power over the limit of the motor. Please check the max. power limits defined by the manufacturer!<\/li>";

var msgOverTemp 		= "<li>the prediction of the motor case temperature is critical (>80°C/175°F). Risk of overheat, please check!<\/li>";

var msgPropStall 		= "<li>The airflow at the propeller blade will stall. Therefore the static thrust and max. current may not be reached. On ground you will measure *Stall Thrust* as maximum.<\/li>";

var msgNegPitch 		= "<li>Your propeller values (Yoke Twist and Pitch) result in a negative propeller pitch.<\/li>";

var msgUnrealsisticSetup= "<li>Your Setup is unrealistic and way out of Limits<\/li>";

var msgPropStallX 		= "<li>The airflow at the propeller blade will stall. Therefore a calculation for hovering is not possible! Reduce the propeller pitch.<\/li>";

var msgUnableHover 		= "<li>The available power is not sufficient to hover.<\/li>";
var msgBadManeuver 		= "<li>For minimal maneuverability you need Throttle of less than 80%<\/li>";

var msgFSA 				= "Your thrust duct has a wrong dimension.\n"
						+ "A correct calculation will not be possible.\n"
						+ "Choose 60..100% FSA";

var msgRotorStall 		= "<li>The airflow at the rotor blade will stall -> static thrust may not be reached!<\/li>";

var msgTipSpeed 		= "<li>The Blade Tip Speed is over MACH .85. Reduce the RPM.<\/li>";

var msgUnrealsisticSetup= "<li>Your Setup is unrealistic and way out of Limits!<\/li>";

var msgAuwImpossible	= "<li>Your defined Model Weight (incl. Drive) results in a All-up Weight less the sum of all you chosen components (Drive Weight).<BR>Verify your Model Weight and enter either your estimated All-up Weight (incl. Drive) or your basic weight (without Drive).<\/li>";


//still to implement...
var msgStaticThrust 	= "<li>static Thrust < Drive Weight<\/li>"; 

//var msgThrustDuct 		= "<li>thrust duct calculation is not possible for this EDF<\/li>"; //wenn FSA nicht bekannt, z.Z. kein EDF mit unbekannter FSA

var msgBurnSetup 		= "<li>This Current will burn your entire setup<\/li>";


// **** Units Constants
var cA			= "A";			//Ampere
var cV			= "V";			//Voltage
var cmAh		= "mAh";		//milli amp hours
var cOhm		= "Ohm";		//Ohms
var cW			= "W";			//Watts
var cBRate		= "C";			//Battery Rate

var cRpm		= "rpm";     	//revolutions per minute
var cRpmV		= "rpm/V";     //revolutions per volt

var cRatio		= ": 1";		// Ratio

var cMin		= "min";		// Minutes

var cKmh		= "km/h";		// Kilometers per Hour
var cMph		= "mph";		// Miles per Hour
var cMs			= "m/s";		// Meters per Seconds
var cFts		= "ft/s";		// feet per Seconds

var cKgM		= "kg/m²";		// kilogramm per square meter
var cOzFt		= "oz/ft²";    // ounce per square feet

var cgW			= "g/W";		// Gramms per Watt
var cOzW		= "oz/W";		// once per watt

var cWkg		= "W/kg";		// watt per kilogram
var cWlb		= "W/lb";		// watt per once

var cPercent	= "%";			// Percentage

var cGramm		= "g";			//Gramms
var cOz			= "oz";		//Once

var cMSL		= "m ASL";		//meters above sea Level
var cFtSL		= "ft ASL";	//feet above sea level

var cMm			= "mm";        // millimeters
var cInch		= "inch";      // inches

var cC			= "°C";		//grad celcius
var cF			= "°F";		//grad farenheit

var cHPa		= "hPa";		//hecto pascal
var cInHg		= "inHg";		//inch mercury

//for Graphic
var msgLable1 = "el. Power [in ";
var msgLable2 = "Efficiency [%]";
var msgLable3a= "max. Revolutions [in ";
var msgLable3b= "rpm]";
var msgLable4 = "waste Power [W]";
var msgLable5 = "Motor Case Temp. overlimit [°C]";
var msgLable5F= "Motor Case Temp. overlimit [°F]";
var msgLable6 = "max. Current at ";
var msgLable7 = "Motor Case Temp. [°C]";
var msgLable7F = "Motor Case Temp. [°F]";
var msgLimit = "over Limit"; 


// **** Apply Language to Page

var lblCustom = "custom";
var lblChoose = "select...";

function applyLanguage(){

  // Payment related
  msgRestrictedVersion = "This is a restricted Demo Version.\n"+
                         "Sign-up for a membership today and you\n"+
                         "receive immediately your personal login.\n"+
                         "Please login to access the full version.";
  if (document.getElementById("txtFullVersion")) document.getElementById("txtFullVersion").innerHTML = "Member Full Version";
  if (document.getElementById("txtRestVersion")) document.getElementById("txtRestVersion").innerHTML = "Restricted Demo Version";
  if (document.getElementById("txtSignup")) document.getElementById("txtSignup").innerHTML = "<a href='calcinclude/member/signup.htm'>sign-up</a> for full version for only $0.99";
  if (document.getElementById("txtExpired")) document.getElementById("txtExpired").innerHTML = "your membership has expired - please sign-up again";
  if (document.getElementById("txtNoAccess")) document.getElementById("txtNoAccess").innerHTML = "your membership has not full access to this eCalc";
  if (document.getElementById("txtRemember")) document.getElementById("txtRemember").innerHTML = "remember me"
  if (document.getElementById("txtForgot")) document.getElementById("txtForgot").innerHTML = "Forgot password?"
  if (document.getElementById("txtWelcome")) document.getElementById("txtWelcome").innerHTML = "Welcome";
  if (document.getElementById("txtExpDate")) document.getElementById("txtExpDate").innerHTML = "Membership Expiry:";  
  if (document.getElementById("txtLogout")) document.getElementById("txtLogout").innerHTML           = "Logout"
  if (document.getElementById("txtProfile")) document.getElementById("txtProfile").innerHTML         = "Profile"

  
  // Header 
  if (document.getElementById("lblAccuracy")) document.getElementById("lblAccuracy").innerHTML			= "all data without guarantee - Accuracy:";
  if (document.getElementById("lblPropCalc")) document.getElementById("lblPropCalc").innerHTML			= "Propeller Calculator";
  if (document.getElementById("lblXCopterCalc")) document.getElementById("lblXCopterCalc").innerHTML	= "Multicopter Calculator";
  if (document.getElementById("lblFanCalc")) document.getElementById("lblFanCalc").innerHTML			= "Ducted Fan Calculator";
  if (document.getElementById("lblHeliCalc")) document.getElementById("lblHeliCalc").innerHTML			= "Helicopter Calculator";

  // set Langauge DD to selectet Language
  for (i=0; i < document.getElementById("lang").options.length ; i++){
      //alert(document.getElementById("lang").options[i].value+"=="+getParameterByName("lang"));
      if (document.getElementById("lang").options[i].value == getParameterByName("lang")){
        document.getElementById("lang").options[i].selected=true;
        break;
      }
  }  
  
  // General Input
  if (document.getElementById("lblGGeneral")) document.getElementById("lblGGeneral").innerHTML			= "General";

  if (document.getElementById("lblGMotorCooling")) document.getElementById("lblGMotorCooling").innerHTML= "Motor Cooling:";
  if (document.getElementById("inGMotorCooling")) document.getElementById("inGMotorCooling")[0].text	= "excellent";
  if (document.getElementById("inGMotorCooling")) document.getElementById("inGMotorCooling")[1].text	= "good";
  if (document.getElementById("inGMotorCooling")) document.getElementById("inGMotorCooling")[2].text	= "medium";
  if (document.getElementById("inGMotorCooling")) document.getElementById("inGMotorCooling")[3].text	= "poor";
  if (document.getElementById("inGMotorCooling")) document.getElementById("inGMotorCooling")[4].text	= "very poor";
  
  if (document.getElementById("lblGRotors")) document.getElementById("lblGRotors").innerHTML			= "# of Rotors:";

  if (document.getElementById("lblGModelWeight")) document.getElementById("lblGModelWeight").innerHTML	= "Model Weight:";
  if (document.getElementById("uGModelWeight"))   document.getElementById("uGModelWeight").innerHTML	= cGramm;
  if (document.getElementById("uGModelWeightOz")) document.getElementById("uGModelWeightOz").innerHTML	= cOz;

  if (document.getElementById("inGWeightCalc")) document.getElementById("inGWeightCalc")[0].text		= "incl. Drive";
  if (document.getElementById("inGWeightCalc")) document.getElementById("inGWeightCalc")[1].text		= "without Drive";

  if (document.getElementById("lblGElevation")) document.getElementById("lblGElevation").innerHTML		= "Field Elevation";
  if (document.getElementById("uGElevation"))   document.getElementById("uGElevation").innerHTML		= cMSL;
  if (document.getElementById("uGElevationFt")) document.getElementById("uGElevationFt").innerHTML		= cFtSL;
  
  if (document.getElementById("lblGTemp")) document.getElementById("lblGTemp").innerHTML				= "Air Temperature";
  if (document.getElementById("uGTemp"))   document.getElementById("uGTemp").innerHTML					= cC;
  if (document.getElementById("uGTempF"))  document.getElementById("uGTempF").innerHTML					= cF;

  if (document.getElementById("lblGPressure"))    document.getElementById("lblGPressure").innerHTML		= "Pressure (QNH):";
  if (document.getElementById("uGPressure"))      document.getElementById("uGPressure").innerHTML		= cHPa;
  if (document.getElementById("uGPressureInHg"))  document.getElementById("uGPressureInHg").innerHTML	= cInHg;
  
  // Battery Input
  if (document.getElementById("lblBBattery")) document.getElementById("lblBBattery").innerHTML			= "Battery Cell";
  
  if (document.getElementById("lblBCell")) document.getElementById("lblBCell").innerHTML				= "Type (Cont. / max. C) - charge state:";
  if (document.getElementById("lblBCellHeli")) document.getElementById("lblBCellHeli").innerHTML		= "Type (Cont. / max. C):";
  if (document.getElementById("inBChargeState")) document.getElementById("inBChargeState")[0].text		= "full";
  if (document.getElementById("inBChargeState")) document.getElementById("inBChargeState")[1].text		= "normal";
  if (document.getElementById("inBChargeState")) document.getElementById("inBChargeState")[2].text		= "low";

  if (document.getElementById("lblBConfiguration")) document.getElementById("lblBConfiguration").innerHTML= "Configuration:";
  if (document.getElementById("uBS")) document.getElementById("uBS").innerHTML							= "S";
  if (document.getElementById("uBP")) document.getElementById("uBP").innerHTML							= "P";
 
  if (document.getElementById("lblBCellCap")) document.getElementById("lblBCellCap").innerHTML			= "Cell Capacity:";
  if (document.getElementById("uBCellCap")) document.getElementById("uBCellCap").innerHTML				= cmAh;
 
  if (document.getElementById("lblBCap")) document.getElementById("lblBCap").innerHTML					= "Total Capacity:";
  if (document.getElementById("uBCap"))   document.getElementById("uBCap").innerHTML					= cmAh;

  if (document.getElementById("lblBRi")) document.getElementById("lblBRi").innerHTML					= "Resistance:";
  if (document.getElementById("uBRi"))   document.getElementById("uBRi").innerHTML						= cOhm;

  if (document.getElementById("lblBVcell")) document.getElementById("lblBVcell").innerHTML				= "Voltage:";
  if (document.getElementById("uBVcell"))   document.getElementById("uBVcell").innerHTML				= cV;

  if (document.getElementById("lblBCRate")) document.getElementById("lblBCRate").innerHTML				= "C-Rate:";
  if (document.getElementById("uBCcont"))   document.getElementById("uBCcont").innerHTML					= "C cont.";
  if (document.getElementById("uBCmax"))    document.getElementById("uBCmax").innerHTML					= "C max";

  if (document.getElementById("lblBWeight")) document.getElementById("lblBWeight").innerHTML			= "Weight:";
  if (document.getElementById("uBWeight"))   document.getElementById("uBWeight").innerHTML				= cGramm;
  if (document.getElementById("uBWeightOz")) document.getElementById("uBWeightOz").innerHTML			= cOz;

  // ESC (Controller) Input
  if (document.getElementById("lblEController")) document.getElementById("lblEController").innerHTML	= "Controller";

  if (document.getElementById("lblEType")) document.getElementById("lblEType").innerHTML				= "Type:";

  if (document.getElementById("lblEContCurrent")) document.getElementById("lblEContCurrent").innerHTML	= "cont. Curent:";
  if (document.getElementById("uEContCurrent"))   document.getElementById("uEContCurrent").innerHTML	= cA;

  if (document.getElementById("lblEMaxCurrent")) document.getElementById("lblEMaxCurrent").innerHTML	= "max. Curent:";
  if (document.getElementById("uEMaxCurrent"))   document.getElementById("uEMaxCurrent").innerHTML		= cA;

  if (document.getElementById("lblERi")) document.getElementById("lblERi").innerHTML					= "Resistance:";
  if (document.getElementById("uERi"))   document.getElementById("uERi").innerHTML						= cOhm;

  if (document.getElementById("lblEWeight")) document.getElementById("lblEWeight").innerHTML			= "Weight:";
  if (document.getElementById("uEWeight"))   document.getElementById("uEWeight").innerHTML				= cGramm;
  if (document.getElementById("uEWeightOz")) document.getElementById("uEWeightOz").innerHTML			= cOz;

  // Motor Input
  if (document.getElementById("lblMMotor")) document.getElementById("lblMMotor").innerHTML				= "Motor";

  if (document.getElementById("lblMManufacturer")) document.getElementById("lblMManufacturer").innerHTML= "Manufacturer - Type (Kv):";
  if (document.getElementById("inMManufacturer")) document.getElementById("inMManufacturer")[0].text	= "select...";
  if (document.getElementById("BtnSearch")) document.getElementById("BtnSearch").value					= "   search...   ";

  if (document.getElementById("lblMKv")) document.getElementById("lblMKv").innerHTML					= "KV (w/o torque):";
  if (document.getElementById("uMKv"))   document.getElementById("uMKv").innerHTML						= cRpmV;

  if (document.getElementById("lblMIo"))  document.getElementById("lblMIo").innerHTML					= "no-load Current:";
  if (document.getElementById("uMIo"))    document.getElementById("uMIo").innerHTML						= cA;
  if (document.getElementById("uMVIo"))   document.getElementById("uMVIo").innerHTML					= cV;

  if (document.getElementById("lblMRi")) document.getElementById("lblMRi").innerHTML					= "Resistance:";
  if (document.getElementById("uMRi"))   document.getElementById("uMRi").innerHTML						= cOhm;

  if (document.getElementById("lblMLength"))   document.getElementById("lblMLength").innerHTML			= "Case Length:";
  if (document.getElementById("uMLength"))     document.getElementById("uMLength").innerHTML			= cMm;
  if (document.getElementById("uMLengthInch")) document.getElementById("uMLengthInch").innerHTML		= cInch;

  if (document.getElementById("lblMLimit"))    document.getElementById("lblMLimit").innerHTML			= "Limit (up to 15s):";
  if (document.getElementById("inMLimitType")) document.getElementById("inMLimitType")[0].text			= cA;
  if (document.getElementById("inMLimitType")) document.getElementById("inMLimitType")[1].text			= cW;

  if (document.getElementById("lblMPoles")) document.getElementById("lblMPoles").innerHTML				= "# mag. Poles:";

  if (document.getElementById("lblMWeight")) document.getElementById("lblMWeight").innerHTML			= "Weight:";
  if (document.getElementById("uMWeight"))   document.getElementById("uMWeight").innerHTML				= cGramm;
  if (document.getElementById("uMWeightOz")) document.getElementById("uMWeightOz").innerHTML			= cOz;

  // Propeller Input
  if (document.getElementById("lblPProp")) document.getElementById("lblPProp").innerHTML				= "Propeller";
  if (document.getElementById("lblPFan")) document.getElementById("lblPFan").innerHTML					= "Ducted Fan";
  if (document.getElementById("lblPHeli")) document.getElementById("lblPHeli").innerHTML				= "Rotor";

  if (document.getElementById("lblPType")) document.getElementById("lblPType").innerHTML				= "Type - yoke twist:";
  if (document.getElementById("lblPTypeFan")) document.getElementById("lblPTypeFan").innerHTML			= "Type:";
  if (document.getElementById("lblPTypeHeli")) document.getElementById("lblPTypeHeli").innerHTML		= "Type:";
  if (document.getElementById("inPType"))  document.getElementById("inPType")[0].text					= "custom";
  if (document.getElementById("lblPFan"))  document.getElementById("inPType")[0].text					= "select...";
  if (document.getElementById("lblPHeli"))  document.getElementById("inPType")[0].text					= "custom";

  if (document.getElementById("lblPDiameter")) document.getElementById("lblPDiameter").innerHTML		= "Diameter:";
  if (document.getElementById("uPDiameter"))   document.getElementById("uPDiameter").innerHTML			= cInch;

  if (document.getElementById("lblPPitch")) document.getElementById("lblPPitch").innerHTML				= "Pitch:";
  if (document.getElementById("uPPitch"))   document.getElementById("uPPitch").innerHTML				= cInch;

  if (document.getElementById("lblPBlades")) document.getElementById("lblPBlades").innerHTML			= "# Blades:";

  if (document.getElementById("lblPConst")) document.getElementById("lblPConst").innerHTML				= "PConst:";

  if (document.getElementById("lblPGearRatio")) document.getElementById("lblPGearRatio").innerHTML		= "Gear Ratio:";
  if (document.getElementById("uPGearRatio"))   document.getElementById("uPGearRatio").innerHTML		= cRatio;
  
  //EDF Specific Input
  if (document.getElementById("lblPDuct"))    document.getElementById("lblPDuct").innerHTML				= "Thrust Duct for:";
  if (document.getElementById("inPDuctType")) document.getElementById("inPDuctType")[0].text			= "% FSA";
  if (document.getElementById("inPDuctType")) document.getElementById("inPDuctType")[1].text			= "mm Ø";
  if (document.getElementById("inPDuctType")) document.getElementById("inPDuctType")[2].text			= "in Ø";
  if (document.getElementById("inPDuctType")) document.getElementById("inPDuctType")[3].text			= "cm²";
  if (document.getElementById("inPDuctType")) document.getElementById("inPDuctType")[4].text			= "in²";

  if (document.getElementById("lblPSpeed")) document.getElementById("lblPSpeed").innerHTML				= "Flight Speed:";
  if (document.getElementById("uPSpeed"))   document.getElementById("uPSpeed").innerHTML				= cKmh;
  if (document.getElementById("uPSpeedMph"))   document.getElementById("uPSpeedMph").innerHTML			= cMph;

  // Heli Specific Input
  if (document.getElementById("lblPPitchHeli")) document.getElementById("lblPPitchHeli").innerHTML		= "max. Pitch:";
  if (document.getElementById("lblPGearHeli")) document.getElementById("lblPGearHeli").innerHTML		= "Main Gear : Motor Pinion";
  if (document.getElementById("uPGearHeli"))   document.getElementById("uPGearHeli").innerHTML			= "Teeth";

  document.theForm.btnCalculate.value																	= "calculate"; //Button to initiate the calculation
  if (document.getElementById("lblRemark")) document.getElementById("lblRemark").innerHTML				= "Remarks:";
  
  // Battery Output
  if (document.getElementById("lblBTitel")) document.getElementById("lblBTitel").innerHTML				= "Battery";

  if (document.getElementById("lblBLoad")) document.getElementById("lblBLoad").innerHTML				= "Load:";
  if (document.getElementById("uBLoad"))   document.getElementById("uBLoad").innerHTML					= cBRate;

  if (document.getElementById("lblBVoltage")) document.getElementById("lblBVoltage").innerHTML			= "Voltage:";
  if (document.getElementById("uBVoltage"))   document.getElementById("uBVoltage").innerHTML			= cV;

  if (document.getElementById("lblBRatedVoltage")) document.getElementById("lblBRatedVoltage").innerHTML= "Rated Voltage:";
  if (document.getElementById("uBRatedVoltage"))   document.getElementById("uBRatedVoltage").innerHTML	= cV;

  if (document.getElementById("lblBFlightTime")) document.getElementById("lblBFlightTime").innerHTML	= "Flight Time:";
  if (document.getElementById("uBFlightTime"))   document.getElementById("uBFlightTime").innerHTML		= cMin;

  if (document.getElementById("lblBMixedFlightTime")) document.getElementById("lblBMixedFlightTime").innerHTML= "Mixed Flight Time:";
  if (document.getElementById("uBMixedFlightTime"))   document.getElementById("uBMixedFlightTime").innerHTML  = cMin;

  if (document.getElementById("lblBHoverFlightTime")) document.getElementById("lblBHoverFlightTime").innerHTML= "Hover Flight Time:";
  if (document.getElementById("uBHoverFlightTime"))   document.getElementById("uBHoverFlightTime").innerHTML  = cMin;

  if (document.getElementById("lblOutBWeight"))   document.getElementById("lblOutBWeight").innerHTML	= "Weight:";
  if (document.getElementById("uOutBWeight"))     document.getElementById("uOutBWeight").innerHTML		= cGramm;
  if (document.getElementById("uOutBWeightOz"))   document.getElementById("uOutBWeightOz").innerHTML	= cOz;

  
  // Motor @ Opt Output
  if (document.getElementById("lblOptTitel")) document.getElementById("lblOptTitel").innerHTML			= "Motor @ Optimum Efficiency";

  if (document.getElementById("lblOptI")) document.getElementById("lblOptI").innerHTML					= "Current:";
  if (document.getElementById("uOptI"))   document.getElementById("uOptI").innerHTML					= cA;

  if (document.getElementById("lblOptV")) document.getElementById("lblOptV").innerHTML					= "Voltage:";
  if (document.getElementById("uOptV"))   document.getElementById("uOptV").innerHTML					= cV;

  if (document.getElementById("lblOptRpm")) document.getElementById("lblOptRpm").innerHTML				= "Revolutions*:";
  if (document.getElementById("uOptRpm"))   document.getElementById("uOptRpm").innerHTML				= cRpm;
  
  if (document.getElementById("lblOptWin")) document.getElementById("lblOptWin").innerHTML				= "electric Power:";
  if (document.getElementById("uOptWin"))   document.getElementById("uOptWin").innerHTML				= cW;
  
  if (document.getElementById("lblOptWout")) document.getElementById("lblOptWout").innerHTML			= "mech. Power:";
  if (document.getElementById("uOptWout"))   document.getElementById("uOptWout").innerHTML				= cW;

  if (document.getElementById("lblOptEfficiency")) document.getElementById("lblOptEfficiency").innerHTML= "Efficiency:";
  if (document.getElementById("uOptEfficiency"))   document.getElementById("uOptEfficiency").innerHTML	= cPercent;
  
  // Motor @ Max Output
  if (document.getElementById("lblMaxTitel")) document.getElementById("lblMaxTitel").innerHTML			= "Motor @ Maximum";

  if (document.getElementById("lblMaxI")) document.getElementById("lblMaxI").innerHTML					= "Current:";
  if (document.getElementById("uMaxI"))   document.getElementById("uMaxI").innerHTML					= cA;

  if (document.getElementById("lblMaxV")) document.getElementById("lblMaxV").innerHTML					= "Voltage:";
  if (document.getElementById("uMaxV"))   document.getElementById("uMaxV").innerHTML					= cV;

  if (document.getElementById("lblMaxRpm")) document.getElementById("lblMaxRpm").innerHTML				= "Revolutions*:";
  if (document.getElementById("uMaxRpm"))   document.getElementById("uMaxRpm").innerHTML				= cRpm;
  
  if (document.getElementById("lblMaxWin")) document.getElementById("lblMaxWin").innerHTML				= "electric Power:";
  if (document.getElementById("uMaxWin"))   document.getElementById("uMaxWin").innerHTML				= cW;
  
  if (document.getElementById("lblMaxWout")) document.getElementById("lblMaxWout").innerHTML			= "mech. Power:";
  if (document.getElementById("uMaxWout"))   document.getElementById("uMaxWout").innerHTML				= cW;

  if (document.getElementById("lblMaxEfficiency")) document.getElementById("lblMaxEfficiency").innerHTML= "Efficiency:";
  if (document.getElementById("uMaxEfficiency"))   document.getElementById("uMaxEfficiency").innerHTML	= cPercent;

  if (document.getElementById("lblMaxTemp")) document.getElementById("lblMaxTemp").innerHTML			= "est. Temperature:";
  if (document.getElementById("uMaxTemp"))   document.getElementById("uMaxTemp").innerHTML				= cC;
  if (document.getElementById("uMaxTempF"))   document.getElementById("uMaxTempF").innerHTML			= cF;
  
  // Motor @ Hover Output (xcopterCalc & heliCalc)
  if (document.getElementById("lblHoverTitel")) document.getElementById("lblHoverTitel").innerHTML		= "Motor @ Hover";

  if (document.getElementById("lblHoverI")) document.getElementById("lblHoverI").innerHTML				= "Current:";
  if (document.getElementById("uHoverI"))   document.getElementById("uHoverI").innerHTML				= cA;

  if (document.getElementById("lblHoverV")) document.getElementById("lblHoverV").innerHTML				= "Voltage:";
  if (document.getElementById("uHoverV"))   document.getElementById("uHoverV").innerHTML				= cV;

  if (document.getElementById("lblHoverThrottle")) document.getElementById("lblHoverThrottle").innerHTML= "Throttle (linear):";
  if (document.getElementById("uHoverThrottle"))   document.getElementById("uHoverThrottle").innerHTML	= cPercent;

  if (document.getElementById("lblHoverDiscLoad")) document.getElementById("lblHoverDiscLoad").innerHTML		= "Disc Load:";
  if (document.getElementById("uHoverDiscLoad"))   document.getElementById("uHoverDiscLoad").innerHTML			= cKgM;
  if (document.getElementById("uHoverDiscLoadOzFt"))   document.getElementById("uHoverDiscLoadOzFt").innerHTML	= cOzFt;
  
  if (document.getElementById("lblHoverWin")) document.getElementById("lblHoverWin").innerHTML			= "electric Power:";
  if (document.getElementById("uHoverWin"))   document.getElementById("uHoverWin").innerHTML				= cW;
  
  if (document.getElementById("lblHoverWout")) document.getElementById("lblHoverWout").innerHTML		= "mech. Power:";
  if (document.getElementById("uHoverWout"))   document.getElementById("uHoverWout").innerHTML			= cW;

  if (document.getElementById("lblHoverEfficiency")) document.getElementById("lblHoverEfficiency").innerHTML= "Efficiency:";
  if (document.getElementById("uHoverEfficiency"))   document.getElementById("uHoverEfficiency").innerHTML	= cPercent;

  if (document.getElementById("lblHoverTemp")) document.getElementById("lblHoverTemp").innerHTML		= "est. Temperature:";
  if (document.getElementById("uHoverTemp"))   document.getElementById("uHoverTemp").innerHTML			= cC;
  if (document.getElementById("uHoverTempF"))   document.getElementById("uHoverTempF").innerHTML		= cF;

  if (document.getElementById("lblHoverPitch")) document.getElementById("lblHoverPitch").innerHTML		= "approx. Pitch:";
  if (document.getElementById("uHoverPitch"))   document.getElementById("uHoverPitch").innerHTML		= "°";
 

  // Propeller Output (propCalc)
  if (document.getElementById("lblPTitel")) document.getElementById("lblPTitel").innerHTML				= "Propeller";

  if (document.getElementById("lblPThrust")) document.getElementById("lblPThrust").innerHTML			= "Static Thrust:";
  if (document.getElementById("uPThrust"))    document.getElementById("uPThrust").innerHTML				= cGramm;
  if (document.getElementById("uPThrustOz")) document.getElementById("uPThrustOz").innerHTML			= cOz;

  if (document.getElementById("lblPRpm")) document.getElementById("lblPRpm").innerHTML					= "Revolutions*:";
  if (document.getElementById("uPRpm"))   document.getElementById("uPRpm").innerHTML					= cRpm;

  if (document.getElementById("lblPStallThrust")) document.getElementById("lblPStallThrust").innerHTML	= "Stall Thrust:";
  if (document.getElementById("uPStallThrust"))   document.getElementById("uPStallThrust").innerHTML	= cGramm;
  if (document.getElementById("uPStallThrustOz")) document.getElementById("uPStallThrustOz").innerHTML	= cOz;

  if (document.getElementById("lblPPitchSpeed"))  document.getElementById("lblPPitchSpeed").innerHTML	= "Pitch Speed:";
  if (document.getElementById("uPPitchSpeed"))    document.getElementById("uPPitchSpeed").innerHTML		= cKmh;
  if (document.getElementById("uPPitchSpeedMph")) document.getElementById("uPPitchSpeedMph").innerHTML	= cMph;
  
  if (document.getElementById("lblPTipSpeed"))  document.getElementById("lblPTipSpeed").innerHTML		= "Tip Speed:";
  if (document.getElementById("uPTipSpeed"))    document.getElementById("uPTipSpeed").innerHTML			= cKmh;
  if (document.getElementById("uPTipSpeedMph")) document.getElementById("uPTipSpeedMph").innerHTML		= cMph;

  if (document.getElementById("lblPEfficiency"))  document.getElementById("lblPEfficiency").innerHTML	= "specific Thrust:";
  if (document.getElementById("uPEfficiency"))    document.getElementById("uPEfficiency").innerHTML		= cgW;
  if (document.getElementById("uPEfficiencyOzW")) document.getElementById("uPEfficiencyOzW").innerHTML	= cOzW;
  
  // Ducted Fan (fanCalc)
  if (document.getElementById("lblFTitel")) document.getElementById("lblFTitel").innerHTML				= "Ducted Fan";

  if (document.getElementById("lblFThrust")) document.getElementById("lblFThrust").innerHTML			= "Static Thrust:";
  if (document.getElementById("uFThrust"))    document.getElementById("uFThrust").innerHTML				= cGramm;
  if (document.getElementById("uFThrustOz")) document.getElementById("uFThrustOz").innerHTML			= cOz;

  if (document.getElementById("lblFRpm")) document.getElementById("lblFRpm").innerHTML					= "Revolutions*:";
  if (document.getElementById("uFRpm"))   document.getElementById("uFRpm").innerHTML					= cRpm;

  if (document.getElementById("lblFFlightThrust")) document.getElementById("lblFFlightThrust").innerHTML= "Thrust @ Speed:";
  if (document.getElementById("uFFlightThrust"))   document.getElementById("uFFlightThrust").innerHTML	= cGramm;
  if (document.getElementById("uFFlightThrustOz")) document.getElementById("uFFlightThrustOz").innerHTML= cOz;

  if (document.getElementById("lblFEfflux"))  document.getElementById("lblFEfflux").innerHTML			= "Jet Efflux:";
  if (document.getElementById("uFEffluxKmh"))    document.getElementById("uFEffluxKmh").innerHTML		= cKmh;
  if (document.getElementById("uFEffluxMs")) document.getElementById("uFEffluxMs").innerHTML			= cMs;
  if (document.getElementById("uFEffluxMph"))    document.getElementById("uFEffluxMph").innerHTML		= cMph;
  if (document.getElementById("uFEffluxFts")) document.getElementById("uFEffluxFts").innerHTML			= cFts;
  
  if (document.getElementById("lblFEfficiency"))  document.getElementById("lblFEfficiency").innerHTML	= "specific Thrust:";
  if (document.getElementById("uFEfficiency"))    document.getElementById("uFEfficiency").innerHTML		= cgW;
  if (document.getElementById("uFEfficiencyOzW")) document.getElementById("uFEfficiencyOzW").innerHTML	= cOzW;

  // Rotor (heliCalc)
  if (document.getElementById("lblRTitel")) document.getElementById("lblRTitel").innerHTML				= "Rotor @ max Pitch";

  if (document.getElementById("lblRThrust")) document.getElementById("lblRThrust").innerHTML			= "Static Thrust:";
  if (document.getElementById("uRThrust"))    document.getElementById("uRThrust").innerHTML				= cGramm;
  if (document.getElementById("uRThrustOz")) document.getElementById("uRThrustOz").innerHTML			= cOz;

  if (document.getElementById("lblRHeadRpm")) document.getElementById("lblRHeadRpm").innerHTML			= "max. Headspeed*:";
  if (document.getElementById("uRHeadRpm"))   document.getElementById("uRHeadRpm").innerHTML			= cRpm;

  if (document.getElementById("lblRGovernor")) document.getElementById("lblRGovernor").innerHTML		= "max. Governor:";
  if (document.getElementById("uRGovernor"))   document.getElementById("uRGovernor").innerHTML			= cPercent;

  if (document.getElementById("lblRForward"))  document.getElementById("lblRForward").innerHTML			= "max. Forward Speed:";
  if (document.getElementById("uRForward"))    document.getElementById("uRForward").innerHTML			= cKmh;
  if (document.getElementById("uRForwardMph")) document.getElementById("uRForwardMph").innerHTML				= cMph;
  
  if (document.getElementById("lblRTipSpeed"))  document.getElementById("lblRTipSpeed").innerHTML		= "Tip Speed:";
  if (document.getElementById("uRTipSpeed"))    document.getElementById("uRTipSpeed").innerHTML			= cKmh;
  if (document.getElementById("uRTipSpeedMph")) document.getElementById("uRTipSpeedMph").innerHTML		= cMph;

  if (document.getElementById("lblREfficiency"))  document.getElementById("lblREfficiency").innerHTML	= "specific Thrust:";
  if (document.getElementById("uREfficiency"))    document.getElementById("uREfficiency").innerHTML		= cgW;
  if (document.getElementById("uREfficiencyOzW")) document.getElementById("uREfficiencyOzW").innerHTML	= cOzW;


  // Entire Drive Output
  if (document.getElementById("lblTotTitel")) document.getElementById("lblTotTitel").innerHTML			= "Total Drive";

  if (document.getElementById("lblTotDriveWeight")) document.getElementById("lblTotDriveWeight").innerHTML= "Drive Weight:";
  if (document.getElementById("uTotDriveWeight"))   document.getElementById("uTotDriveWeight").innerHTML= cGramm;
  if (document.getElementById("uTotDriveWeightOz")) document.getElementById("uTotDriveWeightOz").innerHTML= cOz;

  if (document.getElementById("lblTotAUW")) document.getElementById("lblTotAUW").innerHTML				= "All-up Weight:";
  if (document.getElementById("uTotAUW"))   document.getElementById("uTotAUW").innerHTML				= cGramm;
  if (document.getElementById("uTotAUWOz")) document.getElementById("uTotAUWOz").innerHTML				= cOz;

  if (document.getElementById("lblTotPayload")) document.getElementById("lblTotPayload").innerHTML		= "add. Payload:";
  if (document.getElementById("uTotPayload"))   document.getElementById("uTotPayload").innerHTML		= cGramm;
  if (document.getElementById("uTotPayloadOz")) document.getElementById("uTotPayloadOz").innerHTML		= cOz;

  if (document.getElementById("lblTotPowerWeight")) document.getElementById("lblTotPowerWeight").innerHTML= "Power-Weight:";
  if (document.getElementById("uTotPowerWeight"))   document.getElementById("uTotPowerWeight").innerHTML= cWkg;
  if (document.getElementById("uTotPowerWeightWOz")) document.getElementById("uTotPowerWeightWOz").innerHTML= cWlb;

  if (document.getElementById("lblTotThrustWeight")) document.getElementById("lblTotThrustWeight").innerHTML= "Thrust-Weight:";
  if (document.getElementById("uTotThrustWeight"))   document.getElementById("uTotThrustWeight").innerHTML= cRatio;

  if (document.getElementById("lblTotHoverI")) document.getElementById("lblTotHoverI").innerHTML		= "Current @ Hover:";
  if (document.getElementById("uTotHoverI"))   document.getElementById("uTotHoverI").innerHTML			= cA;

  if (document.getElementById("lblTotHoverPin")) document.getElementById("lblTotHoverPin").innerHTML	= "P(in) @ Hover:";
  if (document.getElementById("uTotHoverPin"))   document.getElementById("uTotHoverPin").innerHTML		= cW;

  if (document.getElementById("lblTotHoverPout")) document.getElementById("lblTotHoverPout").innerHTML	= "P(out) @ Hover:";
  if (document.getElementById("uTotHoverPout"))   document.getElementById("uTotHoverPout").innerHTML	= cW;

  if (document.getElementById("lblTotHoverEfficiencyt")) document.getElementById("lblTotHoverEfficiencyt").innerHTML= "Efficiency @ Hover:";
  if (document.getElementById("uTotHoverEfficiency"))   document.getElementById("uTotHoverEfficiency").innerHTML	= cPercent;


  if (document.getElementById("lblTotI")) document.getElementById("lblTotI").innerHTML					= "Current @ max:";
  if (document.getElementById("uTotI"))   document.getElementById("uTotI").innerHTML					= cA;

  if (document.getElementById("lblTotPin")) document.getElementById("lblTotPin").innerHTML				= "P(in) @ max:";
  if (document.getElementById("uTotPin"))   document.getElementById("uTotPin").innerHTML				= cW;

  if (document.getElementById("lblTotPout")) document.getElementById("lblTotPout").innerHTML			= "P(out) @ max:";
  if (document.getElementById("uTotPout"))   document.getElementById("uTotPout").innerHTML				= cW;

  if (document.getElementById("lblTotEfficiencyt")) document.getElementById("lblTotEfficiencyt").innerHTML= "Efficiency @ max:";
  if (document.getElementById("uTotEfficiency"))   document.getElementById("uTotEfficiency").innerHTML	= cPercent;

  // Graphic
  if (document.getElementById("graphTitel")) document.getElementById("graphTitel").innerHTML			= "Motor Characteristics";
  if (document.getElementById("graphAmp")) document.getElementById("graphAmp").innerHTML				= "Ampere";

  //Foot Note
  if (document.getElementById("footnoteLeft")) document.getElementById("footnoteLeft").innerHTML		= "<strong>Important Note:</strong><br/>"
  																										  +"Before flight recheck your max. current! If your Current, el. Power or RPM are over the manufacturers<br/>"
  																										  +"limits your motor, controller and/or battery may take damage! <strong>Verify before flight by measurment!</strong>";
  																										  
  if (document.getElementById("footnoteRight")) document.getElementById("footnoteRight").innerHTML		= "for printing use Landscape format<br/>"
  																										 +"* The manufacturer limitation is NOT monitored<br/>"
  																										 +"** Testdata with reduced accuracy";
 
  if (document.getElementById("lblDirectLink")) document.getElementById("lblDirectLink").innerHTML		= "generate link";
 
}

// -- search form translation --

var cManufacturer = "Manufacturer";
var cMotortyp     = "Motortyp";
var cKv           = "KV";
var cLimit        = "Limit";
var cWeight       = "Weight";
var msgNoResult   = "no result - your search query is too restrictive...";

function applySLanguage(){

  searchWindow.document.getElementById("lblSManufacturer").innerHTML = cManufacturer;
  searchWindow.document.getElementById("lblSMotortyp").innerHTML     = cMotortyp;
  searchWindow.document.getElementById("lblSKv").innerHTML           = cKv;
  searchWindow.document.getElementById("uRpmV").innerHTML            = cRpmV;
  searchWindow.document.getElementById("lblSMinPower").innerHTML     = "minimum Power Limit";
  searchWindow.document.getElementById("uW").innerHTML               = cW;
  searchWindow.document.getElementById("lblSMaxWeight").innerHTML    = "maximum Weight";
  searchWindow.document.getElementById("uGramm").innerHTML            = cGramm;

  searchWindow.document.getElementById("lblSSortedBy").innerHTML     = "sorted by";
  searchWindow.document.getElementById("sortedBy")[0].text			 = cManufacturer;
  searchWindow.document.getElementById("sortedBy")[1].text			 = cMotortyp;
  searchWindow.document.getElementById("sortedBy")[2].text			 = cKv;
  searchWindow.document.getElementById("sortedBy")[3].text			 = cLimit;
  searchWindow.document.getElementById("sortedBy")[4].text			 = cWeight;

  searchWindow.document.getElementById("lblSResults").innerHTML      = "Results";
  searchWindow.document.getElementById("search").value               = "search";
  
  searchWindow.document.getElementById("remark").innerHTML           = "the production of these motors have been discontinued";

}
