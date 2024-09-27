// class User{
    // constructor(email, password){
    //     this.email = email
    //     this.password = password
    // }

    // get email(){
    //     return `${this._email.toUpperCase()}`
    // }
    // set email(value){
    //     this._email = value
    // }

    // get password(){
    //     return `${this._password}#abc`
    // }
    // set password(value){
    //     this._password = value
    // }

// }

// const userOne = new User('hello@world.com', '123')

// console.log(userOne)
// console.log(userOne.password)
// console.log(userOne.email)


// get and set method through function

// function User(email, password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return `${this._email.toUpperCase()}`
//         },
//         set: function(value){
//             this._email = value
//         }
//     })

//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return `${this._password}@123`
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const userTwo = new User('chai@code.com', 'chai')

// console.log(userTwo)
// console.log(userTwo.email)
// console.log(userTwo.password)



// get and set method through objects

const User = {
    _email: 'rishabh@apple.com',
    _password: 'rish',

    get email(){
        return `${this._email.toUpperCase()}`
    },
    set email(value){
        this._email = value
    },

    get password(){
        return `${this._password}#123`
    }, 
    set password(value){
        this._password = value
    }
}

const userThree = Object.create(User)
console.log(userThree.email)
console.log(userThree.password)