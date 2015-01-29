'use strict';
// find the only item that occurs an even number of times in an array. if there is more than one item that occures an even number of times, just return one of them. if there are no items that occur an even number of times return null.
var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
console.log(onlyEven); // 4

var evenOccurence = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		var occurs = 0;
		for (var j = 0; j < arr.length; j++) {
			if(arr[i] === arr[j]) {
				occurs++;
			}
		}
		if(occurs % 2 === 0){
			return arr[i];
		}
	}
};

// when you want to loop through an array and compair to itself this is the best way
// another way
function even(arr) {
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if(!track[arr[i]]) {
			track[arr[i]] = 0;
		}
		track[arr[i]] += 1;
	}
	// return track;
	for (var key in track) {
		if(!(track[key] % 2)) {
			return [key];
		}
	}
}

var deleter = function(arr) {
	var track = {};
	for (var i = 0; i < arr.length; i++) {
		if(track[arr[i]]) {
			arr.splice(i, 1);
		} else {
			track[arr[i]] = true;
		}
	}
};

