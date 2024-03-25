//write a program to convert multi-dimentional array to 1-d array with unique values

let arr = [[10, 20, 30], [40, 50, 60], 70, 80, 90];

function flatArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatArr(arr));

// let arr = [[10, 20, 30], [40, 50, 60], 70, 80, 90];

// function flatten(arr) {
//   let flatArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatArr = flatArr.concat(flatten(arr[i]));
//     } else {
//       flatArr.push(arr[i]);
//     }
//   }
//   return flatArr;
// }

// console.log("Original Array: ", arr);
// const flattenedArr = flatten(arr);
// console.log("\nFlattened Array: ", flattenedArr);
