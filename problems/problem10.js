/* Problem 10: Sort an Array of Numbers
Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
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