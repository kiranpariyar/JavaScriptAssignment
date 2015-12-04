var minX = 0;
var minY = 0;
var parentWidth = 1000;
var parentHeight = 500;
var boxWidth = 55;
var boxHeight= 55;
var maxX = minX + parentWidth - boxWidth ;
var maxY = minY + parentHeight - boxHeight;
var noOfCollision = 0; 

function Box(element) {
    this.element = element;
    this.xdir = Math.random() * (maxX - minX) + minX;
    this.ydir = Math.random() * (maxX - minX) + minX;
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
        
//        console.log("this.element",this.xdir);
//        console.log("box",box.xdir);
        if(this.xdir < box.xdir + boxWidth && this.xdir + boxWidth > box.xdir
           && this.ydir < box.ydir + boxHeight && this.ydir + boxHeight > box.ydir){
            noOfCollision++;
            console.log("collision detected",noOfCollision);
            clearInterval(set);
        }
	}
}