//20/03/24

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.toString());

//push
// let arr1 = [10, 20, 30, 40];
// let result = arr1.push(100, 200, 300);
// console.log(arr1, result);

//pop
// let arr2 = [10, 20, 30, 40];
// let result = arr2.pop();
// console.log({ arr2 }, { result });

//unshift
// let arr3 = [10, 20, 30, 40];
// let result = arr3.unshift(1000, 2000);
// console.log(arr3, result);

//shift
// let arr4 = [10, 20, 30, 40];
// let result = arr4.shift();
// console.log(arr4, result);

//splice

//delete
// let arr5 = [10, 20, 30, 40];
// let result = arr5.splice(2, 1);
// let result = arr5.splice(-3, 1);
// result = arr5.splice(arr5.length - 1, 1); //pop
// result = arr5.splice(0, 1); //shift
// console.log(arr5, result);

//update

// let arr6 = [10, 20, 30, 40, 50];
// let result = arr6.splice(2, 2, 300, 400);
// console.log(arr6, result);

//add
// let arr7 = [10, 20, 30, 40];
// let result = arr7.splice(2, 0, 300, 400);
// let result = arr7.splice(array.length, 300, 400,500,600); //push
// let result = arr7.splice(0, 0, 300, 400, 500, 600); //unshift
// console.log(arr7, result);

let arr7 = ["apple", "banana", "mango"];
let fruits = ["orange", "pineapple"];
console.log([...arr7, ...fruits]);
