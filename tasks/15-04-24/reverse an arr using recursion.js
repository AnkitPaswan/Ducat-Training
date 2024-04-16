//write a program to reverse an arrays using recursion

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;

function reverseArray(arr, start, end) {
  if (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArray(arr, start + 1, end - 1);
  }
}

reverseArray(arr, 0, len - 1);
console.log(arr);
