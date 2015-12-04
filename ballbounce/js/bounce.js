function addBall(ballNumber){
    
    var box = document.getElementsByClassName("main-div")[0];
    
    for(var i = 0; i < ballNumber; i++){
        var bounceBall = document.createElement("div");
        bounceBall.classList.add("ball");
        box.appendChild(bounceBall);
    }
}

addBall(2);

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

//initializing position of ball with random value
//var xdir = Math.random() * (maxX - minX) + minX;
//var ydir = Math.random() * (maxY - minY) + minY;

var xdir = [];
var ydir = [];
var balls = document.getElementsByClassName("ball");

for(var i=0; i<balls.length; i++){
    xdir.push(Math.random() * (maxX - minX) + minX);
//    xdir.push(50);
    ydir.push(Math.random() * (maxX - minX) + minX);
//    ydir.push(10);
}

console.log("xdir[] = ", xdir);
console.log("ydir[] = ", ydir);

var ballSpeedX = [];
var ballSpeedY = [];

//initial speed of ball
for(var i=0; i<balls.length; i++){
    ballSpeedX.push(6);
    ballSpeedY.push(8);
}
    
function moveBall() {
    
    for(var i=0; i<balls.length; i++){
        xdir[i] += ballSpeedX[i];
        ydir[i] += ballSpeedY[i];

        balls[i].style.left = xdir[i] + 'px';
        balls[i].style.top = ydir[i] + 'px';

        if(xdir[i] < minX){
            ballSpeedX[i] = -ballSpeedX[i];
            xdir[i] = minX;
        }else if( xdir[i] > maxX){
            ballSpeedX[i] = -ballSpeedX[i];
            xdir[i] = maxX;
        }

        if(ydir[i] < minY){
            ballSpeedY[i] = -ballSpeedY[i];
            ydir[i] = minY;
        }else if( ydir[i] > maxY){
            ballSpeedY[i] = -ballSpeedY[i];
            ydir[i] = maxY;
        }
    }
    
    if(xdir[0] < xdir[1] + 54 && xdir[0] + 54 > xdir[1] && ydir[0] < ydir[1] + 54 && ydir[0] + 54 > ydir[1]){
//    if(ydir[0] < ydir[1] + 54 && ydir[0] + 54 > ydir[1]){
        console.log("colision detected");
        ballSpeedX[0] = -ballSpeedX[0];
        ballSpeedX[1] = -ballSpeedX[1];
        ballSpeedY[0] = -ballSpeedY[0];
        ballSpeedY[1] = -ballSpeedY[1];
//        clearInterval(x);
    }
    
//    for(var i=0; i<balls.length; i++){
//        console.log("xdir[",i,"]",xdir[i]);
//        console.log("ydir[",i,"]",ydir[i]);
//    }
//    
//    var xdirDiff = Math.abs(xdir[1]-xdir[0]);
//    var ydirDiff = Math.abs(ydir[1]-ydir[0]);
//    
//    if(Math.abs(xdirDiff - ballWidth) < 2 && Math.abs(ydirDiff - ballHeight) < 2) {
//        ballSpeedX[0] = -ballSpeedX[0];
//        ballSpeedX[1] = -ballSpeedX[1];
//        ballSpeedY[0] = -ballSpeedY[0];
//        ballSpeedY[1] = -ballSpeedY[1];
    
//    console.log("xdirDiff ", xdirDiff - ballWidth);
//        console.log("ydirDiff ", ydirDiff - ballHeight);
//        
//    }
    
//    console.log("xdirDiff - ballWidth ", xdirDiff - ballWidth);
//    console.log("ydirDiff - ballWidth ", ydirDiff - ballHeight);
}

x = setInterval(moveBall,30);
