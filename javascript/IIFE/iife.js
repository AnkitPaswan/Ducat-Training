//16/04/24

//IIFE- immediate invoke function execution
async function getCounteries() {
  let response = await fetch("");
  let data = await response.json();
  return data;
}

(async function () {
  let data = await getCounteries();
  console.log(data);
})();
