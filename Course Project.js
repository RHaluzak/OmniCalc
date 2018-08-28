// JavaScript Document
// Riley Haluzak
// Course Project
function generalAddition(){
		var gnumber = document.getElementById("gnumber");
		var gnumber2 = document.getElementById("gnumber2");
		var ganswer = document.getElementById("ganswer");
		
		var x = parseFloat(gnumber.value);
		var y = parseFloat(gnumber2.value);
		ganswer.value = x + y;
	}
function generalSubtraction(){
		var gnumber = document.getElementById("gnumber");
		var gnumber2 = document.getElementById("gnumber2");
		var ganswer = document.getElementById("ganswer");
		
		var x = parseFloat(gnumber.value);
		var y = parseFloat(gnumber2.value);
		ganswer.value = x - y;
	}
function generalMultiplication(){
		var gnumber = document.getElementById("gnumber");
		var gnumber2 = document.getElementById("gnumber2");
		var ganswer = document.getElementById("ganswer");
		
		var x = parseFloat(gnumber.value);
		var y = parseFloat(gnumber2.value);
		ganswer.value = x * y;
	}
function generalDivision(){
		var gnumber = document.getElementById("gnumber");
		var gnumber2 = document.getElementById("gnumber2");
		var ganswer = document.getElementById("ganswer");
		
		var x = parseFloat(gnumber.value);
		var y = parseFloat(gnumber2.value);
		ganswer.value = x / y;
	}
function generalClear(){
	var gnumber = document.getElementById("gnumber");
	var gnumber2 = document.getElementById("gnumber2");
	var ganswer = document.getElementById("ganswer");
	
	gnumber.value = "";
	gnumber2.value = "";
	ganswer.value = "";
}
function getSlope(){
	var snumber1 = document.getElementById("snumber1");
	var snumber2 = document.getElementById("snumber2");
	var snumber3 = document.getElementById("snumber3");
	var snumber4 = document.getElementById("snumber4");
	var sanswer = document.getElementById("sanswer");
	
	var x2 = parseFloat(snumber1.value);
	var y2 = parseFloat(snumber2.value);
	var x1 = parseFloat(snumber3.value);
	var y1 = parseFloat(snumber4.value);
	
	var y3 = y2 - y1;
	var x3 = x2 - x1;
	
	sanswer.value = y3/x3;
	
}
function slopeClear(){
	var snumber1 = document.getElementById("snumber1");
	var snumber2 = document.getElementById("snumber2");
	var snumber3 = document.getElementById("snumber3");
	var snumber4 = document.getElementById("snumber4");
	var sanswer = document.getElementById("sanswer");
	
	snumber1.value = "";
	snumber2.value = "";
	snumber3.value = "";
	snumber4.value = "";
	sanswer.value = "";
}
function findDifference(){
	var dnumber1 = document.getElementById("dnumber1");
	var dnumber2 = document.getElementById("dnumber2");
	var dnumber3 = document.getElementById("dnumber3");
	var dnumber4 = document.getElementById("dnumber4");
	var danswer = document.getElementById("danswer");
	
	alert("Test");
	
	var x2 = parseFloat(dnumber1);
	var y2 = parseFloat(dnumber2);
	var x1 = parseFloat(dnumber3);
	var y1 = parseFloat(dnumber4);
	
	var y3 = y2 - y1;
	var x3 = x2 - x1;
	var z;
	
	y3 = math.pow(y3,2);
	x3 = math.pow(x3,2);
	
	z = x3 + y3;
	
	z = math.sqrt(z);
	
	danswer.value = z;
	
}
function differenceClear(){
	var dnumber1 = document.getElementById("dnumber1");
	var dnumber2 = document.getElementById("dnumber2");
	var dnumber3 = document.getElementById("dnumber3");
	var dnumber4 = document.getElementById("dnumber4");
	var danswer = document.getElementById("danswer");
	
	dnumber1.value = "";
	dnumber2.value = "";
	dnumber3.value = "";
	dnumber4.value = "";
	danswer.value = "";
}
