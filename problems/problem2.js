// 👉 Write a function called countPositives
/* Requirements:
It takes one argument, an array of numbers


It returns how many numbers in the array are positive (greater than 0) */

function countPositives(arr) {
  // Fail safely if input is not an array
  if (!Array.isArray(arr)) {
    return 0;
  }

  let count = 0;

  for (let num of arr) {
    if (num > 0) {
      count++;
    }
  }

  return count;
}

module.exports = countPositives;

