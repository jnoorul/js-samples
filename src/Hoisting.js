// When JavaScript engine runs the programs, it moves all the variable declaration to the top.
// This is called Hoisting.
//So even if you declared variable in the last line of the function, but used it in the first line
//it will work.

var helper = require('./helper');

(function(){

    helper.printHeader("Variable Hoisting - Delayed declaration");
    x= 5;
    y= 10;
    console.log(x);
    console.log("this.x == "+ this.x + " //means x is local variable");

    console.log("this.y == " +this.y + " //since y is not declared, it created in global space");
    console.log((this.y === y)); //y does not belong to this function, it is global variable

    var x;
})();

//only Variable declarations are moved to top, NOT variable initialization

(function(){
    helper.printHeader("Only declarations are Hoisted Not initialization");
    console.log(x);
    console.log(y);

    var x = 1;
    var y = 2;
})();