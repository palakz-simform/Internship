// // Code goes here!

// const names : Array<string> = [] //string[]
// names[0].split(' ')

// const promise:Promise<string> = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('This is done')
//     },2000)
// })

/*************GENERIC FUNCTION *********** */
// function merge<T,U>(objA:T, objB:U){
//     return Object.assign(objA,objB)
// }
// const mergedObject = merge<{name:string,hobbies:string[]},{age:number}>({name:'Max',hobbies:['sports']},{age:30});
// // mergedObj.age //this can't be accessed
// console.log(mergedObject)


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
  console.log(mergedObj);
