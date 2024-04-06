//array destructure

const array = ['shiva', 'sai', 'mike'];
const [name1, name2, name3] = array;
// console.log(name1)
if(name1 === "sai"){
    console.log("fuck sai")
}
else{
    console.log("fuck mahesh")
}


//object destructure
const User = {
    name: "shivaram",
    age: 25,
    course: "computer science and engineering"
}

// console.log(User.name)
const {name} = User
// const {name:n} = User
// console.log(name)
// console.log(n)

const {name:n , age:a} = User;
console.log(a)


