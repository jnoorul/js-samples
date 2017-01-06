// in the below example you may think that if i need to create
//multiple csemployees, do i need to repeat the below code?
// Not neccessary, just clone one existing employee and change the properties
//like name, salary and dept. that is it... all the existing connection
//between csemployee -->employee-->person are maintained automatically.


/*
(function(){

    var person = {
         "name":"noorul",
        "info":function(){
            return this.name;
        }
    };

    var employee = Object.create(person);
    employee.salary = 1000;
    employee.empInfo = function () {
      return "name:"+this.name+" salary:"+this.salary;
    };


    var csEmployee = Object.create(employee);
    csEmployee.dept = "APAC GM IT";
    csEmployee.csEmpInfo = function (){
      return "name:"+this.name + " salary:"+this.salary+ " dept:"+this.dept;
    };

    console.log(csEmployee.info());
    console.log(csEmployee.empInfo());
    console.log(csEmployee.csEmpInfo());

})();*/


//Prototypical Inheritance using functions and private variables


function person(args){
    //private variable, children cannot access
    var name = args.name;

    var that = {};

    that.personInfo = function(){
        return "name: "+name;
    };

    return that;
}


function employee(args){
    //private variable children cannot access
    var salary = args.salary;

    var that = person(args);

    that.empInfo = function(){
        return that.personInfo()+" salary: "+salary;
    };

    return that;
}

function csEmployee(args){
    var dept = args.dept;
    var that = employee(args);

    that.csEmpInfo = function(){
      return that.empInfo()+" dept:"+dept;
    };

    return that;
}

console.log(csEmployee({"name":"noorul","salary":1000,"dept":"IT"}).personInfo());
console.log(csEmployee({"name":"noorul","salary":1000,"dept":"IT"}).empInfo());
console.log(csEmployee({"name":"noorul","salary":1000,"dept":"IT"}).csEmpInfo());
