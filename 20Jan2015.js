var f = [];
var factorial = function(n) {
	if (n === 0 || n === 1)
		return 1;
	if (f[n] > 0)
		return f[n];
	return f[n] = factorial(n - 1) * n;
};

factorial(5);

var factr = function(n) {
	
}