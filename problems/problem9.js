/* Write a function called isPalindrome.

Requirements

It takes one parameter, a string

It returns true if the string is a palindrome

It returns false otherwise

Ignore spaces and case

If the input is not a string, return false*/

function isPalindrome(str) {
if (typeof str !== "string" || str.trim().length === 0) {
    return false;
  }

  const cleanedStr = str.toLowerCase().split(" ").join("");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}