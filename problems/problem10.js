/* Problem 10: Sort an Array of Numbers

Task:
- Accept an array of numbers as input
- Return a new array sorted in ascending order
- Do not mutate the original array
- If the input is null or not an array, return an empty array
*/


function solution(nums) {
    // Check if the input is a valid array 
    if (!Array.isArray(nums)) {
        // If not, return an empty array
return [];
    }
    // Sort the array in ascending order and return a new array
    return nums.slice().sort((a, b) => a - b);
}


// Task 3: Example test cases
console.log(solution([1, 2, 10, 50, 5])); 
console.log(solution(null));              
console.log(solution([]));       