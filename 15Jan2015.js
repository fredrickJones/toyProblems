replaceOdd([1,2,3,4,5,6,7,8,9,10]);
//write a function named 'replaceOdd' that takes
//in an array of numbers, and changes all of the
//odd numbers to the letter 'o'.

var replaceOdd = function(arr) {

	for (var i = 0; i < arr.length; i++) {
		if(arr[i] % 2 !== 0) {
			arr[i] = 'o';
		};
	};
	return arr;
};