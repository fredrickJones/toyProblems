// write a function that generates an array of integers of
// the Fibonacci sequence, up to i = 100. the Fibonacci sequence
// is defined by: fn = fn-1 + fn-2, which means to find fn you
// add the previous two numbers up. the first two numbers in 
// the sequence are 0 and 1. write a function to check if a given number
// is in the Fibonacci sequence, return 'yes' if it is,
// if not return the string 'no'

var fibonacci = function() {
	var i;
	var fib = [];

	fib[0] = 0;
	fib[1] = 1;
	for (i = 2; i < Things.length; i++) {
		Things[i]
	};
};



var fib = function(num) {
	var fibArr = [0, 1];
	for(var i =0; i < 99; i++) {
		fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
	};
	console.log(fibArr);
	if (fibArr.indexOf(num) === -1) {
		return false;
	};
	return true;
};