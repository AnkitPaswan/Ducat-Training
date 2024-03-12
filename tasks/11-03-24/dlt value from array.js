//write a program to delete a value from array with using buildin function.

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
//first method
// delete arr[1];

//second method
arr.splice(0, 2);
console.log(arr);

//third method
arr.shift();
console.log(arr);
