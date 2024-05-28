const path = require("node:path");

//__dirname
console.log(__dirname);

//__filename
console.log(__filename);

//path.basename(filepath)

let url = "D:\\Ducat-Training\\node-js\\coremodule\\path.js ";

// console.log(path.basename(url));
console.log(path.basename(__filename));

//path.dirname(directorypth)

let url1 = "D:\\Ducat-Training\\node-js\\coremodule\\path.js ";

console.log(path.dirname(url1));
console.log(path.dirname(__filename));

//path.extname(filepath)

let url2 = "D:\\Ducat-Training\\node-js\\coremodule\\path.js ";

console.log(path.extname(url2));
console.log(path.extname(__filename));

//path.resolve(directoryname,'filename')

let url3 = "D:\\Ducat-Training\\node-js\\coremodule\\path.js ";

// console.log(path.resolve(__dirname, url3));
console.log(path.resolve(__dirname, "../", "path.js"));

//path.isAbsolute(path)

let url4 = "D:\\Ducat-Training\\node-js\\coremodule\\path.js ";

console.log(path.isAbsolute(url4));
