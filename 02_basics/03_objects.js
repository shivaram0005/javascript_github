const JsUser = {
    name : "shivaram",
    "full name" : "shivaram thalloju",  // to access this we use (console.log(JsUser["full name"]))
    age: 25,
    location: "hyderabad",
    email: "shiva@google.com",
    isLoggedIn: false,
    lastLoginDays: [ "Monday", "Saturday"],
    greeting: function (){
        console.log(`hello ${this["full name"]}`)
    }

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])

JsUser.age = 32;
console.log(JsUser)
// Object.freeze(JsUser)
console.log(JsUser.greeting());
