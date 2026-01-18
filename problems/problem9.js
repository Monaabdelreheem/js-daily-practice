/* Write a function called isPalindrome.

Requirements

It takes one parameter, a string

It returns true if the string is a palindrome

It returns false otherwise

Ignore spaces and case

If the input is not a string, return false*/

function isPalindrome(str) {
    // Fail safely if input is not a string or is an empty string
if (typeof str !== "string" || str.trim().length === 0) {
    return false;
  }
// Clean the string by converting it to lowercase and removing spaces, then check if it's the same as its reverse
  const cleanedStr = str.toLowerCase().split(" ").join("");
  // Create a reversed version of the cleaned string
  const reversedStr = cleanedStr.split("").reverse().join("");
  // Return true if the cleaned string is the same as its reversed version, indicating it's a palindrome
  return cleanedStr === reversedStr;
}

// Example tests
console.log(isPalindrome("racecar"));   
console.log(isPalindrome("Race Car"));  
console.log(isPalindrome("hello"));     
console.log(isPalindrome(""));          
console.log(isPalindrome(12321));       
