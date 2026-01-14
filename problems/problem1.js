// 👉 Write a function called toCamelCase
// It takes one parameter, a string
/* The string may contain words separated by:

hyphens -

underscores _

It should return the string converted to camelCase */

function toCamelCase(str) {
  // type safety check / fail safely
  if (typeof str !== 'string') {
    // If the input is not a string, return an empty string
    return '';
  }

  // empty string check
  if (str === "") {
    return "";
  }

  return str
    .split(/[-_]/) // Split the string by hyphens or underscores
    // handle multiple separators in a row by filtering out empty strings
    .filter(word => word !== "")
    // Map over the words and convert to camelCase
    .map((word, index) => {
      // First word stays as is
      if (index === 0) {
        return word;
      }

      // Capitalize first letter of subsequent words
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(''); // Join all words together without spaces
}
// Examples
// console.log(toCamelCase("hello-world")); // "helloWorld"
// console.log(toCamelCase("this_is_a_test")); // "thisIsATest"
// console.log(toCamelCase("multiple--separators__test")); // "multipleSeparatorsTest"
// console.log(toCamelCase("alreadyCamelCase")); // "alreadyCamelCase"
// console.log(toCamelCase("")); // ""
// console.log(toCamelCase(123)); // ""
module.exports = toCamelCase;


