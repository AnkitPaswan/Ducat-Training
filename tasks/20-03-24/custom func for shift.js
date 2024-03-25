//write the custom function for shift() function

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log("Original array: ", arr);

function myShift(arr) {
  arr = arr.slice(1, arr.length);
  return arr;
}

console.log("Array after removing first element: ", myShift(arr));
