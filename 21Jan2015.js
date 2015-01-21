'use strict';
var simpleSymbols = function(str) {
	re1 = /=[a-z-A]/;
	re2 = /[a-zA-Z]=/;
	re3 = /=^[a-zA-Z]/;
	re4 = /=[a-zA-Z]$/;
	if(str.contains('+n+') ) {
		return true;
	} else {
		return false;
	}
};

var simpleSymbols = function(str) {
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	var hash = {};
	for (var i = 0; i < letters.length; i++) {
		hash[letters[i]] = true;
	}
	for (var i = 0; i < str.length; i++) {
		if(hash[str[i]] && (str[i - 1] !== '+' || str[i + 1] !== '+')) {
			return false;
		}
	}
	return true;
};

var simpleSymbols = function(str) {
	for (var i = 0; i < str.length; i++) {
		if(str.charAt(i) !== '+' && str.charAt(i) !== '=') {
			if(str.charAt(i - 1) !== '+' || str.charAt(i + 1) !== '+') {
				return false;
			}
		}
	}
	return true;
};