// ****************Hoisting*************/
/*
console.log(a);
getName();

var a=7;
function getName(){
    console.log("aaa")
}
*/

// *****************Undefined**************//
/*
var a
console.log(a)
//var a=10;
*/

//********************Not defined***************/
/*
console.log(a)
*/

//****************Lexical scope************/
/*
function a(){
    let a = 10;
    //console.log(a);
    function b(){
        console.log(a)
    }

    b();
}
a()
*/

//T/***********************Temporal Dead Zone************/
/*
console.log(a);
let a=10;
*/

//Block scope
/*
{

}
*/
//***********Shadowing********//
/*
var aa = 10;
function a(){
    aa=5;
    console.log(aa)
}
a()
*/

//*************************Closure***************/
/*
function a(){
    let a = 10;
    //console.log(a);
    function b(){
        console.log(a)
    }
    b();
}
a()
*/
/*
function a() {
    let a = "Hello"
    return function b() {
        console.log(a)
    }
}
const aa = a()
aa()
*/
//Returning a whole function:
/*
function x(){
    var a = 7;
    function y(){
        console.log(a)
    }
    return y;
}
var z = x();
console.log(z)
//x in call stack no longer exists
//Now we can use function y outside the function x
z(); //function y along with lexical scope was returned
*/
//***************First class function:*****************/

/*
var b = function(param1){
    console.log(param1)
}
b(function(){

})
*/
/*
//2nd way to pass function as an argument

var b = function(param1){
    console.log(param1)
}
function xyz(){

}
b(xyz)
*/
/*
//We can also return a function from function
var b = function(){
    return function(){

    }

}
console.log(b());
*/

//****************Call back********** */
/*
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }

  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

  myCalculator(5, 5, myDisplayer);
  */

/********Event Loop/Callback queue **************/
/*
console.log("Start")
setTimeout(function(){
  console.log("5sec")
},5000)
setTimeout(function(){
  console.log("2sec")
},2000)

console.log("End")

*/
/*
console.log("Start")
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("Callback")
});
//Callback method  will stay inside the web APIs environment until we explicitly remove the event listener or close the browser
console.log("End")
*/

/**************************map*************** */
/*
const arr = [5,1,6,8,3];
function double(x){
    return x*2
}
const output = arr.map(double);
console.log(output)
*/
//OR
/*
const arr = [5,1,6,8,3];
function double(x){
    return x*2
}
const output = arr.map(function double(x){
    return x*2
} );
console.log(output)
*/
//OR
/*
const arr = [5,1,6,8,3];
const output = arr.map((x)=>x*2)
console.log(output)
*/

/**********************filter***************** */
/*
const arr = [1,5,2,6,8,7,3,7];
function isOdd(x){
    if(x%2!=0){
        return x
    }
}
const output = arr.filter(isOdd)
console.log(output)
*/
//OR
/*
const arr = [1,5,2,6,8,7,3,7];
const output = arr.filter((x)=>{
    if(x%2!=0){
        return x
    }
})
console.log(output)
*/

/***********************reduce******************* */
//Find sum
/*
const arr=[2,5,8,3,6]
const output = arr.reduce(function(acc,cur){
    acc = acc+cur;
    return acc;
},0)
console.log(output);
*/
//Find max
/*
const arr = [2,6,8,2,1,0];
const output = arr.reduce(function(acc,cur){
    if(cur>acc){
        acc=cur;
    }
    return acc
},0)
console.log(output)
*/

/****************************Some***************** */
/*
const arr = [1,7,4,2,8,5];
function myFun(val,i,arr){
    return val>5;

}
let ans = arr.some(myFun)
console.log(ans)

*/

/******************Prototype************** */

//prototype chain
/*
let arr = [4, 8, 6, 2, 4]
console.log(arr.__proto__) //It is similar to Array prototype
console.log(Array.prototype)

console.log(arr.__proto__.__proto__) //It is similar to object prototype
console.log(Object.prototype)

console.log(arr.__proto__.__proto__.__proto__)
*/


// inherit properties using prototype
/*
obj1 = {
    name:"Obj1",
    city : "city1",
    getInfo: function(){
        console.log(this.name+ " "+this.city)
    }

}
obj2 = {
    name:"Obj2"
}

obj1.getInfo()
obj2.__proto__ = obj1;
console.log(obj2.city)
obj2.getInfo()
*/

//Prototype can be used to add new methods to object constructors
/*
function Person(first, last){
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.name = function(){
    return this.firstName+this.lastName;
}

const myFather = new Person("John","Doe");
console.log(myFather.name())

*/

//********************Call Apply and bind************** */
/*
const person = {
    getInfo : function(city,country){
        console.log(this.firstName + " "+this.lastName+" city : "+city+" country : "+country)
    }
}

const person1 = {
    firstName : "John",  
}

//person.getInfo.call(person1,"Ahmedabad","Gujarat")
//person.getInfo.apply(person1,["Ahmedabad","Gujarat"])
//for bind

let printname = person.getInfo.bind(person1,"Ahmedabad","Gujarat");
printname();

*/

