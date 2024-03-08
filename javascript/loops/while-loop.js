//08/03/24

//while -loop syntax
// while (condition) {
    
// }

// let num = 0;
// while (num <10) {
//     console.log(num);
//     num++;
// }

//array

// let array = [10,20,30,40];
// let index = 0;

// while (index < array.length) {
//     console.log(index, array[index]);
//     index++;
// }



//array

// let string = "DUCAT";
// let index = 0;

// while (index < string.length) {
//     console.log(index, string[index]);
//     index++;
// }


let num = 1234567890;
let count = 0;
while (num > 0 ) {
   
    count++;
    num = parseInt(num / 10);
    // console.log(num);
}
console.log(count);