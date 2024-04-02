//02/04/24

// let object = {
//   firstName: "John",
//   getFirstName: function () {
//     return this.firstName;
//   },
//   get firstName() {
//     return this.firstName;
//   },
// };
// // . operator
// console.log(object.firstName);

// // using []
// console.log(object["firstName"]);

// // method
// console.log(object.getFirstName());

// //getter
// console.log(object.getFirstName);

//setter

let object = {
  firstName: "John",
  setFirstName: function (value) {
    this.firstName = value;
  },
  set setFirstName(value) {
    return this.firstName;
  },
};

//.
object.firstName = "Ankit";
console.log(object);
//[]
object["firstName"] = "Ankit";
console.log(object);

//method
object.setFirstName("Ankit");
console.log(object);

//setter
object.setFirstName = "Ankit";
console.log(object);
