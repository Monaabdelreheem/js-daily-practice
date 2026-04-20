/* Problem 14: Maximum Distance Between Houses With Different Colors

Task:
- You are given an array of house colors
- Each value represents the color of a house at that index
- Return the maximum distance between two houses with different colors
- The distance between houses i and j is Math.abs(i - j)
*/

function maxDistance(colors) {
  let answer = 0;
  const n = colors.length;

  for (let i = 0; i < n; i++) {
    if (colors[i] !== colors[n - 1]) {
      answer = Math.max(answer, n - 1 - i);
    }

    if (colors[i] !== colors[0]) {
      answer = Math.max(answer, i);
    }
  }

  return answer;
}

// Example tests
console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3]));       // 4
console.log(maxDistance([0, 1]));                // 1

module.exports = maxDistance;
