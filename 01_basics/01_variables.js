const accId = 1234
let accName = "Rishabh Singh"
var accEmail = "17singhrishabh@gmail.com"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

accCity = "Banda"

let accState

//accId = 9870         //const can not be modified
// console.log(accId);

accName = "Hello World"
accEmail = "helloworld123@gmail.com"
accCity = "Computer"

console.log(accId, " ", accName, " ", accEmail, " ", accCity);

// In tabular form
console.table([accId, accName, accEmail, accCity, accState])