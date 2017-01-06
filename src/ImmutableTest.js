var Immutable = require('immutable');

//Map
var obj1 = Immutable.Map({"a":1,"b":2});
var obj2 = obj1.set('a',3);
var obj3 = obj1.set('b',4);

/*console.log(obj1.get('a'));
console.log(obj2.get('a'));
console.log(obj1.get('b'));
console.log(obj3.get('b'));*/


//List

var arr1 = Immutable.List.of(1,2,3,4,5);
console.log(arr1.size);

var arr2 = arr1.push(6);
console.log(arr1.size);
console.log(arr2.size);

var arr3 = arr2.shift();
console.log(arr3);

