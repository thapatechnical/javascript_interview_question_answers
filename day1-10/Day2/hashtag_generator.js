//*-------------------------------------------
//*  Programming Question: Hash Tag Generator
//*-------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map(
    (curElem) =>
      // curElem.replace(curElem[0], curElem[0].toUpperCase())
      curElem.charAt(0).toUpperCase() + curElem.slice(1)
  );
  str = `#${str.join("")}`;
  console.log(str);
  return str;
};

console.log(generateHash("my name is thapa technical"));
// o/p = "#MyNameIsThapaTechnical"
