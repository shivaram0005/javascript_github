const user = {
    username : "shivaram",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

console.log(user.welcomeMessage())
console.log(this)

//this keyword is only uses in objects

const chai = () => {
    console.log("this is the arrow function")
    console.log(this)
}

chai()

//
// const addTwo = (num1, num2) => {
//     return num1 + num2 // if we use curly brackets then return key is must
// }
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username : "shivaram"})

console.log(addTwo(3,4))