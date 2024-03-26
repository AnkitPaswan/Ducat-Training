//write the custom function for arr.includes()

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes(arr1, 2));
