/* Problem 11: Roman Numerals Decoder

Task:
- Create a function that takes a Roman numeral string and returns its decimal value
- No need to validate the Roman numeral format
*/

// decimal values of Roman numerals
function romanToInt(roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Initialize total to 0
  let total = 0;

  // Iterate through each character in the Roman numeral string
  for (let i = 0; i < roman.length; i++) {
    // Get the decimal value of the current and next Roman numeral
    const current = values[roman[i]];
    // Get the decimal value of the next Roman numeral, if it exists
    const next = values[roman[i + 1]];

    // If the current numeral is less than the next, subtract it from total
    // Otherwise, add it to total
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  
// Return the final decimal value
  return total;
}
