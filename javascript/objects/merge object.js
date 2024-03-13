//13/03/24

//merge object

let object = {
  firstName: "John",
  lastName: "Smith",
  age: 20,
};
let object2 = {
  hobbies: ["cricket"],
};
let object3 = Object.assign(object, object2);

console.log(object);
console.log(object2);
console.log(object3);

console.log(object === object3);
