const b = 200   //const and let are scope friendly, they respect global and local scope
let c = 300
var a = 100     // whereas var does not follow any scope, it share same memory space all over the files


if(true){
    var a = 10
    const b = 20
    let c = 30

    // console.log(a)
    // console.log(b)
    // console.log(c)
}

// console.log(a)      //thats why, here a changes from 100 to 10 due to same memory location
// console.log(b)
// console.log(c)


function one(){
    const username = "rishabh"

    function two(){
        const website = "google"

        console.log(username)
    }

    console.log(website);

    two()
}

// one()

if(1){
    const firstName = "hello"

    if(firstName)
    {
        const lastName = " world"

        console.log(firstName + lastName)
    }
    // console.log(lastName);
}

// console.log(firstName)

console.log(addOne(9));

function addOne(num){
    return num + 1
}

// console.log(addTwo(10));

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(10));