//01/04/2024

//property flags and descriptors

// let object = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 26,
// };

// let descriptors = Object.getOwnPropertyDescriptors(object);

// let descriptor = Object.getOwnPropertyDescriptor(object, "firstName");

// console.log(descriptors);
// console.log(descriptor);

// ------------------------------------------------------------

//writable
// const object = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 26,
// };

// Object.defineProperty(object, "firstName", {
//   writable: false,
// });

// object.firstName = "Ankit";
// console.log(object);

// --------------------------------------------

//configurable
// const object = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 26,
// };

// Object.defineProperty(object, "firstName", {
//   configurable: false,
// });

// delete object.firstName;
// console.log(object);

//enumerable
const object = {
  firstName: "John",
  lastName: "Smith",
  age: 26,
};

Object.defineProperty(object, "firstName", {
  enumerable: false,
});

for (const key in object) {
  console.log(key, object[key]);
}
