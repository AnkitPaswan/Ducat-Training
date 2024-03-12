//writa a program to merge an array without using merge function.

//using concat function
// let arr1 = [10, 20, 5, 8, 15];
// let arr2 = [100, 80, 23, 11, 2];
// let arr3 = arr1.concat(arr2);
// console.log("merged array is:", arr3);

//add to array without using in-built function
let arr1 = [10, 20, 5, 8, 15];
let arr2 = [100, 80, 23, 11, 2];

for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}
console.log("Added array is :", arr1);
