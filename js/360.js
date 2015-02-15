/*
*/
function Move360(div,imgFolder,imgCount,style){
	var my = this;
	this.div = div;
	this.imgFolder = imgFolder;
	this.imgCount = imgCount;
	this.img = [];
	this.imgDiv = null;
	this.index = 0;
	this.style = style;
	this.x; this.dx; this.timer;
	this.isNoMove = false;
	this.timer = null;
	this.init = function(){
		for(var i=0; i< my.imgCount; i++){
			my.img[i] = new Image();
			my.img[i].src = my.imgFolder+(i)+'.png';
		}
		my.imgDiv = document.createElement('img');
		my.imgDiv.className = my.style;
		my.imgDiv.src = my.img[0].src;
		my.imgDiv.useMap = '#1';
		my.div.appendChild(my.imgDiv);
		my.imgDiv.addEventListener('touchstart', my.TouchStart, false);
		my.imgDiv.addEventListener('touchmove', my.TouchMove, false);
		my.imgDiv.addEventListener('touchend', my.TouchEnd, false);
		my.imgDiv.addEventListener('mousedown', my.TouchStart, false);
		my.imgDiv.addEventListener('mousemove', my.TouchMove, false);
		my.imgDiv.addEventListener('mouseup', my.TouchEnd, false);
		_head.addEventListener("touchstart",my.Reset1,false);
		_body.addEventListener("touchstart",my.Reset2,false);
		_foot.addEventListener("touchstart",my.Reset3,false);
		//my.AutoRotate();
	};
	
	this.AutoRotate = function(){
		if(my.index>=my.imgCount-1) my.index = 0;
		else my.index = my.index;
		my.imgDiv.src = my.img[my.index].src;
		my.imgDiv.useMap = '#'+(my.index + 1);
		//my.timer = setTimeout(my.AutoRotate,80,my);
	};
	
	this.Reset1 = function(){
		my.isnoMove = true;
		if(my.index>2){
			my.index = my.index - 3;
			my.imgDiv.src = my.img[my.index].src;
			my.timer = setTimeout(my.Reset1,10,my);
		}
		else{
			my.index = 0;
			clearTimeout(my.timer);
			my.imgDiv.src = my.img[my.index].src;
			MoveHeadDiv();
		}
	};
	
	this.Reset2 = function(){
		my.isnoMove = true;
		if(my.index>2){
			my.index = my.index - 3;
			my.imgDiv.src = my.img[my.index].src;
			my.timer = setTimeout(my.Reset2,10,my);
		}
		else{
			my.index = 0;
			clearTimeout(my.timer);
			my.imgDiv.src = my.img[my.index].src;
			MoveBodyDiv();
		}
	};
	
	this.Reset3 = function(){
		my.isnoMove = true;
		if(my.index>2){
			my.index = my.index - 3;
			my.imgDiv.src = my.img[my.index].src;
			my.timer = setTimeout(my.Reset3,10,my);
		}
		else{
			my.index = 0;
			clearTimeout(my.timer);
			my.imgDiv.src = my.img[my.index].src;
			MoveFootDiv();
		}
	}

	this.TouchStart = function(e){
		e.preventDefault();
		//clearTimeout(my.timer);
		if(e.clientX)
		{
			my.x = e.clientX;
		}
		else my.x = e.changedTouches[0].clientX;
		//my.x = e.clientX;
	
	};
	this.TouchMove = function(e){
		e.preventDefault();
		CloseInfo();
		if(my.isNoMove == true) return;
		if(isMove == true) return;
		if(e.clientX)
		{
			var x = e.clientX;
		}
		else var x = e.changedTouches[0].clientX;
		//var x = e.clientX;
		my.dx = x - my.x;	
		var m = parseInt(Math.abs(my.dx)/6);
		// Move left
		if(my.dx > 0){
			my.index = my.index - m;
			if(my.index<0) my.index = 0;
		}
		if(my.dx < 0){
			my.index = my.index + m;
			if(my.index>my.imgCount) my.index = my.imgCount-1;
		} 
		my.x = x;
		//if(my.index=-1) return;			
		my.imgDiv.src = my.img[my.index].src;
		my.imgDiv.useMap = '#'+(my.index + 1);
	};
	
	this.TouchEnd = function(){
	};
	
	this.init();
	 
}



