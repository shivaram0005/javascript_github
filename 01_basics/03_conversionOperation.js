let score = 33
// let score = null (if we convert it gives ans 0)
// let score = undefined (if we convert it gives NaN)
// let score = true (if we convert it gives 1)
// let score = "hitesh" (if we convert it gives NaN)

// console.log(typeof score)
// console.log(typeof(score))

// let firstScore = 23; 
//let firstScore = "23"  //we given string but it will convert into number
let firstScore = "33abc"
let valueInNumber = Number(firstScore);
// console.log(typeof valueInNumber) //"33abc" typeof gives number but consolelog gives NaN
// console.log(valueInNumber)




let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0=> false


let someNumber = 33
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);