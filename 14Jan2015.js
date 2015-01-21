//make a function invocation work
var sum = function(arr, callback) {
	var total = 0;
	for(var i in arr) { 
		total += arr[i]; };
	callback(total);
};

//best practice
var sum = function(arr, callback) {
	var total = 0;
	for(var i = 0; i < arr.length; i++) { 
		total += arr[i]; };
	callback(total);
};

sum([1, 4, 3, 5, 2, 8], function(total) {
	console.log('the total sum of the array is ' + total);
});

//total = 23


//review
