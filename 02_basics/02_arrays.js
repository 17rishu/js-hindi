const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][2])

// const allHeros = marvel_heros.concat(dc_heros)

// console.log(allHeros.sort())

// const allHeros2 = [...marvel_heros, ...dc_heros]

// console.log(allHeros2)

const anotherArr = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11, 12]]]

const inSingleArray = anotherArr.flat(Infinity)

console.log(inSingleArray)

console.log(Array.isArray("Rishabh"))
console.log(Array.from("Rishabh"))
console.log(Array.from({name: "Rishabh"}))  // intresting case, u have to clarify on which basis u want the array to be. On basis of keys or values.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))