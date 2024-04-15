//15/04/2024
//Spread operator:- it is used for mainly copying array, it is introduced in ES6;

//Array
// let array = [10, 20, 30, 40, 50, 60];

// // console.log(...array);

// let array2 = [...array, 70, 80, 90];
// console.log(array2);
// console.log(array === array2);

//Object

let Object = {
  firstName: "John",
  lastName: "Doe",
  age: 21,
};

let Object2 = {
  ...Object,
  hobbies: ["Cricket", "Football"],
};

console.log(Object);
console.log(Object2);
console.log(Object === Object2);
