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

    const words = str.trim().split(" "); 
    let count = 0;
   
    for (let word of words) {
    if (word !== "") {
      count++;
    }
  }
    return count;
}