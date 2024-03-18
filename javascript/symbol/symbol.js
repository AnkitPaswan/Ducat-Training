// 27/02/24

// let = Symbol("id");

// console.log(sym);

// console.log(sym.description);

// 18/03/24

// let object = {
//   sym: sym,
// };

// console.log(object);
// console.log(object[sym]);

let sym = Symbol.for("id");
let sym1 = Symbol.for("id");

console.log(Symbol.keyFor(sym));
