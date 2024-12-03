function clearChildren(set){
	el = document.getElementById(set);
	while (el.firstElementChild != null)
		el.removeChild(el.firstElementChild);

}

function clearFunctionButtons(){
	document.getElementById("Change").style.visibility = "hidden";
}


function makeAtomButton(el){
	but = document.createElement("button");
	switch(el){
		case '1':but.setAttribute("onclick","CreateAtom('Hydrogen','H')"); but.innerHTML = "Hydrogen"; break;
		case '2':but.setAttribute("onclick","CreateAtom('Helium','He')"); but.innerHTML = "Helium"; break;
		case '3':but.setAttribute("onclick","CreateAtom('Lithium','Li')"); but.innerHTML = "Lithium"; break;
		case '4':but.setAttribute("onclick","CreateAtom('Beryllium','Be')"); but.innerHTML = "Beryllium"; break;
		case '6':but.setAttribute("onclick","CreateAtom('Carbon','C')"); but.innerHTML = "Carbon"; break;
		case '8':but.setAttribute("onclick","CreateAtom('Oxygen','O')"); but.innerHTML = "Oxygen"; break;
	}	

	document.getElementById("buttonAtom").appendChild(but);

}