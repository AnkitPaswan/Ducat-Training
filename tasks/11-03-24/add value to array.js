//writa a program to add the value in an array without using pop function.

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log("sum of array is:", sum);
