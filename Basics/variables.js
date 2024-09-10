//uses camelCase

const accountId = 1445567 //fixed value not changed
let accountEmail = "xyx@google,com"
var accountPassword = "12345"
accountCity = "Jaipur" //defined but not the correct way to assign the variable
let accountState;

// accountId = 2 //not allowed

accountEmail = "dc@gmail.com"
accountPassword = "2387"
accountCity = "Noida"

//console.log(accountId);

/* Prefer not to use var becoz of issue in block scope and functional scope  */

console.log([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountCity, accountPassword, accountState])




