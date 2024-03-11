


// let number = prompt("enter a number to print the table:-");

//using for loop
// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + number * i);
//     document.write("<br>");
// }

//using while loop
// let i =1;
// while (i < 10) { 
//     console.log(number + " x " + i + " = " + number * i);
//     i++;
// }



//print the table using for-in loop
// let number = prompt("enter a number to print the table:-");

let table = [];
for (let i = 1; i <= 10; i++) {
  table.push(number * i);
}

for (let i in table) {
  document.write(number + " x " + (parseInt(i) + 1) + " = " + table[i]);
  document.write("<br>");
}