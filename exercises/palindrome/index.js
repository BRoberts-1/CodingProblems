// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Way #2 - Using array helper function .every() that checks for boolean true or false value that will give us a complete true or false based on our conditional for the whole return value.(ie it is all true or all false and not one by one true, false, true, true.) This is slower and does twice the work as the 1st solution.

// 1) take string and split into an array of chars
// 2) for every char we are given it's index i, to loop over and compare every char with it's mirror element on the other side(ie the end) of the array. This checks if the chars are the same. We get the element on other side using str.length(gives total elements, but we need our indexed element, starting from the last which - i to go through indexes backwards and - 1 because arrays are 0 indexed so we want length - 1 which will correct for our zero index.)

function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Most direct way #1
// 1) take string and split seperate each letter as an element in an array
// 2) reverse the order of the letters of the array
// 3) convert letters in array back to a string
// 4) Use comparison operator to check if our original string equals our reversed string
// 5) Make sure to return the boolean answer

function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

module.exports = palindrome;
