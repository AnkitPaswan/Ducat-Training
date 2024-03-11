//11/03/24

// note: it is the mixture of global and local variable

//outer scope or outer variable

function testing() {
  let a = 10;

  function test() {
    console.log(a);
  }

  test();
}

testing();
