function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 10

// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)

function User(username, score){
    this.username = username
    this.score = score
}

User.prototype.increment = function(){
    this.score++
}

User.prototype.printMe = function(){
    console.log(`${this.username} price is ${this.score}`)
}

const chai = new User('chai', 12)
const tea = new User('tea', 25)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scene when new keyboard is used:

A new object is created: The new keyword initiates the creation of a new JS object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with specified arguments and this bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it does'nt return a non-primitive value(object, array, function, etc), the newly created object is returned.

*/

