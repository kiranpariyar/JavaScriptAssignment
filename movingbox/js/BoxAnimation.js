function BoxAnimation() {
	var boxes = [];
	var noOfBoxes = 50;
	var parent = document.getElementsByTagName("body")[0];

	this.init = function() {
		for (var i=0; i<noOfBoxes; i++) {
			createBox();
		}
	}

	var createBox = function() {
		var box = new Box();
		box.addClass("box");
		box.appendTo(parent);
	}
}