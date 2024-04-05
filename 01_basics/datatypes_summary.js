// primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

//Reference (Non primitive)
//Array, Object, Function.


//JavaScript is a dynamically typed programming language. This means that the type of a variable is not declared when the variable is created.

// const id = Symbol("abc");
// // const id = Symbol(123);
// const anotherId = Symbol("abc");
// console.log(id);
// console.log(id === anotherId)  //false



//two types of memory
//Stack (Primitive) we will get only copy, original values dont change
//Heap (Non Primitive) we get original values, original values can change

//stack example
 
let name = "shivaram";
let secondName = name;
secondName = "mike";
console.log(name);
console.log(secondName);

//heap example

const Employee = {
    name: "shivaram",
    id: 2020
}
const employeeTwo = Employee;
employeeTwo.name = "mike"
console.log(Employee.name)
console.log(employeeTwo.name)