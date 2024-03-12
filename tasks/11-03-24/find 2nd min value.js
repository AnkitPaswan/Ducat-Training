//write a program to get the second minimum value in an array.

// let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let arr = [10, 20, 30, 40, 50];
let min = arr[0];
let secondMin = arr[1];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    secondMin = min;
    min = arr[i];
  } else if (arr[i] < secondMin) {
    secondMin = arr[i];
  }
}
console.log("2nd min value is:", secondMin);
