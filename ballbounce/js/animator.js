function Animator(element) {
	this.el = element;
	var that = this;

	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		initial = parseInt(initial);
        
		var step = (value - initial) / (duration / 50);
		var counter = 0;
		var intervalId = setInterval(function() {
			counter++;
			// var current = step * counter;			
			element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty)) + step + 'px';
			// console.log("current :",current);
			// console.log(style.getPropertyValue(cssProperty));
			if (counter >= duration/50)
				clearInterval(intervalId);
		}, 50);
        console.log("animated element:",element);
        console.log("final value:",value);
        console.log("initial value:",initial);
	}

	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	this.stop = function() {
        clearInterval(intervalId);
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {

	}

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}
}