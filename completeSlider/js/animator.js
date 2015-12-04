function Animator(element) {
	this.el = element;
	var that = this;
	var intervalId;
	var finalValue;
	var property;

	this.animate = function(cssProperty, value, duration) {
		var style = window.getComputedStyle(element);
		var initial = style.getPropertyValue(cssProperty);
		// console.log("initial :",initial);
		initial = parseInt(initial);
		finalValue = value;
		property = cssProperty;


		var step = (value - initial) / (duration / 50);
		var counter = 0;
		intervalId = setInterval(function() {
			counter++;
			var current = step * counter;			
			element.style[cssProperty] = parseInt(style.getPropertyValue(cssProperty)) + step + 'px';
			console.log("current :",current);
			// console.log(style.getPropertyValue(cssProperty));
			if (counter >= duration/50)
				clearInterval(intervalId);
		}, 50);
	}

	this.animateBatch = function(properties, duration) {
		for (var x in properties) {
			console.log(x, properties[x]);
		}
	}

	// should stop the animation in current position
	this.stop = function() {
		clearInterval(intervalId);
		console.log(intervalId);
	}

	// should stop the animation and element's properties should be at "end" value
	this.finish = function() {

	}

	this.hitTest = function(singleElement) {

	}

	this.hitTestBatch = function(elements) {

	}
}