function Box() {
    var boxWidth = 33;
    var boxHeight= 97;
    var minX = 0;
    var maxX = 614;
    this.move = maxX/4;
    this.x = maxX/2 - boxWidth/2;
    this.y = 10;
    this.element = document.createElement("div");
    
    this.setPosition =  function(left,bottom){
        this.x = left;
        this.y = bottom;
        this.element.style['left'] = this.x + 'px';
        this.element.style['bottom'] = this.y + 'px';
    }
    
    this.moveDown = function(){
        var style = window.getComputedStyle(this.element);
        this.y -= 1;
        this.element.style['bottom'] = this.y+'px';
    }
    
    this.getPosition = function(){
        return {xPos:this.x,yPos:this.y};
    }
    
    this.getBoxHeight = function() {
        return boxHeight;
    }
    
    this.moveRightLeft = function(keyValue) {

        var style = window.getComputedStyle(this.element);
        if(keyValue == 37){
            this.x -= move;
            if(this.x <= minX){
                this.x = minX;
                this.element.style['left'] = this.x + 'px'; 
                clearInterval(x);
            }else{
                this.element.style['left'] = this.x + 'px'; 
            }
        }else if(keyValue == 39){
            this.x += this.move;
            
            if(this.x + move >= maxX){
                this.x = maxX-50;
                this.element.style['left'] = this.x + 'px'; 
                clearInterval(x);
            }
               else{
                this.element.style['left'] = this.x + 'px'; 
            }
        }  
    }
    
    this.hitTest = function(box) {
        var x1 = this.x; 
        var y1 = this.y;
        var x2 = box.x;
        var y2 = box.y;
        var w = boxWidth;
        var h = boxHeight;
                
        if (x1 <= x2 + w && x1 + w >= x2 && y1<=(y2 + h) && (h + y1)>=y2) {
        	console.log('collision detected');
            gameOver();
        }
        
	}
    
	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}
}