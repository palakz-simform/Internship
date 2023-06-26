console.log("Hello")
var a: number;
a = 5
console.log(a)


// number, string, boolean, array, any
var abc:boolean = false;
console.log(abc)

let nameVar:string = "asas"
console.log(nameVar);
nameVar = "abc"
console.log(nameVar);

const aa:number[] = [5,12,213123,1432,452.45];
console.log(aa);

const aaa:any[]= ["w","w",324]
console.log(aaa);


// ************array and objects*************
let numbers = [2,5,6,32,2,"asd"]
 numbers.push(4)
//  numbers.push(true)  //  throws error


var person :object = {
    name: "sad",
    age : 123,
    location : "was"
};

// console.log(person.skill) //shows error
// person.name = 323 //shows error

var personn :{
    name:string,
    age:number,
    location: string

} = {
    name: "sad",
    age : 123,
    location : "was"
};
