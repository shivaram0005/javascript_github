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