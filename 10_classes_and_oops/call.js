function getUsername(username){
    this.username = username
    console.log('called')
}

function User(username, email, password){

    getUsername.call(this, username)   // call, is used to hold the reference of current context

    this.email = email
    this.password = password
}

const chai = new User('chai', 'chai@code.com', '123')
console.log(chai)