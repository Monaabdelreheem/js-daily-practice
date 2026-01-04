// 👉 Write a function called countPositives
/* Requirements:
It takes one argument, an array of numbers


It returns how many numbers in the array are positive (greater than 0) */
// Reviewed solution and confirmed logic works correctly

function countPositives(arr) {
  // Fail safely if input is not an array
  if (!Array.isArray(arr)) {
    return 0;
  }

  let count = 0;

  for (let num of arr) {
    if (num > 0) {
      count++;
      /* Use a ternary to add 1 if the number is positive, otherwise add 0
 count += num > 0 ? 1 : 0;*/
    }
  }

  return count;
}

module.exports = countPositives;
