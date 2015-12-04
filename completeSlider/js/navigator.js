function Navigator(element,imgWidth) {
	this.el = element;
    this.imgWth = imgWidth;
    var counter = 0;

	this.generateNavigator = function(imageNumber) {

		var ul = document.createElement("ul");

		for (var i=0; i<imageNumber; i++){
			var li = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href","#");
            a.setAttribute("onclick","moveImage(\'" + i + "\')");
            li.appendChild(a);
			ul.appendChild(li);
		}

		element.appendChild(ul);
        var styleDiv = window.getComputedStyle(element);
		var bottomDivWidth = parseInt(styleDiv.getPropertyValue("width"));
        
        console.log("imgWidth :", imgWidth);
        console.log("bottomDivWidth :", bottomDivWidth);
        
        var left = (imgWidth - bottomDivWidth)/2;
        console.log("left",left);
        element.style.left = left + 'px';
	}

	this.mark = function(active) {
		counter++;
		var ul = document.getElementsByTagName("ul")[0];
        var li;
		for (var i = 0; i < ul.children.length; i++) {
            li = ul.children[i];
            li.children[0].style.backgroundColor = 'transparent';
		}

        console.log("active from navigator :",counter,active);
		li = ul.children[active-1];
		li.children[0].style.backgroundColor = "red";
	}
}