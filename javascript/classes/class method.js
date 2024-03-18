//15/03/24

//ES5

function Employee(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  // this.age = age;
  // this.getFullName = function () {
  //   console.log(this.firstName + " " + this.lastName);
  // };

  this.getFullName = () => {
    // it points the current objects
    console.log(this.firstName + " " + this.lastName);
  };
}

let object1 = new Employee("John", "Doe", 10);
let object2 = new Employee("Ankit", "Paswan", 20);
let object3 = new Employee("Aman", "Kumar", 25);

console.log(object1, object2, object3);
