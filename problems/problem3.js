/*
🧩 Problem 3 – findMax (Array + Logic)

Write a function called findMax.

Requirements:
- It takes one parameter, an array of numbers
- It returns the largest number in the array
- If the input is not a valid array or is empty, return null
- NEW RULE: If the largest number is negative, return 0 instead
*/

function findMax(numbers) {
    // Fail safely if input is not an array or is empty
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  let max = numbers[0];
// Iterate through the array to find the maximum number
  for (let i = 1; i < numbers.length; i++) {
    // Check if the current number is greater than max
    if (numbers[i] > max) {
        // Update max if current number is greater
      max = numbers[i];
    }
  }

  // NEW RULE check: If max is negative, return 0 instead
  if (max < 0) {
    return 0;
  }

  return max;
}

// Examples
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-10, -3, -20])); // -3
console.log(findMax([])); // null
console.log(findMax([-1, -2, -3]));   // 0