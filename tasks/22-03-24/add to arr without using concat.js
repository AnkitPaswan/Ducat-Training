// write the function to concat two arrays without concat function

let arr1 = [10, 20, 5, 8, 15];
let arr2 = [100, 80, 23, 11, 2];

function mergeArray(arr1, arr2) {
  let arr3 = [];

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    arr3.push(arr2[j]);
  }
  return arr3;
}

console.log(mergeArray(arr1, arr2));
