// 👉 Write a function called toCamelCase
// It takes one parameter, a string
/* The string may contain words separated by:

hyphens -

underscores _

It should return the string converted to camelCase */

function toCamelCase(str) {
  // type safety check / fail safely
  if (typeof str !== 'string') {
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

module.exports = toCamelCase;
