const score = 100
// console.log(score)

const balance = new Number(400)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNum = 23.8769
// console.log(otherNum.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString("en-IN"))    // use 'en-In' for indian standards or it will take US standards by default

// ++++++++++++++++ Maths ++++++++++++++++++

console.log(Math)

// console.log(Math.abs(-69))

// console.log(Math.round(4.2))
// console.log(Math.round(4.9))

// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))

// console.log(Math.max(1, 2, 3, 4, 5))
// console.log(Math.min(0, 1, 2, 3, 4))

console.log(Math.random())      // random valu b/w 0 and 1

console.log((Math.random()* 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min))
// example for dice range b/w 1 to 6