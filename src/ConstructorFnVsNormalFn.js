// if you call a function with new, JS will create MyObj object with inheritance
//chain as below.
// MyObj --> MyObj.prototype --> Object.prototype
//MyObj.prototype will have constructor property which will point the MyObj function.
//It implies that MyObj.prototype is parent for MyObj function.
//newly created object is passed as "this" to below "ConstructorFunction" function.
//if no return statement then 'this' will be returned.
// if we have return statement with obj, that object will be returned.

(function(){
    function ConstructorFunction(){
        this.name = "MyFirstConstFunction";
        return this;
    }

    var globalObject = this;

    var constObj = new ConstructorFunction();
    console.log(constObj.name);
    console.log(constObj !== globalObject);

    //calling without new will refer to global object.
    var normalObj = ConstructorFunction();
    console.log(normalObj !== globalObject);

})();
