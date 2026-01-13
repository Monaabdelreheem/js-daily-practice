/*Write a function called sum

Requirements:

It takes one parameter, an array of numbers

It returns the sum of all numbers in the array

If the array is empty, return 0

Do not use built-in methods like reduce */


function sum(numbers) {
// Fail safely if input is not an array or is an empty array
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 0;
    } 
    // Initialize total to 0 to accumulate the sum of numbers  
  let total = 0;
// Iterate through the array and add each number to total, ensuring we only sum numbers
  for (let i = 0; i < numbers.length; i++) {
    // Check if the current element is a number before adding it to total
    if (typeof numbers[i] === 'number') {
    // Add the current number to total   
    total += numbers[i];
  }
}
// Return the final sum of numbers in the array
  return total;
}


