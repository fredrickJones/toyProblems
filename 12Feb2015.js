// make the following code work
var counter = getCounter();

counter(); //2
counter(); //4
counter(); //6
counter(); //8
counter(); //10

var getCounter = function() {
	var counter = 0;
	return function() {
		counter += 2;
		return counter;
	}
};


// this is an ify function
	// it will be invoked right away
var getCounter = (function() {
	var counter = 0;
	return function() {
		counter += 2;
		return counter;
	}
})();