/* Problem statement: Given an array, write a Javascript function that returns an object that has the structure:
{
  positiveCount: integer,
  negativeSum: integer
}
where the positiveCount is the count of positive numbers and the negativeSum is the sum of negative numbers.

// Ex: [1, 2, -1, -2] -> {positiveCount: 2, negativeSum: -3}
*/

const countPositivesSumNegatives = (array) => {
  let positiveCount = 0;
  let negativeSum = 0;
  for (let num of array) {
    if (num > 0) {
      positiveCount ++;
    }
    if (num < 0) {
     negativeSum += num
    }
  }
  return {
    positiveCount,
    negativeSum
  };
};
console.log(countPositivesSumNegatives([1, 2, -1, -2]));
