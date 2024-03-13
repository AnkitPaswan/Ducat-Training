// 08/03/24

// for in:--Array
// let array = [10,20,30,40];
// for (const index in array) {
//         console.log(array[index]) ;
// }

// for in:--String
// let string = "DUCAT"
// for (const index in string) {
//         console.log(string[index]) ;
// }

// for in:--Object
let object = {
  fname: "Ankit",
  lname: "Paswan",
};

// for (const key in object) {  // .used for get static value
//         console.log(key, object.key) ;
// }
for (const key in object) {
  console.log(key, object[key]); // [] used to get dynamic value from object
}

// console.log(object.fname);

// let len = object.lname.length;
// console.log(len);
