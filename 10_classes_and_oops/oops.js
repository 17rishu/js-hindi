// const user = {
//     username: "rishabh",
//     loginCount: 8, 
//     signedIn : true,

//     getAllData : function(){
//         // console.log('All data fetched from DB!')
//         console.log(`Username -> ${this.username}`)
//         console.log(this)   // this, is used to points out the current context which is user object here 
//     }
// }

// console.log(user.username)
// console.log(user.getAllData())
// console.log(this)   // returns empty object {}, cause the global context is empty

function user(username, loginCount, signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    return this
}

const userOne = new user('hello', 10, true)
const userTwo = new user('world', 15, false)

console.log(userOne)
console.log(userTwo)