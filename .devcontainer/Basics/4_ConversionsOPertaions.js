let score="33aa"

console.log(typeof score)
console.log(typeof(score))

let ConvertScore=Number(score)

console.log(typeof ConvertScore)
console.log( ConvertScore)
//null => convert into 0 , undefned => NaN

let isLogin=1
let Login=Boolean(isLogin)//"" => false, "SUbhash"=> true, 1=true, 0=false
console.log(typeof Login)
console.log(Login)

let somenumber=33
let convertIntoString=String(somenumber)// in string conversion is done
console.log(convertIntoString)
console.log(typeof convertIntoString)

let msg1="hello"
let msg2=" how are you"
let result =msg1+msg2
console.log(result)

const id=Symbol('123')
const iddd=Symbol('123')
console.log(id==iddd)
console.log(iddd)
console.log(id)

let bigintdata=22222222222222222222222222222n
console.log(bigintdata)

// array , object , functions
const heros=["Skatimaan","Junior G","GGGGG"];
let myobj={
    name:"subhash",
    age:24,
}

const myFunction =function(){
    console.log("hello function stored in variable")
}// in javascript we can store funtion as a variable 