// JavaScript Document
var proDiv = null;
var headDiv = null;
var bodyDiv = null;
var footDiv = null;
var proDiv = null;
var bodyLine, headLine1, headLine2, footLine1, footLine2;
var _body, _head, _foot;
var isMove = false;
var isBodyDiv = false;
var isHeadDiv = false;
var isFootDiv = false;

function MoveBodyDiv(){
	if(isMove == true) return;
	CloseInfo();
	isMove = true;
	bodyDiv.style.display = "block";
	bodyLine.style.display = "block";
	proDiv.style.opacity = 0;
	setTimeout(function(){
		bodyLine.style.width = "85px";
		proDiv.style.display = "none";
		setTimeout(function(){
			bodyDiv.style.opacity = 1;
			isMove = false;
			isBodyDiv = true;
		},500);
	},10);
}

function CloseBodyDiv(){
	if(isBodyDiv == false) return;
	bodyDiv.style.display = "none";
	bodyLine.style.display = "none";
	bodyDiv.style.opacity = 0;
	bodyLine.style.width = "0px";
	isBodyDiv = false;
}

function MoveHeadDiv(){
	if(isMove == true) return;
	CloseInfo();
	isMove = true;
	headDiv.style.display = "block";
	headLine1.style.display = "block";
	headLine2.style.display = "block";
	proDiv.style.opacity = 0;
	setTimeout(function(){
		headLine1.style.width = "564px";
		proDiv.style.display = "none";
		setTimeout(function(){
			headLine2.style.height = "46px";
			setTimeout(function(){
				headDiv.style.opacity = 1;
				isMove = false;
				isHeadDiv = true;
			},500);
		},500);
	},10);	
}

function CloseHeadDiv(){
	if(isHeadDiv == false) return;
	headDiv.style.display = "none";
	headLine1.style.display = "none";
	headLine2.style.display = "none";
	headDiv.style.opacity = 0;
	headLine1.style.width = "0px";
	headLine2.style.height = "0px";
	isHeadDiv = false;
}

function MoveFootDiv(){
	if(isMove == true) return;
	CloseInfo();
	isMove = true;
	footDiv.style.display = "block";
	footLine1.style.display = "block";
	footLine2.style.display = "block";
	proDiv.style.opacity = 0;
	setTimeout(function(){
		footLine1.style.width = "440px";
		proDiv.style.display = "none";
		setTimeout(function(){
			footLine2.style.height = "91px";
			setTimeout(function(){
				footDiv.style.opacity = 1;
				isMove = false;
				isFootDiv = true;
			},500);
		},500);
	},10);	
}

function CloseFootDiv(){
	if(isFootDiv == false) return;
	footDiv.style.display = "none";
	footLine1.style.display = "none";
	footLine2.style.display = "none";
	footDiv.style.opacity = 0;
	footLine1.style.width = "0px";
	footLine2.style.height = "0px";
	isFootDiv = false;
}

function CloseInfo(){
	proDiv.style.display = "block";
	if(isBodyDiv) CloseBodyDiv();
	else if(isHeadDiv) CloseHeadDiv();
	else if(isFootDiv) CloseFootDiv();
	setTimeout(function(){
		proDiv.style.opacity = 1;
	},20);
}



window.onload = function(){
	document.body.addEventListener('touchmove', function(e){e.preventDefault();},false);
	bodyDiv = document.getElementById("bodyDiv");
	headDiv = document.getElementById("headDiv");
	footDiv = document.getElementById("footDiv");
	proDiv = document.getElementById("profileDiv");
	_head = document.getElementById("head");
	_body = document.getElementById("body");
	_foot = document.getElementById("foot");
	headLine1 = document.getElementById("headLine1");
	headLine2 = document.getElementById("headLine2");
	footLine1 = document.getElementById("footLine1");
	footLine2 = document.getElementById("footLine2");
	bodyLine = document.getElementById("bodyLine");
	var div = document.body;
	var style = 'imgDiv';
	var imgFolder = 'img/';
	var imgCount = 29;
	var rotate = new Move360(div,imgFolder,imgCount,style);
	_head.addEventListener("click",MoveHeadDiv,false);
	_body.addEventListener("click",MoveBodyDiv,false);
	_foot.addEventListener("click",MoveFootDiv,false);
} 