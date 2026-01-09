/* Write a function called countWords

Requirements

It takes one parameter, a string

It returns the number of words in the string

Words are separated by spaces

Extra spaces at the beginning, end, or between words should not count   */

function countWords(str) {
    // Fail safely if input is not a string
    if (typeof str !== 'string' || str.trim().length === 0) {
        return 0;
    }
// Split the string into words using space as a separator and filter out empty strings
    const words = str.trim().split(" "); 
    // Count the number of non-empty words
    let count = 0;
   // Iterate through the array of words and count non-empty strings
    for (let word of words) {
        // Check if the word is not an empty string before counting
    if (word !== "") {
        // Increment count for each non-empty word
      count++;
    }
  }
  // return the final count of words
    return count;
}