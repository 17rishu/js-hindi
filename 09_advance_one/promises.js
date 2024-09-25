// const promise1 = new Promise((resolve, reject)=>{
//     // Do any async task
//     // Do any DB call, cryptography, network related task

//     setTimeout(()=>{
//         console.log("Async Task is completed!!")
//         resolve()
//     }, 1000)
// })

// promise1.then(()=>{
//     console.log("Promise comsumed!")
// })

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task 2 is completed!!")
//         resolve()
//     },1500)
// }).then(()=>{
//     console.log("2nd Promise is consumed!")
// })

// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({username:"hello", email:"hello@world.com"})
//     },1000)
// })

// promise3.then((user)=>{
//     console.log(user)
// })

// const promise4 = new Promise((resolve, reject)=>{

//     let error = false

//     setTimeout(()=>{
//         if(!error)
//             resolve({username:'chai', password:'code'})
//         else    
//             reject('Something went wrong!')
//     }, 1000)
// })

// promise4.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=> console.log('Promise is consumed! Not sure resolved or rejected'))

// const promise5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true

//         if(!error)
//             resolve({username: 'rishabh', password: '123'})
//         else    
//             reject('Something went wrong!')
//     }, 1000)
// })

// async function consumePromise5() {
//     try {
//         const response = await promise5
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise5()

// async function getAllUSers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
        
//         console.log(data)
//     } catch (error) {
//         console.log(`Error : ${error}`)
//     }
// }

// getAllUSers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    return data[0].name
})
.then((name)=>{    
    console.log(name)
})
.catch((error)=> console.log('error'))