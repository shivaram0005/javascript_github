const accountId = 292953
let accontEmail = "shiva@google.com";
var accountPassword = "12345";
accountCity = "hyderabad"; //even we dont specify any variable it reserves some space in memeory
let accountState;   // it gives undefined


// accountId = 43;  //cannot change the value of const keyword
// console.log(accountId);

accontEmail = "shiva@gmail.com";
accountPassword = "3232";
accountCity = "bengaluru"

console.table([accountId, accontEmail, accountPassword, accountCity, accountState])

/*
    prefer not to use var, because of issue in block scope and functional scope.
*/