const accountId=144553
let accountEmail="kulkarni@123"
var accountPassword="123465"
accountCity="palghar"
let accountRate;

// accountId=123   not allowed 

accountEmail="kulk@123"
accountPassword="12"
accountCity="Virar"

/*
prefer not to use var beacuase of issue in block scope and functional scope 
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);


console.table([accountId,accountEmail,accountPassword,accountCity,accountRate])



