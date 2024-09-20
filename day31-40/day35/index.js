//*--------------------------------------------------
//* Programming Challenge:  Check Object Emptiness
//*--------------------------------------------------

//? Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//? Your task is to implement the isEmptyObject function using JavaScript and return a message indicating whether the object is empty or not.

//* Constraints:

//? The input object may have any number of properties, including zero.
//? The function should return a message indicating whether the object is empty or not.
//? You should use the provided isEmptyObject function signature without any additional parameters.

const isEmptyObject = (obj) => {
  // return obj.length === 0 ? `it's empty` : `it's not empty`;

  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     return `it's not empty`;
  //   }
  // }
  // return `it's empty`;

  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({ name: "vinod" })); // Output: "it's not empty"
console.log(isEmptyObject({})); // Output: "it's empty"
console.log(isEmptyObject({ keyWithNull: null })); // Output: "it's empty"
console.log(isEmptyObject({ keyWithUndefined: undefined })); // Output: "it's empty"

//* Hint
//// Object.keys() returns an array of keys.
//// Object.values() returns an array of values.
