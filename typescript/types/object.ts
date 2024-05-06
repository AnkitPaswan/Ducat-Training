//Objects

let emp1:{
    firstName: string,
    lastName: string,
    age: number,
    getFullName:any;
} = {
    firstName: 'Jphn',
    lastName: 'smith',
    age: 20,
    getFullName:function(){
        console.log(this.firstName + ' ' + this.lastName);      
    }
}

//optional properties


let emp2:{
    firstName: string,
    lastName: string,
    age?: number,
    getFullName:any;
} = {
    firstName: 'Jphn',
    lastName: 'smith',
    // age: 20,
    getFullName:function(){
        console.log(this.firstName + ' ' + this.lastName);      
    }
}