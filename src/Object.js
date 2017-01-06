/*
JavaScript objects with property begins with number cannot be accessed like
obj.1 or obj.1stprop. it should be accessed like obj[1] or obj[1stprop]
*/

/*var obj = {"1":"one","1st":"first"};

// console.log(obj.1);
// console.log(obj.1st);

console.log(obj["1"]);*/


//Objects.assign

var objA = {
    "a":"A",
    "info":function(){
        return this.a;
    }
};
var objB = {
    "b":"B",
    "info":function(){
        return this.b;
    }
};

var copyOfObj = Object.assign({},objA,objB);

console.log(copyOfObj);

//Object.create. creates new object D, as a child of C and copies speciifed properties
// in this case it is args.

var objC ={
    "c" : "C"
};

var args = {"d":{value:"D"}};
var objD = Object.create(objC,args);
console.log(objD.d);
console.log(objD.c);
