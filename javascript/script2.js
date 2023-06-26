/**###############OBJECT ORIENTED PROGRAMMING############### */
//THERE ARE TWO TYPES
//1. Class based programmming language
//2. Prototype based programming language

/*
const elf = {
    name:'Yam',
    weapon:'bow',
    attack(){
        console.log('Attack with ' + elf.weapon)
    }
}
const elf2 = {
    name:'Sally',
    weapon:'arrow',
    attack(){
        console.log('Attack with ' + elf2.weapon)
    }
}
elf2.attack()
*/
//factory function : the function which creates objects for us
/*
function createElf(name, weapon){
    return {
        name:name,  //name
        weapon:weapon, //weapon
        attack(){
            console.log('Attack with ' + weapon)
        }
    }
}
const peter = createElf('Peter','stones')
peter.attack()
const sam = createElf('Sam','fire')
sam.attack()

*/

/*******************Object.create***************** */
/*
const elfFunctions = {
    attack(){
        return 'Attack with '+this.weapon
    }
}
function createElf(name,weapon){
    let newElf = Object.create(elfFunctions)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}
const peter = createElf('Peter','stones')
console.log(peter.attack())
const sam = createElf('Sam','Fire')
console.log(sam.attack())

*/

/****************Constructor Function************** */
/*
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
Elf .prototype.attack = function(){
    return 'Attack with '+this.weapon
}

const peter = new Elf('Peter','stones')
console.log(peter.attack())
const sam = new Elf('Sam','fire')
console.log(sam.attack())
*/

/*******************ES6 Class*************** */
/*
class Elf{
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        console.log('Attack with '+this.weapon)
    }
}

const peter = new Elf('Peter','stones') //instantiating class
peter.attack()
const sam = new Elf('Sam','fire')
sam.attack()
console.log(peter instanceof Elf)
*/

/*************************INHERITANCE********************** */
/*
class Character {
    constructor(name,weapon){
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with '+this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type){
        super(name,weapon)
        this.type = type
        console.log(this)
    }
}

class Ogre extends Character{
    constructor(name,weapon,color){
        super(name,weapon)
        this.color = color;
        
    }
    makeFort(){
        return 'Strongest fort in the world made'
    }
}
const dolby = new Elf('Dolby','cloth','house');
console.log(dolby.attack())
const shrek = new Ogre('shrek','fire','house');

console.log(shrek.makeFort())

*/

/**********************PROMISES****************** */
/*
const promiser = new Promise((resolve,reject)=>{
    if(true){
        resolve('Worked successfully');
    }else{
        reject('Failed')
    } 
})
promiser
   .then(result=>result + '!')
   .then(result2 => {
    throw Error
    console.log(result2);
   })
   .catch(()=>console.log('error!'))
   */


/********************Async Await****************** */
/*
movePlayer(100,'Left')
.then(()=> movePlayer(400,'Left'))
.then(()=> movePlayer(10,'Right'))
.then(()=> movePlayer(330,'Left'))


async function playStart(){
    const FirstMove = await movePlayer(100,'Left');
    await movePlayer(400,'Left');
    await movePlayer(10,'Right');
    await movePlayer(330,'Left');
    
}
*/


/************************ASYNC AWAIT *******************/
/*
async function harry (){
    return 5
}
harry().then((x)=>{
    alert(x)
})
*/
/*
async function harry (){
    let delhiWheather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },1000)
    })
    
    let bangloreWheather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("21 Deg")
        },8000)
    })
   // delhiWheather.then(alert)
    // bangloreWheather.then(alert)
    console.log("Delhi weather")
    let delhiW = await delhiWheather
    console.log("Delhi weather "+delhiW)
    console.log("Banglore weather")
    let bangloreW = await bangloreWheather
    console.log("Banglore weather "+bangloreW)
    return[delhiW,bangloreW]
}
console.log("Welcome")
let a =harry()
a.then((value)=> {
    console.log(value)
})
console.log(a)
*/

/******************Promises************** */
/*
let p = new Promise((resolve,reject)=>{
    let a = 1+1
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
//to catch an error from reject state we use catch  (When promise fails)

/****************Callback*************** */

// function sum(a,b,d)
// {
//     var sum = a+b;
//     d(sum)
// }

// function display(s){
//     console.log(s)
// }

// sum(1,2,display)

// let a ={
//     name:"xyz",
//     age:20
// }
// console.log(...a)


/************************* */

let nums = [1,3,5,6]
 nums.forEach(function(number,index){

    console.log(index)
 })