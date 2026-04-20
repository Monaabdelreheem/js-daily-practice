/* Problem 14: Maximum Distance Between Houses With Different Colors

Task:
- You are given an array of house colors
- Each value represents the color of a house at that index
- Return the maximum distance between two houses with different colors
- The distance between houses i and j is Math.abs(i - j)
*/

function maxDistance(colors) {
    // Initialize the answer to 0 and get the number of houses
  let answer = 0;
  const n = colors.length;
// We can check the distance from the first and last house to all other houses
  for (let i = 0; i < n; i++) {
    // If the color of the current house is different from the last house, update the answer
    if (colors[i] !== colors[n - 1]) {
        // The distance from the current house to the last house is n - 1 - i
      answer = Math.max(answer, n - 1 - i);
    }
// If the color of the current house is different from the first house, update the answer
    if (colors[i] !== colors[0]) {
      answer = Math.max(answer, i);
    }
  }
// Return the maximum distance found
  return answer;
}

// Example tests
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3]));       // 4
console.log(maxDistance([0, 1]));                // 1

module.exports = maxDistance;
