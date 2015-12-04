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

//initial speed of ball
var ballSpeedX = 6;
var ballSpeedY = 8;

//initializing position of ball with random value
var xdir = Math.random() * (maxX - minX) + minX;
var ydir = Math.random() * (maxY - minY) + minY;

function moveBall() {
    
    var ball = document.getElementsByClassName("ball")[0];
    
    xdir += ballSpeedX;
    ydir += ballSpeedY;
    
    ball.style.left = xdir + 'px';
    ball.style.top = ydir + 'px';
    
    if(xdir <= minX){
        ballSpeedX = -ballSpeedX;
        xdir = minX;
    }else if( xdir > maxX){
        ballSpeedX = -ballSpeedX;
        xdir = maxX;
    }
    
    if(ydir <= minY){
        ballSpeedY = -ballSpeedY;
        ydir = minY;
    }else if( ydir > maxY){
        ballSpeedY = -ballSpeedY;
        ydir = maxY;
    }
}

x = setInterval(moveBall,50);
