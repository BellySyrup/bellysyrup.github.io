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
var plotVersion = "2.02";
//
//  Ploting the Graph
//
//
//  Revisions:
//  05.03.14  2.02  Kurvenbesser bezeichenen für farbenblinde
//  15.05.13  2.01  Limite wurde nicht angezeigt, wenn sie nahe an xmax lag
//                  using new flot 0.8.0 (with old excanvas.min.js for IE < 8)
//  15.03.13  2.00  Erstellt
//*****************************************************************************

var graphicDataStr="";

var lable1;
var lable2;
var lable3a, lable3b;
var lable4;
var lable5;
var lable6;
var lable7;





   lable1 = "① " + msgLable1;
   lable2 = "② " + msgLable2;
   lable3a= "③ " + msgLable3a;
   lable3b= msgLable3b;
   lable4 = "④ " + msgLable4;
   lable5 = "&nbsp;&nbsp;&nbsp;&nbsp;" + msgLable5;
   lable6 = msgLable6;
   lable7 = "⑤ " + msgLable7;


function plotMotorGraph(hasTwoMarkings) {
//  with (document.inputform) {

   var d1 = [];
   var d2 = [];
   var d3 = [];
   var d4 = [];
   var d5 = [];
   var d6 = [];
   var d7 = [];
   
   //alert(graphicDataStr);
   var splittedData = graphicDataStr.split("|");

   var scale = 1;
   var rpmScale = 100;

   xmin = 0; xmax=10;
   ymax=100; ymin=0;

   if ((1*document.getElementById("outMaxRpm").innerHTML) > 17500) {rpmScale=1000};


   //Automatic Scaleing
//   if (scale==0){
      scale = 1;
      if (1*document.getElementById("outMaxWout").innerHTML > 200) { scale = 2};
      if (1*document.getElementById("outMaxWout").innerHTML > 500) { scale = 5};
      if (1*document.getElementById("outMaxWout").innerHTML > 1000) { scale = 10};
      if (1*document.getElementById("outMaxWout").innerHTML > 2000) { scale = 20};
      if (1*document.getElementById("outMaxWout").innerHTML > 5000) { scale = 50};
      if (1*document.getElementById("outMaxWout").innerHTML > 10000) { scale = 100};
      if (1*document.getElementById("outMaxWout").innerHTML > 20000) { scale = 200};
//   }


   for (i=0; i<splittedData.length-1; i += 6) {

     //Output Power
     d1.push([1*splittedData[i], 1*splittedData[i+1]/scale]);

     // Efficiency
     d2.push([(1*splittedData[i]), (1*splittedData[i+2])]);
     
     //max RPM
     d3.push([1*splittedData[i], 1*splittedData[i+3]/rpmScale]);

     
     // Wast Power
     d4.push([1*splittedData[i], 1*splittedData[i+4]/scale]);

     //Housing thermal prediction
     d5.push([1*splittedData[i], 1*splittedData[i+5]]);
        
     xmax=1*splittedData[i];
   }
   
   //Zoneder restriktivsten Limite zeichen
   var startMarking=100000; //not visible
   if (graphicDataStr!=""){
	   if ((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].text=='W') && (document.getElementById("inMLimit").value!="") && (1*document.getElementById("inMLimit").value>0)) {
	      startMarking = (1*document.getElementById("inMLimit").value)/document.getElementById("outMaxV").innerHTML;
	   }	
	   if ((document.getElementById("inMLimitType").options[document.getElementById("inMLimitType").selectedIndex].text=='A') && (document.getElementById("inMLimit").value!="") && (1*document.getElementById("inMLimit").value>0)) {
	      startMarking = (1*document.getElementById("inMLimit").value);
	   }	
	   if (document.getElementById("inEMaxCurrent").value!="" && 1*document.getElementById("inEMaxCurrent").value>0 && startMarking > 1*document.getElementById("inEMaxCurrent").value) startMarking = 1*document.getElementById("inEMaxCurrent").value;
	   if (startMarking > document.getElementById("inBCmax").value*document.getElementById("inBCap").value/1000) startMarking = document.getElementById("inBCmax").value*document.getElementById("inBCap").value/1000;
   } 
    
    //vertikaler Strich für Limite einzeichnen
    if (xmax < 1.0*startMarking)startMarking = 1.20* xmax;
    var markings = [
        { color: "rgb(255, 245, 234)", xaxis: { from: startMarking} },
        { color: "rgb(255, 210, 164)", lineWidth: 2, xaxis: { from: startMarking, to: startMarking} }

    ];
  
             
      plot = $.plot($("#placeholder"), [
        { label: lable1+scale+"W]",  data: d1,lines: { show: true }},
        { label: lable2,  data: d2 ,lines: { show: true }},
        { label: lable3a+rpmScale+lable3b,  data: d3,lines: { show: true }, color: "rgb(100, 30, 100)"},
        { label: lable4,  data: d4,lines: { show: true }, color: "rgb(190, 100, 0)"},
        { label: lable7,  data: d7,lines: { show: true }, color: "rgb(30, 180, 20)"},
        { label: lable5,  data: d5,lines: { show: true }, threshold: { below: "80", color: "rgb(30, 180, 20)" }, color: "rgb(200, 20, 30)"}
        //{ label: lable6+round(outImotor.value,2)+"A",  data: d6,lines: { show: true, fill: true }, color: "rgb(233, 143, 143)"}
      ],{ 
           xaxis: { min: 0 },
           yaxis: { min: 0, autoscaleMargin: null },
           grid: { markings: markings },
           legend: { position: 'nw' } });

    // add labels
    var o;
    

    

    if (xmax > 1.1*startMarking){
      o = plot.pointOffset({ x: startMarking, y:0.96*plot.getAxes().yaxis.datamax});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 12) + 'px;top:' + (o.top-12) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+msgLimit+'</div>');
 
      // draw a little arrow on top of the Limit
      var ctx = plot.getCanvas().getContext("2d");
      ctx.beginPath();
      ctx.moveTo(o.left, o.top);
      ctx.lineTo(o.left, o.top - 10);
      ctx.lineTo(o.left + 10, o.top - 5);
      ctx.lineTo(o.left, o.top);
      ctx.fillStyle = "rgb(255, 210, 164)";
      ctx.fill();
    }

    // Version
    o = plot.pointOffset({ x: (0.88*plot.getAxes().xaxis.max), y: (0.03*plot.getAxes().yaxis.max)}); //
    // we just append it to the placeholder which Flot already uses
    // for positioning
    $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 4) + 'px;top:' + o.top + 'px;color:#666;font-size:7pt">(c) by s4a &nbsp;&nbsp;&nbsp;V'+plotVersion+'</div>');



    //Werte bei Max. Strom markieren
    var step = (xmax-xmin)/70;
    var theHighlight = Math.round(((1*document.getElementById("outMaxI").innerHTML)-xmin)/step)-1; 
    if (theHighlight > 0){
      plot.highlight(0,theHighlight);
      plot.highlight(1,theHighlight);
      plot.highlight(2,theHighlight);
      plot.highlight(3,theHighlight);

      // Kurven Beschriftung
      o = plot.pointOffset({ x: (1*plot.getAxes().xaxis.max), y:1*splittedData[splittedData.length-6]/scale});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 6) + 'px;top:' + (o.top-6) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+"①"+'</div>');

      o = plot.pointOffset({ x: (1*plot.getAxes().xaxis.max), y:1*splittedData[splittedData.length-5]});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 6) + 'px;top:' + (o.top-6) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+"②"+'</div>');

      o = plot.pointOffset({ x: (1*plot.getAxes().xaxis.max), y:1*splittedData[splittedData.length-4]/rpmScale});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 6) + 'px;top:' + (o.top-6) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+"③"+'</div>');

      o = plot.pointOffset({ x: (1*plot.getAxes().xaxis.max), y:1*splittedData[splittedData.length-3]/scale});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 6) + 'px;top:' + (o.top-6) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+"④"+'</div>');

      o = plot.pointOffset({ x: (1*plot.getAxes().xaxis.max), y:1*splittedData[splittedData.length-2]});
      $("#placeholder").append('<div style="position:absolute;left:' + (o.left + 6) + 'px;top:' + (o.top-6) + 'px;color:"rgb(255, 128, 0)";font-size:smaller">'+"⑤"+'</div>');


    }

    if (hasTwoMarkings){
      //Werte bei gleichbleibender bewegung (hover, maintian top speed) markieren
      var theHighlight;//
      if (document.getElementById("outHoverI").innerHTML != "-") theHighlight = Math.round(((1*document.getElementById("outHoverI").innerHTML)-xmin)/step)-3; 
      //if (document.inputform.outImaxV != null)  theHighlight = Math.round(((1*outImaxV.value)-xmin)/step); 
      if (theHighlight > 0){
        plot.highlight(0,theHighlight);
        plot.highlight(1,theHighlight);
        //plot.highlight(2,theHighlight); // da max rpm kurve, ist die markierung nicht korrekt bei hover
        plot.highlight(3,theHighlight); 
      }
    }

    
}
