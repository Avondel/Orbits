function showObjectAttributes(e){
	txt = "";
	txt += "atKey: " + e.altKey + "\n";
	txt += "button: " + e.button + "\n";
	txt += "buttons: " + e.buttons + "\n";
	txt += "clientX: " + e.clientX + "\n";
	txt += "clientY: " + e.clientY + "\n";
	txt += "ctrlKey: " + e.ctrlKey + "\n";
	txt += "getModifierState: " + e.getModifierState + "\n";
	txt += "initMouseEvent: " + e.initMouseEvent + "\n";
	txt += "layerX: " + e.layerX + "\n";
	txt += "layerY: " + e.layerY + "\n";
	txt += "metaKey: " + e.metaKey + "\n";
	txt += "movementX: " + e.movementX + "\n";
	txt += "offsetX: " + e.offsetX + "\n";
	txt += "offsetY: " + e.offsetY + "\n";
	txt += "pageX: " + e.pageX + "\n";
	txt += "pageY: " + e.pageY + "\n";
	txt += "relatedTarget: " + e.relatedTarget + "\n";
	txt += "screenX: " + e.screenX + "\n";
	txt += "screenY: " + e.screenY + "\n";
	txt += "shiftKey: " + e.shiftKey + "\n";
	txt += "x: " + e.x + "\n";
	txt += "y: " + e.y + "\n";
	txt += "Inherited properties\n";
	txt += "constructor: " + e.constructor + "\n";
	txt += "bubbles: " + e.bubbles + "\n";
	txt += "cancelBubble: " + e.cancelBubble + "\n";
	txt += "cancelable: " + e.cancelable + "\n";
	txt += "composed: " + e.composed + "\n";
	txt += "composedPath: " + e.composedPath + "\n";
	txt += "currentTarget: " + e.currentTarget + "\n";
	txt += "defaultPrevented: " + e.defaultPrevented + "\n";
	txt += "eventPhase: " + e.eventPhase + "\n";
	txt += "isTrusted: " + e.isTrusted + "\n";
	txt += "originalTarget: " + e.originalTarget + "\n";
	txt += "preventDefault: " + e.preventDefault + "\n";
	txt += "returnValue: " + e.returnValue + "\n";
	txt += "srcElement: " + e.srcElement + "\n";
	txt += "stopImmediatePropagation: " + e.stopImmediatePropagation + "\n";
	txt += "stopPropagation: " + e.stopPropagation + "\n";
	txt += "target: " + e.target + "\n";
	txt += "timeStamp: " + e.timeStamp + "\n";
	txt += "type: " + e.type + "\n";
	alert(txt);
}