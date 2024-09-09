
function sayMyName () {
    console.log("R")
    console.log("I")
    console.log("S")
    console.log("H")
    console.log("A")
    console.log("B")
    console.log("H")
}

// sayMyName()

// function addTwoNum(num1, num2) {
//     console.log(num1 + num2)
// }

// const res = addTwoNum(10, 20)

// console.log(res);

function addTwoNum2(num1, num2) {
    return num1 + num2
}

const res2 = addTwoNum2(10, 20)
 
// console.log(res2);


function loginUserMessage(username = "user"){   // default parameter, in case user does'nt pass any input
    if(!username)
        return "some user just logged in!!"
    return `${username}, just logged in!!`
}

const message = loginUserMessage()

// console.log(message);

function calculateCartPrice(product1Price, product2Price, ...restProductsPrice){
    return restProductsPrice
}

// console.log(calculateCartPrice(200, 400 ,800, 2000, 980))

const user = {
    username: "Rishabh",
    role: "SDE"
}

function handleObject(anyobject){
    return `Username is ${anyobject.username} and his role is ${anyobject.role}`
}

// console.log(handleObject(user))

// console.log(handleObject({
//     username: "some user",
//     role: "anonymous"
// }))

const myNewArray = [200, 100, 400, 600, 300]

function getThirdValue(getAnyArray){
    return getAnyArray[2]
}

// console.log(getThirdValue(myNewArray))

console.log(getThirdValue(["hello", "world", "how", "going", "on"]));
