// 👉 Write a function called countPositives
/* Requirements:
It takes one argument, an array of numbers


It returns how many numbers in the array are positive (greater than 0) */
// Reviewed solution and confirmed logic works correctly

function countPositives(arr) {
  // Fail safely if input is not an array or is empty
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
// Initialize count to 0 to keep track of the number of positive numbers in the array
  let count = 0;
// Iterate through the array and count how many numbers are positive
  for (let num of arr) {
    // Check if the element is a number and greater than 0
    if (typeof num === "number" && num > 0) {
        // Increment count if the number is positive
      count++;
      /* Use a ternary to add 1 if the number is positive, otherwise add 0
 count += num > 0 ? 1 : 0;*/
    }
  }

  return count;
}

module.exports = countPositives;
// Examples
// console.log(countPositives([1, -2, 3, 4, -5])); // 3
// console.log(countPositives([-1, -2, -3])); // 0
// console.log(countPositives([0, 2, 4, 6])); // 3
// console.log(countPositives("not an array")); // 0
