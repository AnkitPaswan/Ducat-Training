// const getFirstName = require("./items").default;
const item = require("./items");

// console.log(item.default);

//destructuring
// const { item, firstName } = require("./items");
// const { item, firstName:fname } = require("./items");

console.log(item.items);
console.log(item.firstName);
// console.log(item);
// console.log(fname);
item.getFirstName();
// getFirstName();
