class Person {
    constructor(name){
        this.name = name;
    }
    info(){
        return this.name;
    }
}

class Employee extends Person {
    constructor(name,salary){
        super(name);
        this.salary = salary;
    }
    info(){
        return super.info()+":"+this.salary;
    }

}

class CsEmployee extends Employee{
    constructor(name,salary,dept){
        super(name,salary);
        this.dept = dept;
    }
    info(){
        return super.info()+":"+this.dept;
    }
}

var noorul = new CsEmployee("noorul","1000","IT");
console.log(noorul.info());

//A class body can only contain methods, but not data properties.
// Prototypes having data properties is generally considered an anti-pattern,
// so this just enforces a best practice.
//the following code will throw error

/*
class Person {
    var name = "noorul";
    info(){
        return this.name;
    }
}*/
