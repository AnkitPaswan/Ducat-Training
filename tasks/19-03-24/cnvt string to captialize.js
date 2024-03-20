//write a program to convert string into capitalize form

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("Capitalized: " + capitalize("ankit"));

//write a program to convert string into lowercase form

function lowerCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log("Lower Case: " + lowerCase("Ankit"));
