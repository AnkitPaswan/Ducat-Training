// 27/02/24

const object = {
  //property(key) and literals(value)
  name: "ankit",
  age: 20,
  country: "India",
  "full name": "ankit paswan",
  //method
  getFullName: function () {
    console.log("getFullName called");
  },
};

console.log(object);
//methods of accessing the object value;

console.log(object, typeof object);

//accessing using dot operator (.)

console.log(object.name); //1st methods
console.log(object["country"]); //2nd methods

console.log(object["name"]);

object["getFullName"]();
console.log(object["full name"]);
