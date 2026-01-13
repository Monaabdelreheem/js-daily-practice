/*Write a function called sum

Requirements:

It takes one parameter, an array of numbers

It returns the sum of all numbers in the array

If the array is empty, return 0

Do not use built-in methods like reduce */


function sum(numbers) {

    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    }   
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total;
}


