//*--------------------------------------
//* Coding Challenge: Truncate a String
//*--------------------------------------

//* Write a function called truncateString that takes two parameters:

//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the truncated string.

const truncateString = (str, count) => {
  // if (count <= 0) {
  //   return str;
  // } else if (str.length > count) {
  //   return str.slice(0, count).concat("...");
  // }

  return count <= 0 ? str : str.slice(0, count).concat("...");
};

// Example usage:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Output: "A-tisket..."

//* Constraints:
//? The input string str will contain only alphanumeric characters and punctuation marks.
//? The maximum length maxLength will be a positive integer.
//? The output string length should not exceed maxLength + 3 characters due to the addition of '...'.
