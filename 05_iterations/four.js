
//for in loop with objects
const myObject = {

    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"

}

for (const key in myObject) {
    // console.log(key) this only prints the key

    // console.log(`${key} shortcut is for ${myObject[key]}`)
   
}

//forin loop with arrays

const myArray = ["shiva", "ram", "mike", "vittu"];
 for (const key in myArray) {
    // console.log(myArray[key])s
   
 }


 // for in with map

const map = new Map()
map.set('In', "india");
map.set('US', "united states of america");
map.set('fr', "france");

for (const key in map) {
//    console.log(key)
} // we cannot use for in with maps