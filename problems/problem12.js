/* Problem 12: Break Camel Casing

Task:
- Take a camelCase string as input
- Insert a space before each uppercase letter
- Do not modify lowercase letters
- Preserve the original order of characters
- Return the updated string
- If the string is empty, return an empty string
*/


function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

// Example tests
console.log(solution("camelCasing")); 
console.log(solution("identifier"));  
console.log(solution(""));            
