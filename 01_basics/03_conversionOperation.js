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