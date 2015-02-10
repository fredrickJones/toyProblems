//create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'}, 
    {name: 'Jerry Rice', team: '49ers'}, 
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];
    
//code here
var teams = function(arr, str) {
    var object = {};
    for(var i = 0; i < arr.length; i++) {
        if(!object.hasOwnProperty(arr[i][str])) {
            object[arr[i][str]] = [];
            object[arr[i][str]].push(arr[i]);
        } else {
            object[arr[i][str]].push(arr[i]);
        }
    }
    return object;
};
                
//should return:
{ 
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}