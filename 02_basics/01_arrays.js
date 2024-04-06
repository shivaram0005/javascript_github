// const myArray = [0,1,2,3,4];
// const myHeros = ["mike", 'mahesh'];

// const myArray2 = new Array(1,2,3,4)
// console.log(myArray[1]);
// myArray.push(5) 
// myArray.push(6) 
// myArray.pop(); //delete the last element in the array
// console.log(myArray)
// myArray.unshift(9)  //adds 9 at zero index
// console.log(myArray)
// myArray.shift()
// console.log(myArray) //delete element at zero index

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3))

// const newArray = myArray.join()
// console.log(myArray)
// console.log(newArray);


const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array)

const arrayOne = array.slice(1,3); //it doesn't change the original array and eleminates the last range value.
console.log("A" ,array);
console.log(arrayOne)

const arrayTwo = array.splice(2,5); //it  changes the original array and includes the last range value.
console.log("B", array);
console.log(arrayTwo);