//write a program to calculate the sum of all digits using recursion

function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  } else {
    return sumOfDigits(parseInt(num / 10)) + (num % 10);
  }
}

console.log(sumOfDigits(123456789));
