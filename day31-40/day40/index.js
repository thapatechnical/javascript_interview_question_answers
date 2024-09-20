//*-------------------------------------------------------------------
//* Programming Challenge:  Simple Bar Chart from Array Data
//*-------------------------------------------------------------------

//? Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

// const generateBarChart = (arr) => {
//   const newArr = arr.map((curElem, index) => {
//     let star = "";
//     let number = 0;
//     while (number < curElem) {
//       star = star + "*";
//       number++;
//     }
//     return ` ${index + 1}: ${star}`;
//   });
//   return newArr.join("\n");
// };

// 2nd alternate solution
const generateBarChart = (arr) => {
  return arr
    .map((curElem, index) => {
      return ` ${index + 1}: ${"*".repeat(curElem)}`;
    })
    .join("\n");
};

console.log(generateBarChart([5, 3, 9, 2]));

// 1: *****
// 2: ***
// 3: *********
// 4: **
