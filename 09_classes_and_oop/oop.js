//object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(`got user datails from ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)


function User(username, logincount, isLoggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcom ${this.username}`)
    }

    return this
}
 
// const userOne = User("hitesh",12,true)
// const userTwo = User("chaiaur code",12,true)
const userOne =new User("hitesh",12,true) //new object is creating
const userTwo =new User("chaiaur code",12,true)
console.log(userOne)
console.log(userTwo)
