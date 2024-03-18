//15/03/24

// let object = {
//   firstName: "John",
//   lastName: "Doe",

//   getFullName: function () {
//     console.log(this);
//     console.log(this.firstName + " " + this.lastName);
//     this.testing;
//   },

//   testing() {
//     console.log("testing");
//   },
// };

// object.getFullName();

let object = {
  firstName: "John",
  lastName: "Doe",

  getFullName: () => {
    //it points to theh window object.
    console.log(this);
    console.log(this.firstName + " " + this.lastName);
    this.testing;
  },

  testing() {
    console.log("testing");
  },
};

object.getFullName();
