var mainDiv = document.getElementsByClassName("road-container")[0]; 
var road = document.getElementsByClassName("road")[0];

var boxes = [];
var move = 153;
var boxSide = 0;

var box = new Box();
box.addClass("box");
box.addClass("green");
box.appendTo(mainDiv);
box.setPosition(300,10);

var increment =2;
var bottom = 0;
var boxInterval = 1000;
var score = 0;

var x = setInterval(function() {
    bottom -= increment;        
    road.style.marginBottom = bottom + 'px';
    
    if(Math.floor(Math.abs(bottom) % boxInterval) == 0){
        generateBox();
    }
    
    document.onkeydown = function(){
        box.moveRightLeft(window.event.keyCode);
    }
    
    for(var boxIndex in boxes){
        boxes[boxIndex].moveDown();
        box.hitTest(boxes[boxIndex]);
    }
    ++score;
    calculateScore();
    
    if(Math.abs(score)%1000 == 0){
        increment++;   
    }
    
    removeArrayObjects();
    
},10);   

var count=0;
function generateBox(){
    var b = new Box();
    b.addClass("box");
    b.appendTo(mainDiv);
    count++;
    var boxSide = Math.floor(Math.random()*2)-1;
    if(boxSide == 0){
        b.setPosition(2*move,600);
//        boxSide = 1;
        console.log("box :",count);
    }else if(boxSide == -1){
        b.setPosition(move,600);
//        boxSide = 0;
        console.log("box :",count);
    }else if(boxSide == 1){
        b.setPosition(3*move,600);
//        boxSide = -1;
        console.log("box :",count);
    }
    boxes.push(b);
}


function calculateScore(){
    var scorePlace = document.getElementsByTagName("span")[0];
    scorePlace.innerHTML = score;
}

function removeArrayObjects(){
    
    var position;
    for(var boxIndex in boxes){
        position = boxes[boxIndex].getPosition();
        if(position.yPos+boxes[boxIndex].getBoxHeight() < 0){
            boxes[boxIndex].element.remove();
            boxes.splice(boxIndex,1);
            
        }
    }
}


function gameOver(){
//    console.log("Hello Kiran");
    clearInterval(x);
                        
}