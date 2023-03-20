// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Can turn a number into a string using function toString()

// Another helper function is Math.sign() which returns 1 for a positive number and -1 for a negative number entered as an arg.

// Another helper function is parseInt() which takes a string and parses it into a integer.

// Remember to use :
// .split() to turn string into an array of chars.
// .reverse() to reverse the order of the array.
// .join() to rejoin elements of array back into a string.

// Solution 1:
// 1) Take number and turn into a string using toString()
// 2) Take string and .split() into an array
// 3) Take .reverse() and reverse the chars of array
// 4) Take .join() and rejoin elements of array into a string.
// 5) We must assign result to a variable because we still have to parse our string into a number.
// To deal with the negative numbers we have to put a conditional using the Math.sign() function. If n > 0 then do nothing, if n < 0 we multiply by -1 to turn it into a positive number.

// function reverseInt(n) {
//   const reversed_number = n.toString().split("").reverse().join("");

//   if (n < 0) {
//     return parseInt(reversed_number) * -1;
//   }
//   return parseInt(reversed);
// }

// Actually instead of doing the above with the two return statements we can, instead, use the Math.sign() to multiply our number and it will change it if necessary or keep it the same automatically.(b/c it returns -1 for a negative number ie. -22 * -1 = 22)

function reverseInt(n) {
  const reversed_number = n.toString().split("").reverse().join("");

  return parseInt(reversed_number) * Math.sign(n);
}

// You could get rid of the variable and just wrap the entire statement into the parseInt(), but it looks worse, so maybe keep the statements seperate.

// function reverseInt(n) {
//   return pareseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
// }

module.exports = reverseInt;
