//15/04/2024
//Rest(...) operator:- it is used for combine the value;

function addition(...nums) {
  let sum = 0;
  for (const value of nums) {
    sum += value;
  }
  console.log(sum);
}

addition(10, 20, 30, 40, 50);
