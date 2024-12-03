var solarCount = 0;
var siderealCount = 0;
var orbits = 0;
var earthYears = 0;
var markerStart = 0;
var planetStart = 0;
var prevAngle = 0;
var totalAngle = 0;
var offsetAngle = 0;
var offsetX = 0;
var offsetY = 0;
var circle = 2*Math.PI;
var rectSun;
var sunCenterX;
var	sunCenterY;
var planetCenterX;
var planetCenterY;

function myFunction(){
	document.getElementById("planetList").value = 1;
}

/*document.onclick1= function(e) {
	alert("on click");
	if(e.target.id.search("light")!= -1){
		alert("planet");
	}
}*/

function onClick1(e){
	//if(e.target.id.search("light")!= -1){
	//	mouseDownItem(e);
	//}
}

function drawPlanet(v){
	b1 = getCalc(0,0,0,0);
	c1 = getCalc(0, 0, 40, 0);
	d1 = getCalc(0, 0, 20, 20);
	c2 = getCalc(0, 0, 0, 40);
	d2 = getCalc(0, 0, -20, 20);
	c3 = getCalc(0, 0, -40, 0);
	d3 = getCalc(0, 0, -20, -20);
	c4 = getCalc(0, 0, 0, -40);
	d4 = getCalc(0, 0, 20, -20);
	//alert("Origin: " + c1 + "\nFirst:  " + d1 + "\nNinety: " + c2 + "\nSecond: " + d2 + "\n180: " + c3 + "\nThird: " + d3 +  "\n270: " + c4 + "\nFourth: " + d4);
	s = document.getElementById("Sun");
	val = parseInt(v.selectedIndex);
	clearChildren("Sun");
	if(val != 0){
		orbit = document.createElement("span");
		pl = document.createElement("span");
		pd1 = document.createElement("span");
		pd2 = document.createElement("span");
		marker = document.createElement("span");
		marker.setAttribute("id", "marker");
		orbit.setAttribute("id","orbit");
		pl.setAttribute("id","light");
		pl.style.left = "160px";
		pl.style.top = "0px";
		pd1.setAttribute("id","dark1");
		pd2.setAttribute("id","dark2");

		s.appendChild(orbit);
		s.appendChild(pl);
		pl.appendChild(pd1);
		pl.appendChild(pd2);
		pl.appendChild(marker);

	}
}

function mouseDownItem(e){
	window.addEventListener("mousemove", mousemoveItem);
    window.addEventListener("mouseup", mouseupItem);
	el = e.target;
	rectSun = document.getElementById("Sun").getBoundingClientRect();
	rectLight = document.getElementById("light").getBoundingClientRect();
	sunCenterX = rectSun.left + 25;
	sunCenterY = rectSun.top + 25;
	prevX = e.clientX;
	prevY = e.clientY;
	//angle1 = getCalc(rectSun.left, rectSun.top,e.clientX,e.clientY);
	//angle2 = getCalc(rectSun.left, rectSun.top, rectLight.left, rectLight.top);
	//offsetAngle = getCalc(rect1.left+25, rect1.top+25,prevX,prevY) - getCalc(rect1.left+25, rect1.top+25, rect2.left+15, rect2.top+15);
	angle1 = getCalc(sunCenterX, sunCenterY, e.clientX, e.clientY);
	angle2 = getCalc(sunCenterX, sunCenterY, prevX, prevY);
	prevAngle = angle2;
	offsetAngle = angle1 - angle2;
	
	//offsetX = e.clientX - rectLight.left;
	//offsetY = e.clientY - rectLight.top;
	offsetX = e.clientX - prevX;
	offsetY = e.clientY - prevY;
	document.getElementById("data").innerHTML = "Offset Angle: " + offsetAngle;
	//alert("angle1: " + angle1 + " angle2: " + angle2 + " offsetAngle: " + offsetAngle);

}

