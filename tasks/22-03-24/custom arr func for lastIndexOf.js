//write the custom function for arr.lastInexOf()

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9, 10];

function lastIndexOf(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(arr1, 2));
