//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ------------------------------------------------------

// Stack(Primitive), Heap(Non Primitive)

let myName = "Rishabh"

let anotherName = myName
anotherName = "Rishu"

console.log(myName)
console.log(anotherName)

// In stack, it forwards a copy of value (kind of call by value method)

let userOne = {
    email: "hello@google.com",
    upi: "hello@paytm"
}

let userTwo = userOne

userTwo.email = "hello@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

// In Heap, it redirects to the same location of that variable (kind of call by refrence method)