/***********************PROMISE****************** */
//Refer any one example
/*
let p = new Promise((resolve,reject)=>{
    let a = 1+2
    if (a==2){
        //resolve
        resolve('Success')
    }
    else{
        //reject
        reject('Failed')
    }
})
//anything on then runs for resolve
p.then((message)=>{
    console.log('This is in the '+message)
}).catch((message)=>{
    console.log('This is in the catch '+ message)
})

*/
/*
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

  // The producing code (this may take some time)

    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });

  myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
  );


/*
let myPromise = new Promise(function(resolve,reject){
    let a=8;
    if(a==0){
        resolve("Success")
    }
    else{
        resolve("Error")
    }
})
myPromise.then(
    (value)=>console.log(value),

).catch(
    (error)=>{console.log(error)}
)
*/

/************************ASYNC & AWAIT**************** */
/*
function resolvefun(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("resolved")
        }, 2000);
    });

}

   async function myasync(){
    console.log("Start")
    const result = await resolvefun().then((value)=>{console.log("Returned after 2 sec")});
    console.log("End after 2 sec")
 }

 myasync()


*/
/************************Module pattern********************* */
/*
var counter = (function(){

    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return{                            //cannot access part before return , it is private

        increament:function(){
            changeBy(1)
        },
        decreament:function(){
            changeBy(-1)
        },
        value:function(){
            return privateCounter
        }

    }
})();

console.log(counter.value())
counter.increament();
counter.increament();
console.log(counter.value())
counter.decreament();
console.log(counter.value())
*/

/***********IIFE********** */
//IIFE : Immediately Invoked Function Expression
/*
(function(){

})();
*/
//function(){}();               Syntax Error

/************************HIGHER ORDER FUNCTION*************** */

//multiplyBy is a higher order function because it returns another function

/*
//Here is an example of a higher-order function in JavaScript that takes a function as an argument:
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function higherOrderFunction(func) {
  console.log('About to call the passed-in function...');
  func('Bob');
  console.log('Done calling the passed-in function.');
}

higherOrderFunction(sayHello);


//Here is an example of a higher-order function in JavaScript that returns a function:
function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
}

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);

console.log(multiplyByTwo(4)); // logs 8
console.log(multiplyByFive(4)); // logs 20

// In this example, multiplyBy is a higher-order function because it returns a
//  function. When multiplyBy is called with an argument num, it returns a new
//   function that multiplies its argument by num. The returned function can
//   then be assigned to a variable and called with an argument.
*/

/****************THIS KEYWORD***************** */

//1:gives methods access to their object
//2: EXECUTE SAME CODE FOR MULTIPLE OBJECTS
/*
const obj = {
    name: 'Silly',
    sing(){
        console.log('Hiiii ' + this.name);
    },
    singAgain(){
        console.log(is.sthing()+'!');
    }
}

obj.singAgain();
*/

//This keyword
/* // Alone this refers to global object
console.log(this)
*/
/*
 //In regular function this refers to global object

function sum(){
 var add = 2+2;
 console.log("Sum : "+add);
 console.log(this);
}
sum()
*/
/*
//In a method this refers to owner object
const info = {
    name:"xyz",
    age:43,
    sum: function(){
        var add=2+2;
        console.log("Sum : "+add)
        console.log(this)  //In method sum this refers to the object it belongs in this case to the info object
        console.log(this.NAME)
    }
}
info.sum();
*/
/*
"use strict"
function sum(){
    var add = 2+2;
    console.log("Sum : "+add);
    console.log(this);
   }
   sum()
*/

/***********************Objects********** */

/*********Encapsulation */
//https://www.scaler.com/topics/javascript/encapsulation-in-javascript/

/*******************Class****************** */
/*
class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        console.log(this.name,this.email)
    }
}

var userOne = new User("a@gmail.com","a");
var userTwo = new User("b@gmail.com","b")

*/

/*********************Class Method************ */
/*
class User{
    constructor(email,name){
        this.email = email;
        this.name = name;

    }
    login(){
        console.log(this.name +" Logged in")
    }
    logout(){
        console.log(this.name +" Logged in")
    }
}

var userOne = new User("a@gmail.com","a");
var userTwo = new User("b@gmail.com","b")

userOne.login();
userTwo.logout();
*/
/*****************Constructor Function*********** */
/*
function User(name,age){
    this.name = name;
    this.age = age;
    this.login = function(){
        console.log(name + " logged in")
    }
}
var userOne = new User("xyz",25)
userOne.login();
*/
/*
body = document.body
newP = document.createElement("p");
body.appendChild(newP)
text = document.createTextNode("This is text Node")
newP.append(text)

*/

//************************Spread Operator************* */
//Array is converted into separate arguments
/*
function sum(name,...args){
    console.log(arguments)
}

var arr = [10,20,30]
sum("XYZ",...arr)

*/