function mousemoveItem(e){

	if (el.id.search("orbit")!= -1){
		//document.getElementById("data").innerHTML = "orbit";
		el.parentElement.style.left = el.parentElement.offsetLeft - (prevX - e.clientX) + "px";
		el.parentElement.style.top = el.parentElement.offsetTop  - (prevY - e.clientY) + "px";

		prevX = e.clientX;
		prevY = e.clientY;
	}
	else if(el.id.search("Sun")!= -1){
		//document.getElementById("data").innerHTML = "sun";
		el.style.left =  el.offsetLeft - (prevX - e.clientX)+ "px";
		el.style.top = el.offsetTop - (prevY - e.clientY) + "px";
		prevX = e.clientX;
		prevY = e.clientY;
	}
	else if(el.id.search("marker") != -1){
		Sun1 = document.getElementById("Sun");
		planet = document.getElementById("light");
		var rect1 = planet.getBoundingClientRect();
		var rect2 = Sun1.getBoundingClientRect();
		radius = 24;
		width = 10;
		ax = rect1.left+radius/2; //planet
		ay = rect1.top+radius/2;
		bx = e.clientX;				//pointer
		by = e.clientY;
		cx = rect2.left + radius/2; //sun
		cy = rect2.top + radius/2;
		calc = getCalc(ax, ay, bx, by);
		calc2 = getCalc(cx, cy, ax, ay);
		calc = calc - calc2;
		let deltaX = (radius)*Math.cos(calc)- 25;
		let deltaY = (radius)*Math.sin(calc);
		el.style.transform = "translate(" + deltaX + "px," + deltaY + "px)";
		el.style.transform += " rotate(" + calc + "rad)";
	}
	else{
		el = document.getElementById("light");
		rectPlanet = el.getBoundingClientRect();
		mouseX = e.clientX;		//used to get the current angle
		mouseY = e.clientY;
		planetX = rectPlanet.left + 15;	//used to get the current position of planet
		planetY = rectPlanet.top + 15;

		/*el.style.left =  el.offsetLeft - (prevX - e.clientX)+ "px"; /// simple moving
		el.style.top = el.offsetTop - (prevY - e.clientY) + "px";
		prevX = e.clientX;
		prevY = e.clientY;*/

		radius = document.getElementById("orbit").getBoundingClientRect().width/2;
		currAngle = getCalc(sunCenterX, sunCenterY, mouseX, mouseY);
		let currX = (radius)*Math.cos(currAngle);
		let currY = (radius)*Math.sin(currAngle);
		let currOffsetX = 10*Math.cos(currAngle);
		let currOffsetY = 10*Math.sin(currAngle);

		//style the planet
		el.style.left = currX + currOffsetX + 15 + "px";
		el.style.top = currY + currOffsetY + 15 + "px";
		el.style.left = currX + 14 + "px";
		el.style.top = currY + 14 + "px";
		el.style.transform = " rotate(" + currAngle + "rad)";

		//centers1 = document.createElement("span");
		//centers1.setAttribute("id", "centerOfPlanet");
		//centers1.setAttribute("class", "center");
		//centers1.style.left = currX + 20 + "px";
		//centers1.style.top = currY + 20 + "px";
		//centers1.position = "absolute";
		//document.getElementById("Sun").appendChild(centers1);

		prevX = e.clientX;
		prevY = e.clientY;

		deltaAngle = Math.abs(prevAngle - currAngle);
		if(deltaAngle > Math.PI)
			deltaAngle = 2*Math.PI - deltaAngle;
		totalAngle = totalAngle + deltaAngle;
		prevAngle = currAngle;
				
		if(Math.abs(totalAngle) > 2*Math.PI){
			orbits++;
			document.getElementById("Orbits").innerHTML = orbits;
			totalAngle = 0;
		}
		
		angle1 = getCalc(sunCenterX, sunCenterY, e.clientX, e.clientY);
		angle2 = getCalc(sunCenterY, sunCenterY, prevX, prevY);
		//document.getElementById("data").innerHTML = " currAngle: " + currAngle + " angle1: " + angle1 + " angle2: "  + angle2;
		calcOrbit(currAngle, radius);
		
	}
}

function mouseupItem(){
	window.removeEventListener("mousemove", mousemoveItem);
	window.removeEventListener("mouseup", mouseupItem);
	moveCount = 0;
}

function completeOrbit(){
	//alert(calc);
	
}

function calcOrbit(currAngle, radius){
	choice = parseInt(document.getElementById("planetList").value);
	switch(choice){
		case 1:

			break;
		case 2:
			//no rotation
			marker = document.getElementById("marker");
			currAngle = -currAngle;
			let deltaX = (30)*Math.cos(currAngle);
			let deltaY = (30)*Math.sin(currAngle) + 10;
			//marker.style.transform = "translate(" + deltaX + "px," + deltaY + "px)";
			marker.style.left = deltaX+"px";
			marker.style.top = deltaY+"px";
			marker.style.transform = " rotate(" + currAngle + "rad)";
			document.getElementById("solarDays").innerHTML = "0";
			document.getElementById("siderealDays").innerHTML = document.getElementById("Orbits").innerHTML;
			break;
		case 3:
			//tidally locked
			document.getElementById("siderealDays").innerHTML = "0";
			document.getElementById("solarDays").innerHTML = document.getElementById("Orbits").innerHTML;

			break;
		case 4:
			//mercury
			marker = document.getElementById("marker");
			numOrbits = parseInt(document.getElementById("Orbits").innerHTML);
			currAngle = (orbits*2*Math.PI+(2*Math.PI - currAngle)) * 2  / 3;
			//currAngle = currAngle*3/2;

			deltaMarkerX =    - (8 - 8 * Math.cos(-2*Math.PI + currAngle)) +  15 + 15*Math.cos(-2* Math.PI + currAngle);
			deltaMarkerY = 10 + 20 * Math.sin(-currAngle);// - (4 - 4*Math(cos(currAngle)));

			marker.style.left = deltaMarkerX+"px";
			marker.style.top = deltaMarkerY+"px";
			currAngle = -currAngle;
			marker.style.transform = " rotate(" + currAngle + "rad)";
			document.getElementById("solarDays").innerHTML = "0";
			document.getElementById("siderealDays").innerHTML = document.getElementById("Orbits").innerHTML;
			document.getElementById("data").innerHTML = "currAngle: " + currAngle + " sdeltaMarkerX: " + deltaMarkerX + " deltaMarkerY: " + deltaMarkerY;
			break;
		case 5:

		break;
	}
}

