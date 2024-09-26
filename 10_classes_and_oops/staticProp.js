class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Current user's name is -> ${this.username}`)
    }

    static createId(){
        return Math.floor(Math.random() * 10 + 1)
    }
}

const userOne = new User('hello')
userOne.logMe()
// console.log(userOne.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacherOne = new Teacher('world', 'world@hello.com')

teacherOne.logMe()
// teacherOne.createId()