//*---------------------------
//* Coding Challenge
//*---------------------------

//? Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//todo  Tips
//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.

const findMedian = (arr) => {
  // Step 1: Sort the array
  arr.sort((a, b) => a - b);
  // Step 2: Check if the array length is odd or even
  let length = arr.length;
  let mid = Math.floor(length / 2);
  //   console.log(mid);
  if (length % 2 === 0) {
    // Step 3 for even length array
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    // Step 4 for odd length array
    return arr[mid];
  }
};

console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6
