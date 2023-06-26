
//**********************HOISTING******************
/*console.log("heeee")
console.log(abc())
console.log(a)
var a = 10;

function abc(){
    console.log("Inside Function")
}*/

/*
a()
function a(){
    console.log("HIIIIIII");
}
function a(){
    console.log("Byeooo");
}

*/

 //FUNCTION EXPRESSION
 /*
 var canada = function(){
    console.log("Inside canada function");
 }
 */
 /*With arrow function*/
/*
 var canada = ()=>{
    console.log("Inside canada function");
 }

 canada();

 //FUNCTION DECLARATION

 function india(){
    console.log("Inside India function");
 }
 india();

 */

 //******************8ARGUMENTS KEYWORD***********************
 /*
function marry(person1, person2)
{
    console.log('arguments',arguments)
    return `${person1} married to ${person2}`
}
marry('Jay', 'Riya')

*/
/*
function marry(person1, person2)
{
    console.log('arguments',arguments)
    console.log(Array.from(arguments))
    return `${person1} married to ${person2}`
}
marry('Jay', 'Riya')

*/
/*
function marry(...args)
{
    console.log('arguments',args)
    console.log(Array.from(arguments))
    return `${args[0]} married to ${args[1]}`
}
marry('Jay', 'Riya')

*/
/*
function india(){
    console.log('arguments',arguments)
    console.log("Inside India function");
 }
 india();
*/


//******************************VARIABLE ENVIRONMENT******************* */
/*
function two(){
    var isValid;
    console.log(isValid);
}

function one(){
    var isValid = true;
    console.log(isValid);
    two();
    
}

var isValid = false;
console.log(isValid);
one();
*/

/***************SCOPE CHAIN***************** */
//LEXICAL SCOPE
//sCOPE : Where can the variable be accessible
//
/*
var x='x'
function findName(){
    console.log(x);
    var b = 'b';
    return printname();
}
function printname(){
    var c = 'c';
    return 'Palak Zalavadia'
}
function sayMyName(){
    var a = 'a';
    return findName()
}

sayMyName()

*/
/*
function sayMyName(){
    var a = 'a';
    return function findName(){
        var b ='b';
       // console.log(c);
        return function printName(){
            
            var c = 'c';
            //console.log(c);
            return 'Palak Zalavadia';
        }
    }
}

sayMyName()()()
*/

/******Use strict******** */

/*
'use strict'
function weird(){
    height  = 50;                //not declaring variable will result in Reference Error
    console.log(height);

}
weird()

*/

/*************FUNCTION SCOPE AND BLOCK SCOPE*********** */
//VAR IS FUNCTIONALLY SCOPED

//Functional scope of var
/*
if(5>4){
    var secret = '12345'
}
console.log(secret);
*/

//Block Scope of let
/*
function loop(){
    for(let i = 0; i <5; i++){   
        console.log(i);
    }
    console.log('Final value of i : ',i)  //let cannot be accessed here and hence throws refernece error
}
loop();

*/

/***********IIFE********** */
//IIFE : Immediately Invoked Function Expression
/*
(function(){

})();
*/
//function(){}();               Syntax Error

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
        console.log(this.sing()+'!');
    }
}

obj.singAgain();
*/

/************CALL APPLY BIND **************/

//CALL
//Apply is same as call except it takes arguments as array
//Bind returns a function
/*
const wizard = {
    name:'Merlin',
    health:50,
    heal(num1,num2){
        return this.health += num1+num2;
    }
}

const archer = {
    name : 'Robin',
    health: 30
}
console.log('1',archer)
//wizard.heal.call(archer, 50,30)
//wizard.heal.apply(archer, [50,60])
const healArcher = wizard.heal.bind(archer, 100,60)
healArcher()
console.log('2',archer)
*/

/*************Function curring********** */
/*
function multiply(a,b){
    return a*b;
}
let multiplyByTwo = multiply.bind(this,2)
let multiplyByTen = multiply.bind(this,10)
console.log(multiplyByTen(4))
*/

