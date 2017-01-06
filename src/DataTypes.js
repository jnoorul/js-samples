var helper = require('./helper');

(function undefinedAndNull(){

    //JS is dynamic data type. i.e you dont need declare data type of the variable.
    // It is automatically derived based on the value.
    //In the below example, same x is changing it is data types dynamically.
    helper.printHeader("Dynamic Data Types");
    var x =10;
    console.log(x);
    x= "hello";
    console.log(x);
    x= true;
    console.log(x);


    helper.printHeader("Undefined Example");
    // default initialisation for any js variable is undefined unlike null in java;
    var varDeclaredButUndefined;
    console.log(varDeclaredButUndefined);

    helper.printHeader("Undeclared will throw error");
    // if any variable is not declared and you are trying to access it, you will get an error.
    //console.log(varNotDeclared);


    helper.printHeader("Undeclared inside object will not throw error");
    //if you are accessing undeclared variable inside an object, instead of throwing error,
    //it will return undefined
    var obj = {};
    console.log(obj.undeclaredAndUndefinedVariable);
    console.log(this.varNotDeclared);
    console.log(global.varNotDeclared); //this or global both refers to the same.

    helper.printHeader("Null is one of the valid value, Boolean can have 3");
    // Unlike other languages null is not a default value. It is one of the valid value in JS.
    // For example, boolean can have 3 states, true or false or null.
    var flag = false;
    console.log(flag);
    flag=true;
    console.log(flag);
    flag = null;
    console.log(flag);
})();

