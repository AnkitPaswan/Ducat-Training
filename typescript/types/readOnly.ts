//readOnly type

let object : {
    readonly firstName : string;
} = {
    firstName : "Ankit"
}

object.firstName = "suraj"

console.log(object);