function autoMove(){
	selectPlanet = document.getElementById("planetList");
	val = selectPlanet.selectedIndex;
	switch(val){
		case 0:
			//alert("Remove Planet");
			break;
		case 1:
			//alert("No Ratation");
			break;
		case 2:
			//alert("Tidally Locked");
			break;
		case 3:
			//alert("Mercury");
			break;
		case 4:
			//alert("Venus");
			break;
		default:
			//alert("default");
	}
		//but=document.getElementById("start");
	//if(but.innerHTML == "Start"){
	//	but.innerHTML = "Stop";
	//	autoMove();
	//}
	//else{
	//	but.innerHTML = "Start";
	//}
}

function resetCounters(){

	solarCount = 0;
	siderealCount = 0;
	orbits = 0;
	earthYears = 0;
	totalAngle = 0;
	prevAngle = currAngle = 0;
	el=document.getElementById("light");
	el.style.transform = "translate(" + "0" + "px," + "0" + "px)";
	el.style.transform += " rotate(" + "0" + "deg)";
	//alert(currAngle + " " + prevAngle);
	document.getElementById("solarDays").innerHTML = solarCount;
	document.getElementById("siderealDays").innerHTML = siderealCount;
	document.getElementById("Orbits").innerHTML = orbits;
	document.getElementById("earthYears").innerHTML = earthYears;
}


/****************************************************************/
/***********General Function or those used in multiple places*/
/****************************************************************/

function changeAtomButtons(stat){
	var but = document.getElementById("ElectronPair");
	but.disabled = stat;
	but = document.getElementById("DeleteEl");
	but.disabled = stat;
	if(document.getElementById("Change")){
		but = document.getElementById("Change");
		but.disabled = stat;
	}
}

function clickChild(event){
	event.cancelBubble = true;
}

function getCalc(ax, ay, bx, by){
// modified so we only get positive angles starting at the positive x-axis
	angle = Math.atan((by - ay)/(bx - ax));
	if (bx < ax){
		//angle = angle + 180;
		angle = angle + Math.PI;
	}
	else if (by < ay){
		//angle = angle + 360;
		angle = angle + 2*Math.PI;
	}
	//document.getElementById("data").innerHTML = "Angle ax: " + ax + " ay: " + ay + " bx: " + bx + " by: " + by + " angle: " + angle + "<br/>";
	return angle;
}

function getLength(ax, ay, bx, by){
	length = Math.sqrt((ax - bx)*(ax - bx) + (ay - by)*(ay - by));
	//document.getElementById("data").innerHTML = "ax: " + ax + " ay: " + ay + " bx: " + bx + " by: " + by;
	return length;
}

function Help(){
	txt = "Create Atom: Click one of the element boxes.";
	txt += "\nMove Atom: Drag anywhere on the screen.";
	txt += "\nHighlight any element: Click and a gold border will appear.";
	txt += "\nCreat bond: Highlight first atom, then click the second atom.";
	txt += "\nDouble/Triple bonds: Click the bond. It will cycle throught single, double and triple bonds.";
	txt += "\nCreate Electrons: Highlight atom then click electrons button.";
	txt += "\nMove Electrons: Drag and they will rotate around atom.";
	txt += "\nSingle and Paired electrons: Click the electrons.";
	txt += "\nDelete any element: Highligh element, then click the Delete button.";
	txt += "\nRestart or Clear screen: Click the Clear/Restart button.";
	txt += "\nQuestions or suggestions: crigheimer@yahoo.com";
	alert(txt);
}

function listStyles(el){
	var styles = window.getComputedStyle(el);
	var styleList = "";
	for(var i = 0; i < 347; i = i + 1){
		styleList+=i + " " +styles[i]+"<br>";
	}
}


function resetAtoms(){
	isDragging = false;
	isResizing = false;
	isMoving = false;
	changeAtom = false;
	gotAtom = false;
	changeAtomButtons(true);
	//if(atom1 != null)
	//	atom1.setAttribute("class","nucleus " + atom1.dataset.type);
	//if(atom2 != null)
	//	atom2.setAttribute("class", "nucleus " + atom2.dataset.type);
	deactivateEl();
	activeEl = null;
	atom1 = null;
	atom2 = null;
}

