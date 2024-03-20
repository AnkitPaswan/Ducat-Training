//19/03/24

//tamplete literals it is the part of ES6
// let firstName = "Ankit";
// let lastName = "Paswan";

// let fullName = `${firstName} ${lastName}`;

// console.log(fullName);

//special characters

// let str = 'DUCAT"S';

// OR

// let str1 = "DUCAR'S";

// SEARCHING FOR A indexOf

let fullname = "ankit paswan";

// console.log(fullname.indexOf("n")); // 1
// console.log(fullname.indexOf("z")); //-1
// console.log(fullname.indexOf("kit")); //2
// console.log(fullname.indexOf("sin")); //-1

//lastIndexOf

// console.log(fullname.lastIndexOf("n"));
// console.log(fullname.lastIndexOf("asw"));
// console.log(fullname.lastIndexOf("twa"));

//includes() ;- its returns true or false

// console.log(fullname.includes( "a")); //true
// console.log(fullname.includes("z")); //false
// console.log(fullname.includes("kit")); //true
// console.log(fullname.includes("zit")); //false

//startsWith() ;- its returns true or false
// console.log(fullname.startsWith("a")); //true
// console.log(fullname.startsWith("z")); //false
// console.log(fullname.startsWith("ank")); //true
// console.log(fullname.startsWith("zit")); //false

//endssWith() ;- its returns true or false
// console.log(fullname.endsWith("n")); //true
// console.log(fullname.endsWith("z")); //false
// console.log(fullname.endsWith("wan")); //true
// console.log(fullname.endsWith("ran")); //false

// getting a substring
//slice ;- it supports negative values
console.log(fullname.slice(0, 6)); //ankit
// console.log(fullname.slice(2, 6)); //kit
// console.log(fullname.slice(6)); //paswan
// console.log(fullname.slice(0, -1)); //ankit paswa
// console.log(fullname.slice(-2, -1)); //a

// substring ;- it does not supports negative values

// console.log(fullname.substring(0, 6)); //ankit
// console.log(fullname.substring(2, 6)); //kit
// console.log(fullname.substring(6)); //paswan
// console.log(fullname.substring(0, -1)); //blank
// console.log(fullname.substring(-2, -1)); //blank

//substr ;-deprecated
// console.log(fullname.substr(0, 6)); //ankit
// console.log(fullname.substr(2, 6)); //kit pa
// console.log(fullname.substr(2)); //kit paswan
// console.log(fullname.substr(6)); //paswan
// console.log(fullname.substr(0, -1)); //blank
// console.log(fullname.substr(-2, -1)); //blank
// console.log(fullname.substr(-2)); //an

//comparing strings

// let str1 = "Hello";
// let str1 = "Hello world";
// let str2 = "Hello";

// console.log(str1 === str2);
// console.log(str1 > str2);
// console.log(str1 >= str2);
// console.log(str1 < str2);
// console.log(str1 <= str2);

//codePointAt get ASCII value

// let str = "DUCAT";

// for (const character of str) {
//     console.log(character, character.codePointAt());
// }

//fromCdePointAt get from ASCII value

// let str = "DUCAT";

// for (const character of str) {
//   console.log(character, character.codePointAt());
// }
