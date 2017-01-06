//in Arrow method, this will be inherited from parent.
// you can think of arrow fn as inline function, not actually real functions in javascript.

(function() {
    myname = "ameen";
    var globalObj = this;
    var arrowFn = (() => this);
    console.log(arrowFn() === globalObj);
    console.log(globalObj.myname);
})();


//in Arrow method, this will be inherited from parent.
// If parent is an object, it will refer to object.
// I have written nested function because only function will have "this" injected.
//object will not have 'this' injected.

/*var objWithArrowFn = {
    "name": "this is obj",
    "foo": function () {
        return () => this;
    }
};

console.log(objWithArrowFn.foo()() === objWithArrowFn);*/


//Call, Apply and Bind does not work with arrow functions.
//Arrow function retains 'this' value from original place where it is created.
//simply reassigning this arrow function to another method inside an object does not
//change it is 'this' variable.

(function(){
    var globalThis = this;
    var arrowFn = ( () => this);
    // var arrowFn = function(){return this};
    console.log(arrowFn() === globalThis);

    var obj = {
        "arrowFnInsideObj" : function(){return arrowFn},
        "arrowFnUsingBind" : function(){return arrowFn.bind(this)},
        "arrowFnUsingCall" : function(thisObj) {return arrowFn.call(thisObj)}
    };

    console.log(obj.arrowFnInsideObj()() === globalThis);
    console.log(obj.arrowFnUsingBind()() === globalThis);
    console.log(obj.arrowFnUsingCall(obj) === globalThis);

})();

//converting above arrow function to normal function to show the difference.

(function(){
    var globalThis = this;
    var arrowFn = function(){return this};
    console.log(arrowFn() === globalThis);

    var obj = {
        "arrowFnInsideObj" : arrowFn, //arrowFn is moved inside obj.
        "arrowFnUsingBind" : function(){return arrowFn.bind(this)},
        "arrowFnUsingCall" : function(thisObj) {return arrowFn.call(thisObj)}
    };

    console.log(obj.arrowFnInsideObj() === obj); //arrow fn is moved inside obj
    console.log(obj.arrowFnUsingBind()() === obj); // due to bind
    console.log(obj.arrowFnUsingCall(obj) === obj); // due to call

})();