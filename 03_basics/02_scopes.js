let a = 10
const b = 20
var c = 30

if(true){
    let a = 100
    const b = 200
    console.log("inside block", a)
    console.log("const inside block", b)
}

console.log("outside block ", a)

//                               intersting
console.log(addOne(9))
function addOne(num){
    return num + 1;
}

addTwo(5)  //this gives an error..
const addTwo = function(num){
    return num + 2;
}