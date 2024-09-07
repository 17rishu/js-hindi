// singleton
// Object.create

// objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Rishabh",
    "full name": "Rishabh Singh",
    [mySym]: "myKey1",
    age: 21,
    location: "India",
    email: "rishabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rishabh@chatgpt.com"
// Object.freeze(JsUser)           // after freezing, no changes will reflect on values
JsUser.email = "rishabh@mircosoft.com"

// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello, JS User!!")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}

// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())