// write a function called ABCheck that takes a string parameter and retuns the string true if the characters a & b are seperated by exactly 3 places anywhere in the string at least once (ie 'lane borrowed' would result in true becasue there are exactly three characters between a & b). otherwise return false.

// rules
  // its a function
  // pass in a string
  // exactly three characters seperating 'a' & 'b'
  // doesn't matter which character comes first


// steps
  // write function
  // loop through string
  // find either a or b
  // if exactly three characters seperating them
    // return true
  // else
    // return false

var ABCheck = function (str) {
	for(var i = 0; i < str.length; i++) {
		if(str[i] === 'a') {
			if(str[i + 4] === 'b' || str[i - 4] === 'b') {
				return true;
			}
		}
	}
	return false;
};


