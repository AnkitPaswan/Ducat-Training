//write the custom func for arr.find()

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function myFind(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log("Index of 50:", myFind(arr, 50));
