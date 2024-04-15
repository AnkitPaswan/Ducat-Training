//15/04/24

//Recursion:- function calling itself is called recursion;

// examples:
// function testing(){
//     testing();
// }

// print 1 to 10 using recursion

function printCounting(start) {
  if (start <= 10) {
    console.log(start);
    printCounting(start + 1);
  }
}
printCounting(1);
