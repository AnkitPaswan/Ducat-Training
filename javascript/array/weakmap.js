//26/03/24
//weakmap- it doesnot return size, and also it has no garbeg collector,and it take key in the form of key
/*
//weakmap.set()
let weakmap = new WeakMap();

let obj = { key: "firstname" };
weakmap.set(obj, "ankit");

//weakmap.get()
console.log(weakmap.get(obj));

//weakmap.delete(key)

weakmap.delete(obj);
console.log(weakmap);

//weakmap.has(key)
console.log(weakmap.has(obj));
*/

//weakSet
let obj = { key: "Ankit" };
//weakSet.add(obj);
WeakSet.add(obj);

//weakSet.delete(key)
WeakSet.delete(obj);
console.log(WeakSet);

//weakSet.has
WeakSet.has(obj);
console.log(WeakSet);
