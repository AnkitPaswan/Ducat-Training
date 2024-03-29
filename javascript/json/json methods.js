//27/03/24

let object = {
  firstname: "John",
  age: 10,
  hobbies: ["cricket"],
};

let jsonObject = JSON.stringify(object);
console.log(jsonObject, typeof jsonObject);

let normalObject = JSON.parse(jsonObject);
console.log(normalObject);
