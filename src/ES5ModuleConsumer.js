var circle = require('./ES5ModuleWithExports');

//Example 1
// console.log(`Area of circle with radius 4 is ${circle.area(4)}`);


//Example 2 & 3
console.log(`Area of circle with radius 4 is ${circle(4).area()}`);