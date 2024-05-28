const os = require("node:os");

// console.log(os);

//freemem()
console.log(os.freemem() / 1024 / 1024 / 1024);

//totalmem()
console.log(os.totalmem() / 1024 / 1024 / 1024);

//os.homedir()
console.log(os.homedir());

//os.platform()
console.log(os.platform());

//os.arch()
console.log(os.arch());

//os.uptime()
console.log(os.uptime() / 60 / 60);

//os.userInfo()
console.log(os.userInfo());

//os.version()
console.log(os.version());

//os.cpus()

console.log(os.cpus());

//os.release()
console.log(os.release());

//os.type()
console.log(os.type());