/***********This keyword exersise ***********/
/*
var b={
    name:'Jay',
    say(){
        console.log(this)
    }
}
var c={
    name:'Jay',
    say(){
        return function()
        {
            console.log(this)
        }
    }
}
var d={
    name:'Jay',
    say(){
        return () =>
        {
            console.log(this)
        }
    }
}
c.say()()


*/
/*#########################SECTION-5########################### */
//******************Invoking function*****************
//Method 1:
/*
function one(){
 console.log('1')
}
one()
*/

//Method 2
/*
const obj = {
    two:function(){
        console.log('2');
    }
}

obj.two()
*/
/*
const obj = {
    two(){
        console.log('2');
    }
}

obj.two()

*/
//Method 3:
/*
function three(){
    console.log('3')
}
three.call()
*/
//Method 4:
/*
const four = new Function('console.log("4")')
four()
*/
/*
const four = new Function('num','console.log(num)')
four(4)
*/


/*******************First Class Citizen*************** */
/*
//1
var stuff = function(){}
//2
function a(fn){
    fn()
}
a(function() {console.log('Hiii there')})
//3
function b(){
    return function c() {console.log('bye')}
}
var d=b()
d()
*/

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

/***************************Closures*********************** */
/*
function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            console.log(grandpa)
        }
    }
}
a()()()
*/
/*
function boo(string){
    return funcation(name){
        return function(name2){
            console.log(string name name2)
        }
    }
}
*/
//Above code using arrow function
/*
const boo = (string) => (name) =>(name2) =>  
console.log(string ,name, name2)
boo('hi')('tim')('becca')
*/

//Another example of closure
/*
function callMeMaybe(){
    setTimeout(function(){
        console.log(callMe);  //here callMe creates a closure and assigns value till setTimeout exicutes
    },2000)
    const callMe = "Hii! I am here";
}

callMeMaybe();
*/

//****************Closure and Encapsulation****************** */
/*
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1
        console.log("Blast")
    };
    setInterval(passTime,1000)
    return {
        launch : launch,
        totalPeaceTime: totalPeaceTime
    }
}
const ohno = makeNuclearButton();
ohno.totalPeaceTime()

*/
//Example 2 CLOSURE
/*
let view;
function initialize(){
    let called = 0;
    return function(){
        if(called > 0){
            return;
        }
        else{
            view = 'View here'
            called++;
            console.log('View has been set')
        }
    }
}
const StartOnce = initialize();
StartOnce();
StartOnce();
StartOnce();
console.log(view);
*/

//Example 3 CLOSURE
/*
const array = [1,2,3,4];
for (let i=0; i<array.length;i++){  //var i  
    setTimeout(function(){
        console.log('I am at index '+i)  //let allows you to use block scope
    },3000)
    
}
*/
/*
const array = [1,2,3,4];
for (var i=0; i<array.length;i++){  //var i  
    (function(closureI){
    setTimeout(function(){
        console.log('I am at index '+closureI)  //let allows you to use block scope
    },3000)
} )(i)
}
*/
/***********************PROTOTYPE******************** */
/*
let dragon = {
    name:'Tanya',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            console.log(`${this.name}' the breather of fire'`)
        }
    }
}
let lizard = {
    name:'Kiki',
    fight(){
        return 1
    }
}

lizard.__proto__=dragon;  //We are able to inherit through prototype chain all the properties and methods of dragon
console.log(lizard.sing())
console.log(dragon.isPrototypeOf(lizard))  //does lizard inherit from dragon
*/


/*
let dragon = {
    name:'Tanya',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            console.log(`${this.name}' the breather of fire'`)
        }
    }
}
let lizard = {
    name:'Kiki',
    fight(){
        return 1
    }
}

lizard.__proto__=dragon;
for (let prop in lizard){
    if(lizard.hasOwnProperty(prop)){
        console.log(prop)
    }
    
}*/

//Create prototype without __proto__
/*
let human = {
    mortal:true
}
let socrates = Object.create(human)
socrates.age=45;
console.log(socrates.mortal)
console.log(human.isPrototypeOf(socrates))
*/


/*
let a ={
    name:"XYZ",
    language:"Vue"
}
let p = {
    run : ()=>{
        alert ("run")
    }
}

a.__proto__ = p;
a.run()
console.log(p)

*/