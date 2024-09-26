// ES6

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPass(){
//         return `${this.password}#abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User('chai', 'chai@code.com', '123')

// console.log(userOne.encryptPass())
// console.log(userOne.changeUsername())


// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPass = function(){
    return `${this.password}#abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const usertwo = new User('rishabh', 'rishabh@google.com', 'rish')

console.log(usertwo.changeUsername())
console.log(usertwo.encryptPass())