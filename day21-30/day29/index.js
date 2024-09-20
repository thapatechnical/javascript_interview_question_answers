//*-----------------------------------------------
//* Coding Challenge: Simple Password Validator
//*-----------------------------------------------

//* Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:

//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.

const simplePasswordValidator = (password) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  for (let char of password) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      hasUpperCase = true;
    } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      hasLowerCase = true;
    } else if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }

  if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
    return false;
  }

  return true;
};

// console.log(!isNaN(5));

console.log(simplePasswordValidator("afkdsfadsf")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1A")); // Output: true
console.log(simplePasswordValidator("afkdsfadsf1Aa")); // Output: true
