// create a function that can only be invoked once

var initialize = _.once(runFunc);
var runFunc = function() {
	alert('no more than once');
};


initialize(runFunc);


function once(){
	alert('run me once');
	once = alert('no more running');
};


once();
once();


var string = 'poopy pants';
var once = function(str) {
	var exicuted = false;
	return function() {
		if(!exicuted) {
			console.log(str);
			exicuted = true;
		}
	}
};

var once = function(num1, num2) {
	
}


var funcCount = function(fn, n) {
	var counter = 0;
	return function() {
		if(counter < n) {
			fn.apply(this, arguments);
			counter++;
		}
	}
};

