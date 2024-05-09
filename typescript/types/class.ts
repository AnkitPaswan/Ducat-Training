

//class in ts

// class Employee {
//     firstName : string = "Ankit";
//     lastName : string = "Paswan";
//     age:number =10;
// }

// let emp: Employee = new Employee;
// console.log(emp);


//constructor
// class Employee {
//     firstName : string;
//     lastName : string ;
//     age:number;

//     constructor(fname: string, lname: string, age: number){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.age = age;
//     }
// }

// let emp= new Employee("Ankit", "Paswan",10);
// console.log(emp);



//member visibility(public,orivate,protected,readOnly)
// class Employee {

//     //public properties
//     public firstName : string = "Ankit";
//     public lastName : string = "Paswan";

//     //readOnly properties we can make public and private as well
//     private readonly PI : number = 3.14

//     //private properties
//     private age:number = 10;

//     //public method
//    public getFullName():string{
//     console.log(this.getAge()); 
    
    
//         return this.firstName + ' ' + this.lastName + " " + this.age;
//     }

//     //private method
//     private getAge(): number{
//         return this.age;
//     }

// }
// let emp = new Employee;
// console.log(emp.firstName);
// console.log(emp.lastName);
// // console.log(emp.age);
// console.log(emp.getFullName());
// // console.log(emp.getAge());


//protected
// class Maruti{
//     protected companyName : string = "Maruti";

//     protected getCompanyName():string{

//         return this.companyName;
//     }
// }

// class Alto extends Maruti {
//     carName : string = "Alto";

//     getCarName() : string {
//         console.log(this.companyName);
        
//         console.log(this.getCompanyName());
//         return this.carName
        
//     }
// }

//setter/getter
// class Car{
//     private carName:string;

//     // setter
//     set setCarName(value: string){
//         this.carName;
//     }
// }

// let car = new Car;
// car.setCarName = "Maruti";
// console.log(car);

//Overriding Methods
// class Maruti{
//     public hasMusicSystem () : boolean {
//         return true;
//     }
// }
// class BaseModelAlto extends Maruti{
//     public hasMusicSystem () : boolean {
//         return true;
//     }
// }

// let bs = new BaseModelAlto();
// bs.hasMusicSystem();


//method overloading
// class Area {
//     //square

//     area(side: number){
//         return side * side
//     }

//     //rectangle
//     area(length:number,breadth:number){
//         return length * breadth
//     }

// }

//super

// class Car{
//     carName : string;
//     constructor(cname: string){
//         this.carName= cname;
//     }
// }

// class Maruti extends Car{
//     brand : string;

//     constructor(brand : string){
//         super("maruti")
//         this.brand = brand;
//     }
// }

// let maruti = new Maruti("alto")
// console.log(maruti);




// class Maruti{
//     public hasMusicSystem () : boolean {
//         console.log("Maruti hasMusicSystem called");
//         return true;
//     }
// }
// class BaseModelAlto extends Maruti{
//     public hasMusicSystem () : boolean {
//         super.hasMusicSystem();
//         console.log("baseModelAlto hasMusicSystem called");
        
//         return true;
//     }
// }

// let bs = new BaseModelAlto();
// console.log(bs.hasMusicSystem());


//static

// class Employee {
//     static counter : number = 0;

//     constructor(){
//         Employee.counter++;
    
//     }

//     static getCounter(): number{
//         //return Employee.counter
//         return this.counter;
//     }
// }

// let emp1 = new Employee ();
// let emp2 = new Employee ();
// let emp3 = new Employee ();
// console.log(emp1,emp2,emp3);
// // console.log(Employee.counter);
// console.log(Employee.getCounter());

