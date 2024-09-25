const heroes = ['thor', 'spiderman']

const heroPowers = {
    thor: 'hammer',
    spiderman: 'spidy sense',

    getSpidyPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }   
}

Object.prototype.greet = function(){
    console.log('Hey, there!!')
}

// heroPowers.getSpidyPower()
// heroPowers.greet()
// heroes.greet()  // method created under Object prototype can be accessed throughout all the objects(array, function, object, etc)

Array.prototype.arrGreet = function(){
    console.log('hello, array!!')
}

// heroes.arrGreet()
// heroPowers.arrGreet()   // method created under Array prototype can only be accessed through array

// inheritance

const User = {
    name: 'chai',
    email: 'chai@code.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailabe: false
}

const TASupport = {
    makeAssignment: true,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiaurCode      '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length of given string is ${this.trim().length}`)
}

anotherUsername.trueLength()
'rishabh    '.trueLength()
'hello world!    '.trueLength()