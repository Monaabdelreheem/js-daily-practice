/* Problem statement: Given an array, write a Javascript function that returns an object that has the structure:
{
  positiveCount: integer,
  negativeSum: integer
}
where the positiveCount is the count of positive numbers and the negativeSum is the sum of negative numbers.

// Ex: [1, 2, -1, -2] -> {positiveCount: 2, negativeSum: -3}
*/

// Reviewed solution and confirmed logic works correctly
// Solution 1: Using a single loop to count positives and sum negatives
const countPositivesSumNegatives = (array) => {

  let positiveCount = 0;
  let negativeSum = 0;
  // iterate through the array and update positiveCount and negativeSum accordingly
  for (let num of array) {
    // Check if the number is positive and increment positiveCount
    if (num > 0) {
      positiveCount ++;
    }
    // Check if the number is negative and add it to negativeSum
    if (num < 0) {
     negativeSum += num
    }
  }
  // Return the result as an object with positiveCount and negativeSum
  return {
    positiveCount,
    negativeSum
  };
};
// print the result of the function with the example input
console.log(countPositivesSumNegatives([1, 2, -1, -2]));

//example input with no positives
console.log(countPositivesSumNegatives([-1, -2, -3]));

//example input with no negatives
console.log(countPositivesSumNegatives([1, 2, 3]));