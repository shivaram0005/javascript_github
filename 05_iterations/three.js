// for of
const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
    // console.log(num)
}

const greetings = "hello world"
for (const str of greetings) {
    // console.log(str)
}


// Maps
// unique values

const map = new Map()
map.set('In', "india");
map.set('US', "united states of america");
map.set('fr', "france");
// console.log(map) 

for (const [key, value] of map) {

    // console.log(key)
    console.log(value)
    
}


// we cannot use for-of on objects

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key)
    
}