const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = myNum.map( (item) => item + 10 )

// chaining method
const result = myNum
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num > 41 )

// console.log(result)

const myNum1 = [1, 2, 3, 4]

const sum = myNum1.reduce( (accumulator, currentVal) => accumulator + currentVal, 0 )

// console.log(`Sum is :- ${sum}`)

const product = myNum1.reduce( (acc, currVal) => {
    // console.log(`Accumulator value -> ${acc} and Current value -> ${currVal}`)
    return acc * currVal
}, 1 )

// console.log(`Product is :- ${product}`)


const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "C++ Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 499
    },
    {
        itemName: "Mobile Dev Course",
        price: 4999
    }
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(cartTotal)