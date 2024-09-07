// const tinderUser = new Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@google.com",
    fullname: {
        userFullName: {
            firstName: "Rishabh",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj3 = {7: "g", 8: "h", 9: "i"}

// const targetObj = Object.assign(obj1, obj2, obj3) // it assigns all the values to the first given object

// const targetObj = Object.assign({}, obj1, obj2, obj3) //thats why we can give an empty object to avoid data inaccuracy.

   
// console.log(targetObj)
// console.log(obj1)

const obj4 = {...obj1, ...obj2}

// console.log(obj4)

const arr = [
    {
        id: "1",
        email: "rishabh@google.com"
    },
    {
        id: "2",
        email: "rishabh@microsoft.com"
    },
    {
        id: "3",
        email: "rishabh@linkedin.com"
    }
]

// console.log(arr[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))    // returns keys and values in array form, which can be further mapped for data usage
// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser))   // returns keys and values in array of array form

// console.log(tinderUser.hasOwnProperty('name'))


const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course   // obejct de-structring

console.log(instructor)