// array 

const numbers = [0, 1, 2, 3, 4, 5]
const heroes = ["ironMan", "thor", "captain", "spiderMan", "wolverine"]

const arr = new Array(100, 200, 300, 400, 500)
// console.log(arr[3])

// arrayMethods

// numbers.push(6)
// numbers.push(10)
// numbers.pop()
// console.log(numbers)


// console.log(numbers)
// console.table(numbers)

// numbers.unshift(9)
// console.log(numbers)

// numbers.shift()

// console.log(numbers.includes(9))
// console.log(numbers.indexOf(3))

// console.log(numbers)
// console.log(typeof numbers)

const newNumbers = numbers.join()       // join the same array but in string form

// console.log(newNumbers)
// console.log(typeof newNumbers)


// slice and splice

console.log("A-> " ,numbers)

const newArr1 = numbers.slice(1, 3)     // slice does not manipulate the original array
console.log(newArr1)

console.log("B-> ", numbers)

const newArr2 = numbers.splice(1, 3)    // splice maniplutes the original array, cut outs the required piece
console.log(newArr2)

console.log("C-> ", numbers)