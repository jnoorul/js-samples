//Reference website - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this

//"this" is automatically injected in to all functions.
//"this is not injected to object fields, it will be empty object.

/*var myObject = {
    "propertyThis": this,
    "functionThis": function () {
        return this
    }
};

console.log(myObject.propertyThis);
console.log(myObject === myObject.functionThis());*/


// For function which is outside of object, 'this' will refer to global object.
// even when you pass call back functions, 'this' will refer to global object.
//because call back functions are not part of object. they are outside.

// Without strict it will refer to global object.

/*function thisKeyword1() {
 console.log(this);
 var that = this;
 that.name = "not global";
 function f3() {
 console.log(this.name);
 }
 f3();
 }

 thisKeyword1();*/

//Use strict
/*function thisKeyword() {
 "use strict";
 console.log(this);
 function f3() {
 console.log(this);
 }

 f3();
 }

 thisKeyword();*/

//using call you can pass this variable.

/*function callAndApply(){
 console.log(this.name);
 function f1(){
 console.log(this.name);
 }

 function f2(){
 console.log(this.name);
 }

 f1.call({"name":"f1"});
 f2.call({"name":"f2"});
 }

 callAndApply.call({"name":"parent"});*/

//If you pass number or string to call it will be converted in to object.

/*function callAndApply(){
 console.log(this);
 function f1(){
 console.log(this);
 }

 function f2(){
 console.log(this);
 }

 f1.call("f1");
 f2.call("f2");
 }

 callAndApply.call(1);*/

//using bind you can permanantly set this variable.
/* function testFunction(){
 return this.a;
 }

 var testBindFunction = testFunction.bind({"a":"value using bind"});

 var inputObject = {"a":"original","fnWithoutBind":testFunction,"functionWithBind":testBindFunction};
 console.log(inputObject.fnWithoutBind());
 console.log(inputObject.functionWithBind());*/


/*As a DOM event handler

When a function is used as an event handler, its this is set to the element the event fired from (some browsers do not follow this convention for listeners added dynamically with methods other than addEventListener).

// When called as a listener, turns the related element blue
function bluify(e){
    // Always true
    console.log(this === e.currentTarget);
    // true when currentTarget and target are the same object
    console.log(this === e.target);
    this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
    elements[i].addEventListener('click', bluify, false);
}
In an in–line event handler

When code is called from an in–line on-event handler, its this is set to the DOM element on which the listener is placed:

    <button onclick="alert(this.tagName.toLowerCase());">
    Show this
</button>
The above alert shows button. Note however that only the outer code has its this set this way:

    <button onclick="alert((function(){return this})());">
    Show inner this
</button>
In this case, the inner function's this isn't set so it returns the global/window object (i.e. the default object in non–strict mode where this isn't set by the call).*/

