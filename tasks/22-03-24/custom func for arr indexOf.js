//write the custom function for arr.indexOf()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf(arr, 2));
