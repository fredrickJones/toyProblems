'use strict';
//given an arbitrary input string, return the first non-duplicate character in the string. for example:
//firstNonRepeatedCharacter('ABA'); =>'B'
//firstNonRepeatedCharacter('AABCABD'); => 'C'

//rules
  //first non-duplicate character
  //random string
  //only peram is a string
//EPS
  //create an array
  //loop through array
  //find first character that is not duplicated
  //return that character
//TDD
  //
//steps
  //function
  //change string to arr
  //loop through arr
  //find char that is not duplicated
    //look through arr and see if first char is duplicated
    //if it is not then return char
    //if it is then go to the next item in arr


var nonDuplicate = function(str) {
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]){

		}
	}
};

var nonDuplicate = function(str) {
	var hash = {};
	var answer = '';

	for (var i = 0; i < str.length; i++) {
		if(!hash[str[i]]) {
			hash[str[i]] = 1;
		} else {
			hash[str[i]]++;
		}
	}
	for (var i = 0; i < str.length; i++) {
		if (hash[str[i]] === 1) {
			return str[i];
		}
	}
	return 'no single character';
};

nonDuplicate('AABCABD');









