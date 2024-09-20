//*---------------------------
//* Coding Challenge
//*---------------------------

//* Write a function to calculate the factorial of a number.(using Recursion)

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

//* Base Case:
//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

//* Recursive Case:
//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

// 5 => 5 * (4 * (3 * (2 * (factorial(1)))))

// 5 => 5*4*3*2*1
// num => num * num -1 * num-2 * num-3 * num - 4

// Example usage:
console.log(factorial(5)); // Output: 120

// // Base Case:
// // The base case is if (n === 1), where the function returns 1.
// // This condition stops the recursion when n becomes 1, preventing further recursive calls.
// // Recursive Case:
// // The recursive case is return n * factorial(n - 1).
// // This part of the function calls itself with a smaller input (n - 1), moving closer to the base case with each recursive call.
// // It calculates the factorial of n by multiplying n with the factorial of n - 1.
