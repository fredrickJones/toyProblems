var flat = function(arr) {
	var newArr = [];
	newArr = newArr.concat.apply(newArr, arr);
	return newArr;
};


// cam's solution
var flatCam = function(arr) {
	var str = arr.join('[');
	var newArr = [];
	for (var i = 0; i < str.length; i++) {
		if(str[i] !== && str[i] !== ",") {
			newArry.push(+str[i]);
		}
	}
	return newArray;
}
flatCam();


// travi's solution
var flatTrav = function(arr) {
	var flatArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'Number') {
			arr = arr.concat(arr.splice(i, 1) [0]);
			i--;
		}
	}
};

// jacob's solution
var flatJacob = function(arr, newArr) {
	if(!newArr) {
		newArr[];
	}
	for (var i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			flatJacob(arr[i], newArr);
		} else {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};