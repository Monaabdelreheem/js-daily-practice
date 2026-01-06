// Problem 4: Count Vowels

/*
Write a function called countVowels.

Requirements:
- It takes one parameter, a string
- It returns the number of vowels (a, e, i, o, u) in the string
- If the input is not a valid string, return 0
*/
function countVowels(str) {
    // Fail safely if input is not a string
    if (typeof str !== 'string' || str.trim().length === 0) {
        return 0;
    }
    // define vowels and initialize count
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    str = str.toLowerCase(); // Convert the string to lowercase for case-insensitive comparison

// Iterate through each character in the string and check if it's a vowel
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Examples
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("AEIOU")); // 5
console.log(countVowels("xyz")); // 0
console.log(countVowels(12345)); // 0
console.log(countVowels("")); // 0  
console.log(countVowels("   ")); // 0


module.exports = countVowels;