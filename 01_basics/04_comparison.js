// console.log(2 > 1);
// console.log(2 == 2);
// console.log(2 >= 2);
// console.log(2 != 2);
// console.log(2 < 0);

// console.log("2" > 1)    
// console.log(2 < "1")
//because of conversion took place 

// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

/* 
   The reason is that an equality check == and comparisons > < >= <= works differently. 
   Comparisons converts null as a number, treating it as 0.
   That's why (ln 12) null == 0 is false but (ln 13) null >= 0 is true. 
*/

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

// These all will return false

// Note:- Prefer not to use null and undefined for any type of comparison

/* for strictly comparing any two values we can use (===), which not not only compare the value but also compares thier dataType without any conversion. */

console.log("2" === 2)
console.log("2" === "2")
console.log(2 === 2)