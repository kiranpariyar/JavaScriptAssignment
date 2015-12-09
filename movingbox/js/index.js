var mainDiv = document.getElementsByClassName("main-div")[0];
//console.log(mainDiv);
function createBox(boxNumber){
    
    for(var i = 0; i < boxNumber; i++){
        var boxDiv = document.createElement("div");
        boxDiv.setAttribute("class","box");
        mainDiv.appendChild(boxDiv);
    }
}

createBox(8);
//console.log(mainDiv.children[0]);
//console.log(mainDiv.children[1]);
//console.log("mainDiv length :",mainDiv.children.length);



//console.log("boxes:0",boxs[0]);
//console.log("boxes:1",boxs[1]);

//var box1 = new Box(mainDiv.children[0]);
//box1.addClass("green");
//var box2 = new Box(mainDiv.children[1]);
//
//var set = setInterval(function(){
//    box1.moveBox();
//    box2.moveBox();
//    box1.hitTest(box2);
//},10);

var boxs = [];

for(var i = 0; i < mainDiv.childElementCount; i++){
    boxs.push(new Box(mainDiv.children[i]));
}

var counter = 0;
var set = window.setInterval(function(){
    for(var i = 0; i < boxs.length; i++){
        boxs[i].moveBox();
        
        for(var j = 0; j != i && j < boxs.length;j++){
////          console.log("collision should not be detected with same box");
            boxs[i].hitTest(boxs[j]);
            counter++;
        }
    }
    
},10);

//console.log("no. of hit test",counter);

