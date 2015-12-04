function slider(){
    
    if(active == slides.length){
        initialMargin = imgWidth * (active-1) * -1;
        finalMargin = 0;
        marginRate = 10;
        slideImage(initialMargin,finalMargin,marginRate);
        active = 1;
    }else{
        ++active;
        initialMargin = 0;
        finalMargin = imgWidth*(active-1)*-1;
        marginRate = -10;
        slideImage(initialMargin,finalMargin,marginRate);
    }
    
}

function slideImage (initialMargin,finalMargin,marginRate){
    var i = initialMargin;
    var x = setInterval(function smoothSlide(){
                i += marginRate;
                sliderLong.style.marginLeft = i+'px';

                if(i = finalMargin){
                    clearInterval(x);
                }
            },10);
        }
    
}
