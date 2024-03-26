//26/03/24

let object = {
  firstname: "John",
  lastname: "Smith",
};

//Object.key(object)
console.log(Object.keys(object));

for (const value of Object.entries(object)) {
  console.log("key: " + value[0]);
  console.log("value: " + value[1]);
}
