//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? 18: Write a function to convert a string to camelCase & snake_case.

const toCamelCase = (str) => {
  return str
    .trim()
    .split(" ")
    .map((curElem, index) => {
      if (index === 0) {
        return curElem.toLowerCase();
      } else {
        return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
      }
    })
    .join("");
};

// Example usage:
console.log(toCamelCase("hello world thApa")); // Output: helloWorld

//todo HomeWork:
// console.log(toSnakeCase("helloWorld")); // Output: hello_world
