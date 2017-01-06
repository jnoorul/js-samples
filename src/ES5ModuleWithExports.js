// Example 1

//Node will wrap the below code inside a function (Module Wrapper)
//and expose only exports object,
//so you are assigning all the functions to this object.
//Since it is wrapped in a function by node, PI is private variable.

/*const PI = Math.PI;

exports.area = function (r) {
    return PI * r * r;
};

exports.circumference = function (r) {
    return 2 * PI * r;
};*/

// Example 2

// the below code will not work, because you should not replace whole exports object.
// You can only add members to it

/*const PI = Math.PI;

exports = function(r){
    var returnObj = {};
    returnObj.area = function () {
        return PI * r * r;
    };
    returnObj.circumference = function () {
        return 2 * PI * r;
    };
    return returnObj;
};*/


//Example 3
// If you want the above behaviour, assign the function to module.exports
const PI = Math.PI;

module.exports = function(r){
    var returnObj = {};
    returnObj.area = function () {
        return PI * r * r;
    };
    returnObj.circumference = function () {
        return 2 * PI * r;
    };
    return returnObj;
};

