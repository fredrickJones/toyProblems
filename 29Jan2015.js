// write a function that accepts a number, n, and returns the nth Fibonacci
// number. use a recursive soloution to this problem; if you finish with time
// left over, implement an iterative solution.

// nthFibonacci(2); => 2
// nthFibonacci(3); => 3
// nthFibonacci(4); => 5

var fibo = function(n) {
	var sum = 0;
	var num1 = 0;
	var num2 = 1;
	for (var i = 1; i < n; i++) {
		sum = num1 + num2;
		num1 = num2
		num2 = sum;
	}
	return sum;
};

var fibo2 = function(n) {
	if(n <= 2) {
        return 1;
	}
	return fibo2(n - 1) + fibo2(n - 2);
};