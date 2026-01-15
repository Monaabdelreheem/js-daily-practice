/*
You are given an array of user objects. Each user has:
- id (number)
- name (string)
- age (number)
- isActive (boolean)

Return an array of names of users who:
 - Are active (isActive === true)
 - Have an age greater than or equal to minAge

The returned array should be in the same order as the input.

Ex:
const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: true },
  { id: 3, name: "Charlie", age: 30, isActive: false },
  { id: 4, name: "Diana", age: 22, isActive: true }
];

getActiveUserNames(users, 21);
*/


function getActiveUserNames(usersArray, minAge) {
    // define an empty array to store the names of active users who meet the age requirement
  let names = [];

// Iterate through the users array and check if each user is active and meets the age requirement
  for (let user of usersArray) {
    // Check if the user is active and has an age greater than or equal to minAge
    if (user.isActive === true && user.age >= minAge) {
        // If the user meets the criteria, add their name to the names array
      names.push(user.name);
    }
  }
// Return the array of names of active users who meet the age requirement
  return names;
}


// When you're ready to test your code, uncomment these lines:
// const users = [
//   { id: 1, name: "Alice", age: 25, isActive: true },
//   { id: 2, name: "Bob", age: 17, isActive: true },
//   { id: 3, name: "Charlie", age: 30, isActive: false },
//   { id: 4, name: "Diana", age: 22, isActive: true }
// ];
// console.log("Result:", getActiveUserNames(users, 21));
