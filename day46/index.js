//*-------------------------------------------------------------------
//* Programming Challenge: Mobile Number Validation
//*-------------------------------------------------------------------
//? Write a function that takes a string as input and returns true if the string represents a valid Indian mobile number, and false otherwise.

//* Validation Requirements:
//? Length: An Indian mobile number should have exactly 10 digits.
//? Starting Digit: The number must start with 6, 7, 8, or 9, which are valid starting digits for Indian mobile numbers.

const validateIndianMobileNumber = (number) => {
  return /^[6-9][\d]{9}$/.test(number);
};

// Test Cases
console.log(validateIndianMobileNumber("9876543210")); // Expected output: true
console.log(validateIndianMobileNumber("0123456789")); // Expected output: false
console.log(validateIndianMobileNumber("897654321")); // Expected output: false
console.log(validateIndianMobileNumber("78965432107")); // Expected output: false

//* Constraints:
//? The input string may contain numeric characters only.
//? Assume input strings will not include any country codes.
