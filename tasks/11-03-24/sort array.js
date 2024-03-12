// Write a program to sort an array without using sort function

//using sort function
// let arr = [10, 20, 5, 8, 15];
// let sorted = arr.sort((a, b) => a - b);
// console.log(sorted);

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let len = arr.length;

for (let i = 0; i < len; i++) {
  for (let j = 0; j < len; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Sorted Array is:", arr);
