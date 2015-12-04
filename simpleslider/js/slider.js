var imgWidth = 900;
var active = 1;
var slider = document.getElementsByClassName("sliderLong")[0];
var sliderLong = slider.children[0];    
var slides = slider.children;
console.log(slides);
var i = 0; 
// console.log(slides.length);


function slide() {
    
        if(active == slides.length){
            i = 900*(active-1) * -1;
            var x = setInterval(function smoothSlide(){
            i += 30;
            sliderLong.style.marginLeft = i+'px';

            if(i >= 0){
                clearInterval(x);
            }
        },10);
            active = 1;
        }else{       
//            console.log(active);
            active = active == slides.length ? active = 1 : ++active;
            var ml = 900 * (active-1) *-1;
            i = ml+900;
            console.log(i);
            var x = setInterval(function smoothSlide(){
                i -= 10;
                sliderLong.style.marginLeft = i+'px';

                if(i <= ml){
                    clearInterval(x);
                }
            },10);
        }
}   
    
setInterval(slide, 2000);


