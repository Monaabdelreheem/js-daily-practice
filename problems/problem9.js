function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().split(" ").join("");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}