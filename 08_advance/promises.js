//promise one
//the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//a promise is in one of these states
//1)pending: initial state,neither fulfilled nor rejected
//2)fulfilled: meaning that the operation was completed successfully
//3)rejected: meaning that the operation failed

// promiseOne
const promiseOne = new Promise(function(resolve, reject) {
    //do an async calls 
    //db calls, cryptographt, networkcalls
    setTimeout(function(){
        console.log("async task is complete")
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log("promise consumed")
})

//promiseTwo

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2 is complete")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved")
})

//promise three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'chai', email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

//promise four

console.log("four")

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"shiva", password:'123'})
        }
        else{
            reject('something went wrong')
        }
    },1000)

})

// promiseFour.then(function(user){
//     console.log(user)
// }).catch(function(){
//     console.log("error occured")
// })
promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((myUserName) => {
    console.log(myUserName)
}).catch(function(err){
    console.log(err)
})


//promise five

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
    if(!error){
        resolve({username:'javascript', password:'123'})
    }else{
        reject('ERROR: JS went wrong')
    }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log('error js occured')
    }
}
consumePromiseFive()


//
async function getAllUsers(){

    try {
        const response =   await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)
        
        const data =await response.json()
        console.log(data)

    } catch (error) {
        console.log("e" , error)
    }
}
getAllUsers()


//
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch(function(err){
    console.log(error)
})