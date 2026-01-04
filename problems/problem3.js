

function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Examples
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-10, -3, -20])); // -3
console.log(findMax([])); // null
