var imgWidth = 900;
var active = 1;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children[0]; 
var slides = slider.children;
var animator = new Animator(sliderLong);
//console.log("sliderLong :",sliderLong);

var bottomNavigator = document.getElementById("bottom-navigator");
var navigatorObj = new Navigator(bottomNavigator,imgWidth);
navigatorObj.generateNavigator(slides.length);
navigatorObj.mark(active);
var ml;

setInterval(slide, 4000);

function slide() {

	  active = active == slides.length ? active = 1 : ++active;
	  ml = imgWidth * (active-1) *-1;
      console.log("ml from slide",ml);
	  navigatorObj.mark(active);
      animator.animate("margin-left",ml,1000);
}   

function Next(){
    animator.stop();
    if(active == slides.length){
        active = 0;
    }
    navigatorObj.mark(active);
    slide();
}
    
function Previous() {
     animator.stop();
    if(active == 1){
        active = slides.length;
    }
    --active;
    ml = imgWidth * (active -1)* -1;
    navigatorObj.mark(active);
    animator.animate("margin-left", ml, 1000);
}    

function moveImage(linkIndex) {
    animator.stop();
    active = parseInt(linkIndex) + 1;
    ml = imgWidth * (active-1) * -1;
    navigatorObj.mark(active);
    animator.animate("margin-left",ml,1000);
}