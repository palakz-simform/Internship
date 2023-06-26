function add(n1:number,n2:number, showResult:boolean,phrase:string){
 const result = n1+n2
    if(showResult===true){
    console.log(phrase+result)
   }
    return result
}

let num1:number;
num1 = 5
const num2 = 2.4;
const printResult = true
const resultPhrase = "Result is : " 
const result = add(num1,num2,printResult,resultPhrase)
console.log(result)