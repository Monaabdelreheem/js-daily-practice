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
  let names = [];

  for (let user of usersArray) {
    if (user.isActive === true && user.age >= minAge) {
      names.push(user.name);
    }
  }

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
