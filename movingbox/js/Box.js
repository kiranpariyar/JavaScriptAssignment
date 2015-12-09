var minX = 0;
var minY = 0;
var parentWidth = 1000;
var parentHeight = 500;
var boxWidth = 52;
var boxHeight= 52;
var maxX = minX + parentWidth - boxWidth ;
var maxY = minY + parentHeight - boxHeight;
var noOfCollision = 0; 

function Box(element) {
    this.element = element;
    this.xdir = Math.random() * (maxX - minX) + minX;
    this.ydir = Math.random() * (maxX - minX) + minX;
//    this.xdir = 50;
//    this.ydir = 10;
    this.SpeedX = 1;
    this.SpeedY = 1;
    
    this.moveBox = function(){
        
        this.xdir += this.SpeedX;
        this.ydir += this.SpeedY;

//        console.log("this.element :",this.element);
        
        this.element.style['left'] = this.xdir + 'px';
        this.element.style['top'] = this.ydir + 'px';

        if(this.xdir <= minX){
            this.SpeedX = -this.SpeedX;
            this.xdir = minX;
        }else if(this.xdir >= maxX){
            this.SpeedX = -this.SpeedX;
            this.xdir = maxX;
        }

        if(this.ydir <= minY){
            this.SpeedY = -this.SpeedY;
            this.ydir = minY;
        }else if( this.ydir >= maxY){
            this.SpeedY = -this.SpeedY;
            this.ydir = maxY;
        }    
    }
    
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	}

	this.hitTest = function(box) {
        var x = this.xdir;
        var y = this.ydir;
        var w = boxWidth;
        var h = boxHeight;
        var x1 = box.xdir;
        var y1 = box.ydir;

    if(this.xdir<box.xdir+boxWidth && this.xdir+boxWidth>box.xdir && this.ydir<box.ydir+boxHeight && this.ydir+boxHeight> box.ydir){
//            noOfCollision++;
//            console.log("collision detected",noOfCollision);
            
            
            if((x+w)>=x1 && x<x1 && (y+h) > y1 && (y1+h)>=y){
                console.log("zone 1 -right");
                this.SpeedX = - this.SpeedX;
                box.SpeedX = - box.SpeedX;
                console.log("this.SpeedX",this.SpeedX);
                console.log("box.SpeedX",box.SpeedX);
            }else if((y+h)>=y1 && y<y1 && (x+w)>=x1 && x<(x1+w)){
                console.log("zone 2 - bottom");
                this.xdir += 2;
                this.SpeedY = - this.SpeedY;
                box.SpeedY = - box.SpeedY;
//                clearInterval(set);
            }else if((y1+h)>=y && y1<y && (x+w)>=x1 && x<(x1+w)){
                console.log("zone 2 - top");
                this.xdir += 2;
                this.SpeedY = - this.SpeedY;
                box.SpeedY = - box.SpeedY;
            }else if((x1+w)>=x && x>x1 && y<(y1 + h) && (h + y)>y1){
                console.log("zone 2 - left");
                console.log("box.ydir+boxHeight",box.ydir,boxHeight);
                console.log("this.ydir",this.ydir);
                this.SpeedX = - this.SpeedX;
                box.SpeedX = - box.SpeedX;
//                clearInterval(set);
            }
            
            
//            clearInterval(set);
                        
//            var xdiff = box.xdir - this.xdir;
//            var ydiff = box.ydir - this.ydir;
//            var angle = Math.atan2(ydiff,xdiff) * 180/ Math.PI;
//            console.log("angle ",angle);
//            if (angle < 0) angle += 360;
//            console.log("new angle ",angle);
//            
//            if ((angle >= 0 && angle < 45) || (angle > 315 && angle < 360)) {
//                console.log("zone 1 - right");
//            } else if (angle >= 45 && angle < 135) { 
//                console.log("zone 2 - bottom");
//                this.SpeedY = this.SpeedY;
//                box.SpeedY = -box.SpeedX;
//            } else if (angle >= 135 && angle < 225) { 
//                console.log("zone 3 - left");
//                this.SpeedX = this.SpeedX;
//                box.SpeedX = - box.SpeedX;
//            } else {
//                console.log("zone 4 - top");
//                this.SpeedY = - this.SpeedY;
//                box.SpeedY = box.SpeedY;
//            }   
            
    }else{
        console.log("no collision");
    }
	}
}