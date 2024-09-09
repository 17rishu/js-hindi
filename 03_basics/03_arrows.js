const user = {
    username: "Rishabh",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, Welocome to our website!!`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Rishu"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     const username = "hello"

//     console.log(this.username);
// }


const chai = () =>{
    const username = "Hello world"

    console.log(this)
}

// chai()

// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }


// const addTwoNum = (num1, num2) => num1 + num2       // implicit return statement

const addTwoNum = (num1, num2) => (num1 + num2)

console.log(addTwoNum(10, 11));

const objectImplicitReturn = () => ({username: "Rishabh"})

console.log(objectImplicitReturn());