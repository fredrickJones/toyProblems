var nums = ["hello", "javascript", "awesome"];

var finder = function(str, arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === str) {
			return true;
		};
	};
	return false;
};

finder("javascript", nums);
finder("lame", nums);