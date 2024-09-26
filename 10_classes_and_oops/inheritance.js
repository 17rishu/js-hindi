class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Current user's name is -> ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`New course appended by ${this.username}`)
    }
}

const teacherOne = new Teacher('hitesh', 'hitesh@chaiaurcode.com', 'hitesh@123')

teacherOne.addCourse()
teacherOne.logMe()

const userOne = new User('rishabh')

userOne.logMe()
// userOne.addCourse()

console.log(userOne === teacherOne)

console.log(teacherOne instanceof User)
console.log(userOne instanceof User)

console.log(teacherOne instanceof Teacher)
console.log(userOne instanceof Teacher)