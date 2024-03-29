//27/03/24

//object destructuring

//in object destructuring based on key

// let object = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 26,
// };

// let { firstname, lastname, age, hobbies = ["default values"] } = object;
// console.log(firstname, lastname, age, hobbies);

//output = john smith 10 undefined

// rest operator:- rest operator always used in last of parameters

// let object = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 26,
// };

// let { firstname, ...obj } = object;
// console.log(firstname, obj);

// let object = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 26,
// };

// let {
//   name: { firstname, lastname },
// } = object;
// console.log(firstname, lastname);

let object = {
  firstname: "John",
  lastname: "Smith",
  age: 26,
};

let {
  age: a,
  name: { firstname: fname },
} = object;
console.log(a, fname);
