
// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let str = "* ";
//     console.log(str.repeat(i));
// }





// problem-1
   

for (let row = 0; row <3; row++) {
    for (let col = 0; col <3; col++) {
        document.write("* &nbsp; &nbsp;")
    }
    document.write("<br>");
}

document.write("-----------<br>")

// problem-2

for (let row = 0; row <3; row++) {
    for (let col = 0; col <3; col++) {
      if (row <= col) {
        document.write("* &nbsp; &nbsp;")
      }
    }
    document.write("<br>");
}

document.write("-----------<br>")

// problem-3

for (let row = 0; row <3; row++) {
    for (let col = 0; col <3; col++) {
      if (row >= col) {
        document.write("* &nbsp; &nbsp;")
      }
    }
    document.write("<br>");
}

document.write("-----------<br>")

// problem-4

// for (let row = 0; row <3; row++) {
//     for (let col = 0; col <col-row; col++) {
//       if (col <= row) {
//         document.write("* &nbsp; &nbsp;")
//       }
//     }
//     document.write("<br>");
// }

// document.write("-----------<br>")


   

