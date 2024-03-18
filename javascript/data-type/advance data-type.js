//18/03/24

//advance data type

//number;-hex,binary and octal number

// let number = 10;
// console.log(number.toString(2));
// console.log(number.toString(8));
// console.log(number.toString(16));

//Rounding
// let num = 12.34466778;
// console.log(Math.round(num));

// let num = 12.34466778;
// console.log(Math.floor(num));

// let num = 12.34466778;
// console.log(Math.ceil(num));

// let num = 12.34466778;
// console.log(Math.trunc(num));

//math.ToFixed

// let number = 12.252525252;
// console.log(number.toFixed(2));

//imprecise calculations
// console.log(10 + 12 - false - true + false + false + 20);

//math.pow(n, power)
// let n = 5;
// console.log(Math.pow(n, 2));

//max and min
// let arr = [9, 45, 100, 1000, 10000];
// console.log(Math.min(...arr)); //spread operator or
// console.log(Math.min(10, 20, 5, 80, 25, 34)); //spread operator

// console.log(Math.max(...arr)); //spread operator or
// console.log(Math.max(10, 20, 5, 80, 25, 34)); //spread operator

//math.random()
// generates a random decimal between 0 (inclusive) and 1 (exclusive)
// console.log(Math.random());

//generate a random integer between two numbers
// console.log(Math.floor((Math.random() * 10) + 1)); //between 1-10

// let x = Math.round(Math.random() * 10000);
// console.log("Random Number: " + x);

// guessing game
let secretNumber = 5;
while (true) {
  let userGuess = prompt("Guess a number");
  if (userGuess == secretNumber) {
    alert("Correct");
    break;
  } else if (userGuess > secretNumber) {
    alert("Too high");
  } else {
    alert("Too low");
  }
}
