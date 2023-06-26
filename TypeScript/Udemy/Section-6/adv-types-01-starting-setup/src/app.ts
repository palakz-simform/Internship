// Code goes here!

type Admin = {
    name: string;
    priviledge: string[]
}

type Employee = {
    name: string;
    startDate : Date;
}

// If admin and Employee are made interfae 
// then we can also define Elevated Employee as 
// interface ElevatedEmployee extends Employee,Admin{}
type ElevatedEmployee = Admin & Employee;

const e1 : ElevatedEmployee = {
    name:'max',
    priviledge:['create-server'],
    startDate : new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric    

//***  Function overload *********/
function add(n:number, b:number):number;
function add(n:string, b:string):string;
function add(n:number, b:string):string;
function add(n:string, b:number):string;
//************ TYPE GUARD **********/ 
function add(a: Combinable, b:Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString()
    }
    return a+b
}

//for overload
const result = add('Mac','sda')
//


type UnknowEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknowEmployee){
    console.log('Name : ' + emp.name)
    // console.log('Privileges  : '+ emp.priviledge ) //throws error 
    if('priviledge' in emp){
        console.log('Priviledge : '+emp.priviledge)
    }
    if('startDate' in emp){
        console.log('startDate : '+emp.startDate)
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Manu',startDate: new Date()})

/************************Type guard*************** */
class Car{
    drive(){
        console.log("Driving")
    }
}

class Truck {
    drive(){
        console.log('DRiving a truck');
        
    }

    loadCargo(amount: number){
        console.log('Loading cargo...'+amount);
        
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck()

function useVehicle (vehicle:Vehicle){
    vehicle.drive();
    // if('loadCargo' in vehicle){
    //     vehicle.loadCargo(1000)
    // }
    // Instead of above code we can do following
     if(vehicle instanceof Truck){
        vehicle.loadCargo(1000)
    }

}

useVehicle(v1)
useVehicle(v2)

/******************** Descriminated Union***********/
interface Bird{
    type: 'bird'
    flyingSpeed : number;
}

interface Horse { 
    type: 'horse'
    runningSpeed : number;
}


type Animal  = Bird | Horse;

function moveAnimal(animal : Animal){
    // if('flyingSpeed' in animal){
    //     console.log('MOving with speed : '+ animal.flyingSpeed)
    // }
    //  instead of above code and | animal instance of Bird wont work as Bird is an interface not class 
    // so we an build descriminated union
    let speed;
  switch(animal.type){
    case 'bird':
        speed = animal.flyingSpeed;
        break;
    case 'horse':
        speed  = animal.runningSpeed;
  }
  console.log('Moving at speed ' + speed);
  } 

moveAnimal({type:'bird',flyingSpeed:10})


/******************Type casting********* */
// const paragraph = document.querySelector('p');
const paragraph = document.getElementById('message-output')

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!  //or below is same
const userInputElement = document.getElementById('user-input')! as HTMLInputElement

userInputElement.value = 'Hi there!'


/***************Index properties********** */

interface ErrorContainer{
    [prop: string]:string
}

const errorBag : ErrorContainer = {
   email : 'Not valid email',
   username : 'Must start with a capital character'
}


/********************Optional chaining************* */
const fetchUserData = {
    id:'u1',
    name:'Max',
    // job:{title:'CEO',description:'My Own Company'}
}

// console.log(fetchUserData.job.title) //this throws error if job dosen't exists so we can use optional chaining
// console.log(fetchUserData?.job?.title);


// Nullish coalescing
const userInput = undefined
const storedData = userInput ?? 'Default'
console.log(storedData)

