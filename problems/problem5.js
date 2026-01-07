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
