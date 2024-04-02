//02/04/24

//syntax
// class ClassName{
//     //properties variable type

//     //methods
// }

class Employee {
  // properties
  firstName = "Ankit";

  //methods
  getFirstName = () => {
    console.log("get first name");
    console.log(this.firstName);
  };
}

let employee = new Employee();
