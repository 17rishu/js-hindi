let score = "33"
let mixed = "123abc"

console.log(typeof score)

let valueInScore = Number(score)
let valueInMixed = Number(mixed)

console.log(typeof(valueInScore))
console.log(valueInScore)

console.log(typeof(valueInMixed))
console.log(valueInMixed)   // NaN, which means Not a Number and mixed can not be converted

// "33" => 33
// "123abc" => NaN
// false/true => 0/1
// undefined => undefined
// null => NaN

let str1 = "hello "
let str2 = "rishabh"

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true)  //1
console.log(+"")    //0

let num1, num2, num3

num1 = num2 = num3 = 2*2    //all will be assigned by 2*2

let gameCounter = 100

gameCounter++

console.log(gameCounter)
console.log(gameCounter++)
console.log(gameCounter)