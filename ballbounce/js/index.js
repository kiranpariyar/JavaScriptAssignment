function addBall(ballNumber){
    
    var box = document.getElementsByClassName("main-div")[0];
    
    for(var i = 0; i < ballNumber; i++){
        var bounceBall = document.createElement("div");
        bounceBall.classList.add("ball");
        box.appendChild(bounceBall);
    }
}

addBall(5);

//ball size
var ballHeight = 54;
var ballWidth = 54;
//box dimensions

var minX = 0;
var minY = 0;
var boxWidth = 1000;
var boxHeight = 500;
var maxX = minX + boxWidth - ballWidth;
var maxY = minY + boxHeight - ballHeight;

var balls = document.getElementsByClassName("ball");
console.log("balls",balls);

var circleArray = [];

for(var i=0; i<balls.length; i++){
    var circleObject = new Circle(balls[i]);
    circleArray.push(circleObject);
}


for(var i=0; i<circleArray.length; i++){
    circleArray[i].moveCircle(Math.random() * (maxX - minX) + minX,Math.random() * (maxX - minX) + minX,1,1);
}


function Circle(element){
    this.el = element;
    
    this.moveCircle = function(xdir,ydir,SpeedX,SpeedY){
        
        var animator = new Animator(element);
        console.log("crircle element",element);
//        var style = window.getComputedStyle(element);
//		var initial = style.getPropertyValue("");
//		initial = parseInt(initial);
        
        setInterval(function(){
//            console.log("this.xdir:",that.xdir);
//            console.log("this.ydir",that.ydir);

            xdir += SpeedX;
            ydir += SpeedY;
//            console.log("xdir",i,xdir)
            
            animator.animate("left",xdir,50);
            animator.animate("top",ydir,50);

            if(xdir <= minX){
                SpeedX = -SpeedX;
                xdir = minX;
            }else if(xdir >= maxX){
                SpeedX = -SpeedX;
                xdir = maxX;
            }
            
            if(ydir <= minY){
                SpeedY = -SpeedY;
                ydir = minY;
            }else if( ydir >= maxY){
                SpeedY = -SpeedY;
                ydir = maxY;
            }
            
        },60);
    }
}


