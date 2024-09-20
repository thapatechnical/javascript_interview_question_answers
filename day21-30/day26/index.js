//*---------------------------
//* Coding Challenge
//*---------------------------

//* Write a function to find the nth Fibonacci number.

//? The Fibonacci series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the Fibonacci series looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//todo Fibonacci number is calculated using the following formula:
//todo syntax:  F(n) = F(n-1) + F(n-2), Where, F(1) = F(2) = 1.

const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

// 3 => 1 + 1 => 2

// Example usage:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3
console.log(fibonacci(5)); // Output: 5
