// Pseudo classical
// this is not the good way to inheritance.
// Children cannot auto inherit data from parent, or pass the data to parent.
// only common methods can be put in parent and utilized across all childrens.
// For better inheritance refer to Prototypical inheritance.

function Person(name) {
    this.name = name;
    this.info = function () {
        return this.name;
    }
}

function Employee(args) {
    this.name = args.name; // you cannot cal parent constructor and pass this info.
    this.salary = args.salary;
    this.empInfo = function () {
        return this.info() +":"+this.salary; //am resuing parent method here.
    }
}

Employee.prototype = new Person(); //note i cannot pass name here, because i am not creating employee object yet.

var noorul = new Employee({"name": "noorul", "salary": "1000"}); //employee object is created which inherits a method from parent info().

console.log(noorul.info());
console.log(noorul.empInfo());