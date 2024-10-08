// for of

const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
// }

const greeting = "Hello world!"

// for (const greet of greeting) {

//     if(greet == " ")
//         break

//     console.log(`Current char is ${greet}`);
// }

// Map

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('UK', 'United Kingdom')
map.set('AUS', 'Australia')
map.set('IN', 'India')          // does'nt inserts same value, keep data uniquely

// console.log(map); 

// for (const mp of map) {
//     console.log(mp);
// }

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    py : "Python"
}

// for (const [key, value] of myObj) {
//     console.log(`${key} for ${value}`);
// }


// for in

// for (const key in myObj) {
//     console.log(`${key} is shortcut for ${myObj[key]}`);
// }

// for (const key in arr) {
//     console.log(`Array value is ${arr[key]}`)
// }

// for (const key in map) {
//     console.log(`Map value is ${key}`);  // does'nt work on map, cause it's not iterable
// }

const langs = ["js", "cpp", "rupy", "java", "python"]

// langs.forEach(function(val) {
//     console.log(val)
// })

// langs.forEach((item) => {
//     console.log(item)
// })

function printMe (item){
    console.log(item);
}

// langs.forEach(printMe)

// langs.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        lang: "javascript",
        langFileName: "js"
    },
    {
        lang: "java",
        langFileName: "java"
    },
    {
        lang: "python",
        langFileName: "py"
    },
]

// myCoding.forEach((eachItem) => {
//     console.log(`${eachItem.lang} file extention is ${eachItem.langFileName}`)
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const ans = myNums.forEach( (num) => {
//     // console.log(num)
//     return num > 4
// } )        // forEach does'nt return any value

// console.log(ans)


const result = myNums.filter( (num) => num > 4)

// console.log(result)


const books = [
    {
        title: "Book One", genre: "Fiction", publish: 1992, edition: 2007
    },
    {
        title: "Book Two", genre: "Non-Fiction", publish: 1997, edition: 2011
    },
    {
        title: "Book Three", genre: "History", publish: 1990, edition: 2009
    },
    {
        title: "Book Four", genre: "Sci-Fi", publish: 1996, edition: 2003
    },
    {
        title: "Book Five", genre: "Fiction", publish: 1990, edition: 2000
    },
    {
        title: "Book Six", genre: "Romantic", publish: 1999, edition: 2014
    },
    {
        title: "Book Seven", genre: "Crime-triller", publish: 1998, edition: 2018
    },
    
    {
        title: "Book Eight", genre: "Non-Fiction", publish: 1994, edition: 2017
    }
]

const myGenreBooks = books.filter( (book) => book.genre == "Fiction" )

console.log(myGenreBooks)