/*
//To clone an array
const cars = [{
name :"xyz",
color:"y"
},
{
    name :"abc",
    color:"a"
}]

//console.log(...cars)
var car = cars;
//var car = [...cars];
car.push({name:"pqr",color:"p"})

console.log(cars)
*/
/**************************Query Selector************* */
// document.querySelector(".query").style.color = "red"
// document.querySelector(".query, #queryid, #box5").style.color = "red"

/*
elements1 = document.querySelectorAll('div.box1, span.box3');
elements1.forEach(function(element) {
    element.style.color = 'red';
});

/*****************************DOM******************* */
/*
// const body = document.body
// const h4 = document.createElement("h4");
// body.append(h4)
// h4.innerHTML = "<b>asdddddddddd</b>"
/*
document.getElementById("box").onmouseover = mover;
function mover(){
    document.getElementById("box").style.backgroundColor = "green"
}
*/

/*
const emp = [
  {
    id: "1",
    name: "1",
  },
  {
    id: "2",
    name: "2",
  },
];
const add = [
    {
        id: "1",
        add: "1",
      },
      {
        id: "2",
        add: "2",
      },
      {
        id: "2",
        add: "3",
      }
]

const detail = emp.map((empObj) => {
  const matchingAddObj = add.filter((addObj) => addObj.id === empObj.id)[0];
  return {
    id: empObj.id,
    name: empObj.name,
    add: matchingAddObj ? matchingAddObj.add : null,
  };
});
console.log(detail)



const add1 = [
    {
        id: "1",
        add: "1",
      },
      {
        id: "2",
        add: "2",
      },
      {
        id: "2",
        add: "3",
      }
]

const a = add1.filter((abc)=>{
    console.log(abc)
    return abc.id==2;

})
console.log(a)
*/


/**********************currying************ */
//without currying
/*
function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(2, 6, 1))
*/

/*
//with currying
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(2)(6)(1))


function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation == "sum") return a + b;
            else if (operation == "multiply") return a * b;
            else if (operation == "divide") return a / b;
            else if (operation == "subtract") return a - b;
            else return "Invalid"
        }
    }
}

// console.log(evaluate("multiply")(4)(2));
const mul = evaluate("multiply");
console.log(mul(2)(5))
console.log(mul(3)(5))
// We are able to use this mul function again and again

*/


// Infinite currying
/*
function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(5)(2)(4)(8)())
*/


// Partial application
// Below is the implementation of Partial Application
/*
function sum(a) {
    return function (b, c) {
        return a + b + c;
    }
}

const x = sum(10);
console.log(x(5, 6));
console.log(x(3, 2))

//or

console.log(sum(20)(1, 4))
*/

// Another example of currying by me:
/*
function multiply(a) {
    return function (b) {
        console.log(a * b);
    }
}

let multiplyBy2 = multiply(2)
multiplyBy2(3)
multiplyBy2(5)
multiplyBy2(8)
*/
/*************************This****************** */
/*
function abc(name) {
    this.name = name
    console.log(this.name)
}
const a = new abc('Palak')
console.log(a.name = 'vvv')
const b = new abc('aaa')

*/
/***********************Calculate Date Function******************************* */
// function calculateDuration(startDate, endDate) {

//     const start = new Date(startDate); // 2023-06-15
//     const end = new Date(endDate);     //2024-01-01

//     console.log(end.getUTCMonth());     //0
//     console.log(start.getUTCMonth());    //5
//     console.log(end.getUTCMonth() - start.getUTCMonth());      //-5
//     let years = end.getUTCFullYear() - start.getUTCFullYear();         //1
//     let months = end.getUTCMonth() - start.getUTCMonth();          //-5
//     let days = end.getUTCDate() - start.getUTCDate();            //-14
//     console.log(days)
//     if (months < 0 || (months === 0 && days < 0)) {
//         years--;                                                 //0
//         months += 12;                                            //7
//     }
//     console.log(months)
//     if (days < 0) {                                          //-14
//         var lastMonth = new Date(end.getUTCFullYear(), end.getUTCMonth() - 1, 0);            //29-11-23
//         console.log(lastMonth)
//         days += lastMonth.getUTCDate();                     //15

//         months--;                                                 //6
//     }
//     return [years, months, days];
// }
// const abc = calculateDuration('2023-06-15', '2024-01-01')

// console.log(abc)


// let abc = Symbol("ABC")
// abc = Symbol("fff")
// console.log(abc)


const employee = [
    {
        eid: 1,
        name: "abc",
        age: 34
    },
    {
        eid: 2,
        name: "ttt",
        age: 32
    }
]

const address = [
    {
        id: 1,
        address: "add"
    },
    {
        id: 2,
        address: "uuuu"
    }
]



employee.map((emp) => {
    address.filter((add) => {
        if (add.id === emp.eid) {
            emp.add = add.address
        }
    })
})
console.log(employee)
