// dates

let myDate = new Date()

// console.log(typeof myDate)

// console.log(myDate.toString())
// console.log(myDate.toLocaleString())

// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

// console.log(myDate.toISOString())
// console.log(myDate.toJSON())

// let myCreatedDate = new Date(2024, 1, 17)
let myCreatedDate = new Date("02-17-2001")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myTimeStamp/1000))

myCreatedDate.toLocaleString('default', {
    weekday: "long"
})

console.log(myCreatedDate.toString());
