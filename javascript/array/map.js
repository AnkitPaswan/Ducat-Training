//26/03/24

let map = new Map();
console.log(map);

//map.set(key,value)
map.set("name", "Ankit");
map.set(1, 10);
map.set(true, true);
map.set([10, 20], [10, 20]);

//map.get(key)
console.log(map.get("name"));

//map.has(key)
console.log(map.has("name"));

//map.delete(key)
console.log(map.delete("name"));
console.log(map);

//map.clear(key)
map.clear;
console.log(map);

//map.size(key)
console.log(map.size);

//mmap.keys() -return an iterable for keys

console.log(map.keys);

for (const value of map.keys()) {
  console.log(value);
}

// map.value() - return an iterable for values
console.log(map.values());
for (const value of map.values()) {
  console.log(value);
}

//map.entries()
console.log(map.entries());
for (const value of map.entries()) {
  console.log(value);
  console.log("key:" + value[0]);
  console.log("value:" + value[1]);
}
