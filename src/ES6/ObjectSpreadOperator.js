//spread operator flatten out the properties.
//in the below example, employee and new employee objects both refers to same employee.
//if the properties are object, it does not change reference.

var obj1 = {"name":"noorul","sal":"1000"};
var obj2 = {"name":"ameen","sal":"2000"};
var obj3 = {"name":"noorulameen","sal":"3000"};

var emps = {"1":obj1,"2":obj2,"3":obj3};

var newEmps = {...emps};

console.log(emps);
console.log(newEmps);

console.log(emps[1] === newEmps[1]);

obj1.name="nooru123";
console.log(obj1.name);
console.log(emps[1].name);
console.log(newEmps[1].name);