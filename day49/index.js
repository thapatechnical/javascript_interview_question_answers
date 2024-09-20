//*---------------------------------------------------------
//* Programming Challenge: Date Validation
//*------------------------------------------------------------

//? Write a function named isValidDate that takes a single string input representing a date and determines if it is a valid date in the format MM/DD/YYYY. The valid date range should be from January 1, 1900, to December 31, 2099.

//todo  Requirements:
//* Format Check: The date must strictly follow the MM/DD/YYYY format. Ensure that slashes (/) are used as separators.
//? Month Validation: Valid months are from 01 (January) to 12 (December).
//? Day Validation: Days should be valid according to the month:
//? 01-31 for January, March, May, July, August, October, December
//? 01-30 for April, June, September, November
//? 01-28 for February in common years, and 01-29 for February in leap years
//? Year Validation: Years should be within the range from 1900 to 2099.

const isValidDate = (dateFormat) => {
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(
    dateFormat
  );
};

console.log(isValidDate("12/15/2021"));
console.log(isValidDate("02/29/2021"));
console.log(isValidDate("04/31/2020"));
console.log(isValidDate("01/01/1800"));
console.log(isValidDate("13/01/2000"));
console.log(isValidDate("12/31/2099"));

//* Constraints:
//? Do not use date parsing libraries; the objective is to validate using regular expressions and conditional logic.

//* Why we need improvement
//? General Date Validity: This regular expression only checks if the date string is in a specific format and within plausible numerical ranges (e.g., 01-12 for months, 01-31 for days). It does not account for the varying number of days in different months. For example, it would consider "02/31/2020" as valid, though February never has 31 days.

//? Leap Year Consideration: The expression does not handle leap years. February can have 29 days in a leap year, but the regex would incorrectly validate "02/29" as a possible date for any year, regardless of leap year rules.

//? Logical Month and Day Combination: The regex doesn't account for months that have less than 31 days (e.g., it considers "04/31/2021" as valid, but April only has 30 days).
