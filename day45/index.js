//*-------------------------------------------------------------------
//* Programming Challenge: Password Validation Coding Problem
//*-------------------------------------------------------------------

//? Create a function validatePassword that checks if a given password string meets the following criteria:

//?todo  Minimum Length: The password must be at least 8 characters long.
//?todo Case Requirements: The password must include at least one uppercase letter and at least one lowercase letter.
//?todo Numerical Requirement: The password must contain at least one digit.
//?todo Special Character Requirement: The password must have at least one special character from the set !@#$%^&*()-_+=.

//* Requirements
//? The function should return true if the password meets all the criteria, and false otherwise.
//? You are to implement this function using JavaScript.

function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

// Example 1
console.log(validatePassword("Pass123!")); // Output: true

// Example 2
console.log(validatePassword("password")); // Output: false (fails due to lack of uppercase, digits, and special characters)

// Example 3
console.log(validatePassword("12345678")); // Output: false (fails due to lack of uppercase, lowercase, and special characters)

// Example 4
console.log(validatePassword("P@ssw0rd")); // Output: true
