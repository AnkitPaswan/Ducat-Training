//20/03/24

//methods of daclare the array
// 1st
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// 2st
// let arr2 = new Array(10); its gives the array length
let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// 3rd
let arr3 = Array.of(10, 20, 30, 40, 50);
console.log(arr3);

// 4th
// let arr4 = Array.from("Ankit");
let arr4 = Array.from([10, 20, 30, 40]);
console.log(arr4);

//22/03/24

//array.slice

// let arr5 = [10, 20, 30, 40, 50];

// console.log(arr5.slice(0, 3));
// console.log(arr5.slice(2));
// console.log(arr5.slice(0, -1));
// console.log(arr5.slice(-1, -2)); //[]

//concat

// let arr6 = [10, 20, 30, 40, 50];
// let arr7 = [10, 20, 30, 40, 50];

// console.log(arr6.concat(arr7));

//Iterate: forEach
// let array = [10, 20, 30, 40, 50];

// array.forEach(function (value, index, array) {
//   console.log(value, index, array);
// });

//serching

// let array = [10, 20, 30, 40, 10, 50];

// console.log(array.indexOf(20,3));
// console.log(array.indexOf(5));
// console.log(array.lastIndexOf(10));

//includes
// let array = [10, 20, 30, 40, 10, 50];

// console.log(array.includes(10)); //true

//find

// let array = [10, 20, 30, 40, 10, 50];
// let result = array.find((value, index, array) => {
//   console.log(value, index, array);
//   if (value === 30) {
//     return value;
//   }
// });
// console.log(result);

//real time example
// let employee = [
//   {
//     id: 1,
//     name: "Ankit",
//   },
//   {
//     id: 2,
//     name: "Ankit",
//   },
//   {
//     id: 3,
//     name: "Ankit",
//   },
// ];
// let emp = employee.find((emp) => emp.name === "Ankit");
// console.log(emp);

//findIndex/findLastIndex
// let array = [10, 20, 30, 40, 10, 50];
// let result = array.findIndex((value, index, array) => {
//   console.log(value, index, array);
//   if (value === 30) {
//     return value;
//   }
// });
// console.log({ result });

//filter

// let array = [10, 20, 30, 40, 30, 10, 50];

// let result = array.filter((value, index, array) => {
//   console.log(value, index, array);
//   if (value === 30) {
//     return value;
//   }
// });
// console.log({ result });

//real time example
// let employee = [
//   {
//     id: 1,
//     name: "Ankit",
//     department: "IT",
//   },
//   {
//     id: 2,
//     name: "Satyam",
//     department: "TRAINER",
//   },
//   {
//     id: 3,
//     name: "Aman",
//     department: "TRAINER",
//   },
//   {
//     id: 4,
//     name: "Gulam",
//     department: "TRAINER",
//   },
// ];
// let emp = employee.filter((emp) => emp.department === "TRAINER");
// console.log(emp);

//Transform an array
//map
// let array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array);

// let result = array.map((value, index, array) => {
//   console.log(value, index, array);
//   return value * 2;
// });
// console.log({ result });

// array.map((item) => {
//   console.log(item);
// });

//split and join
// const array = [10, 20, 30, 40, 50];

// const result = array.join(" "); //it convt array into string
// console.log("New join  Array : ", result);
// console.log(result.split("|")); // split based on splitter string to array convert

//reduce/reduceRight
let array = [10, 20, 30, 40, 50];

let sum = array.reduce((preValue, currentValue) => {
  console.log(preValue, currentValue);
  return preValue + currentValue;
}, 0);
console.log({ sum });
// let sum = array.reduceRight((preValue, currentValue) => {
//   console.log(preValue, currentValue);
//   return preValue + currentValue;
// }, 0);
// console.log({ sum });
