var firstNames = ['Tyler', 'Ean', 'Cahlan'];
var lastNames = ['McGinnis', 'Platter', 'Sharp'];
var names = [];
var combinator = function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		for (var j = 0; j < arr2.length; j++) {
			names = arr1[i] + " " + arr2[j];
		};
	};
};

combinator(firstNames, lastNames);

//what someone else did which is the correct way to do it;

var combinator = function(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
			names.push(arr1[i] + " " + arr2[i]);
	};
};