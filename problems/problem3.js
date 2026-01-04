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
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  // NEW RULE
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