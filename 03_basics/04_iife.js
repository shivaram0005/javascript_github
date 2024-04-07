// Immediately invoked function expression ( IIFE  )
( function chai () {
    //named iife
    console.log("database connected");
    
} ) ();



( (name) => {
    //arrow iife 
    console.log(`my name is ${name}`)
})("shivaram")