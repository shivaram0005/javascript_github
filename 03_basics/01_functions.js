//functions
function sayMyName(){
    console.log("shivaram")
}

sayMyName()


function addTwoNumbers(num1, num2){

    console.log(num1 + num2);
}
addTwoNumbers(3,6);
// const result = addTwoNumbers(3,5); this gives an error


function addNumbers(num1, num2){
    return num1 + num2
    //console.log("shiva") no code will execute after return keyword
}
const result = addNumbers(5,45);
console.log(result)


function loginUser(username = "mike"){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUser("shiva"))
console.log(loginUser())


function calculateCartPrice(val1, val2, ...num1){ //these ...num1 is rest operator
    return num1
}
console.log(calculateCartPrice(200,400,500,600))



//passing object as function argument
const user = {
    username: "hitesh",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


//passing array as function argument
const array = [ 200, 300, 400, 500];

function handleArray(arr){
    return arr[0];

}

// console.log(handleArray(array))
console.log(handleArray([500,600,700]))