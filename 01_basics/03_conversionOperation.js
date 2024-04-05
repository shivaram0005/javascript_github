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
// console.log(typeof stringNumber);
// console.log(stringNumber);



// ****************************** Operations **************************


let value = 3
let negativeValue = -value;
// console.log(negativeValue);


// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 2)
// console.log(2 / 2)
// console.log(2 % 2)


let str1 = "shiva"
let str2 = " ashu"

let str3 = str1 + str2;
// console.log(str3);


console.log("1" + 2);  //12
console.log(1 + "2");  //12
console.log("1" + 2 + 2) //122 if first value is string then it converts entire into string
console.log(1 + 2 + "3") //33 if first value is number then it converts entire into number + string

console.log("1" + 2 + 2 + 4 + 5 + 6) //122456
console.log(1 + 2 + 2 + 4 + 5 + "6") //146

console.log(+true);   //1

