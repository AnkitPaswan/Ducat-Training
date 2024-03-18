//15/03/24

//optinal chaining
let employee = {
  name: {
    firstName: "Ankit",
    lastName: "Paswan",
  },

  emai: "email@com",
  hobbies: ["cricket", "coding"],

  getDetails: function () {
    // it points the current objects
    console.log("firstname:", this.name.firstName);
    console.log("lastname:", this.name.lasttName);
    console.log("email:", this.email);
    console.log("hobbies:", this.hobbies);
  },
};

//object
console.log(employee.name?.firstName);

//array
console.log(employee.hobbies?.[0]);

//function
employee.getDetails?.();
