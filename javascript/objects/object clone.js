//13/03/24

//copy object - 1st method
// let object = {
//   firstName: "John",
//   lastName: "Smith",
// };

// let object2 = {};

// for (const key in object) {
//   object2[key] = object[key];
// }

// console.log(object);
// console.log(object2);

//copy object - second method

let object = {
  firstName: "John",
  lastName: "Smith",
};

let object2 = Object.assign(
  {},
  object,
  { hobbies: ["cricket"] },
  { firstName: "Ankit" }
);

console.log(object);
console.log(object2);
console.log(object === object2);
