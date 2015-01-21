'use strict';
var senctence = 'here we are together';
var reverse = function(str) {
	var arr = str;
	var other = arr.length - 1;
	var newStr = '';
	for (var i = other; i >= 0; i--) {
		if(other !== 0) {
			newStr += arr[i];
		}
	}
	return newStr;
};

reverse(senctence);

var reverse = function(str) {
	var oldStr = str.split('');
	var newStr = [];
	for (var i = 0; i < oldStr.length; i++) {
		newStr.unshift(oldStr.join(''));
	}
	console.log(newStr.join(''));
};

function reverse (str) {
	sf
};