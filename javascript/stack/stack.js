//15/04/2024

//Stack:- works in last in first out(LIFO)

function func1() {
  func2();
  console.log("func1 called");
}
function func2() {
  func3();
  console.log("func2 called");
}
function func3() {
  console.log("func3 called");
}
func1();
