//*-------------------------------------------------------------------
//* Programming Challenge: Number of Days Between Two Dates
//*-------------------------------------------------------------------

//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "YYYY-MM-DD".

// Hint
// Days = 24 * 60 * 60 * 1000;

const calculateDaysBetweenDates = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);

  let diff = Math.abs(date2 - date1);
  //   console.log(diff);
  return diff / (24 * 60 * 60 * 1000);
};

console.log(calculateDaysBetweenDates("2024-01-05", "2024-01-31")); // Output: 30
