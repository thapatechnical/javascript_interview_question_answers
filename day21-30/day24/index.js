//*---------------------------
//* Coding Challenge: Find the Mode in an Array
//*---------------------------

//? Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

function findMode(arr) {
  // Your code here
  let counts = {};
  let maxNum = 0;
  let mode;

  for (let element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > maxNum) {
      maxNum = counts[element];
      mode = element;
    }
  }
  console.log(counts);
  return mode;
}

// Example usage:
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2

//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).
