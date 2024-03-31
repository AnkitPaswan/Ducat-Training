//date time formatter

function formatDateTime(dt) {
  return dt.toString();
}

var now = new Date().toString();
console.log("Current DateTime (UTC): " + now);

formattedNow = formatDateTime(now);
console.log("Formatted Current DateTime (UTC): " + formattedNow);

//create a new date object with another date and time
var otherDT = new Date("2023-01-01T00:00:00Z");
if (!isValidDate(otherDT)) {
  console.log("Invalid Date");
} else {
  console.log("Other DateTime: " + otherDT);
  formattedOtherDT = formatDateTime(otherDT);
  console.log("Formatted Other DateTime: " + formattedOtherDT);
}

var otherDT1 = new Date("03/31/2024");
if (!isValidDate(otherDT1)) {
  console.log("Invalid Date");
} else {
  console.log("Other DateTime1: " + otherDT1);
  formattedOtherDT = formatDateTime(otherDT1);
  console.log("Formatted Other DateTime1: " + formattedOtherDT);
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
