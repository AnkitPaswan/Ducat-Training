//17/04/24
//call/apply
let object = {
  firstName: "John",
  lastName: "Smith",
};

let object2 = {
  getFullName: function (age, hobbies) {
    console.log(this);
    console.log(this.firstName + " " + this.lastName + " " + age);
    console.log(hobbies);
  },
};

object2.getFullName.call(object, 20, "cricket");
object2.getFullName.apply(object, [20, "cricket"]);
