const name = "Rishabh"
const repoCount = 17

// console.log(name + " " + repoCount)

console.log(`Hey, My name is ${name} and my reposotory count is ${repoCount}`)

const gameName = new String("bgmi-2024-game")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('g'))

const newStr = gameName.substr(0, 5)
console.log(newStr)

const anotherStr = gameName.slice(-8, 5)
console.log(anotherStr)

const newStrOne = "     hello world    "
console.log(newStrOne)
console.log(newStrOne.trim())

const url = "https://rishabh.com/rishabh%20singh"
console.log(url.replace("%20", "-"))
console.log(url.includes("rishabh"))

console.log(gameName.split("-"))