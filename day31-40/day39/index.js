//*-------------------------------------------------------------------
//* Programming Challenge: Calculate Age from birthDate
//*-------------------------------------------------------------------

//? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".

//* Requirements:
//? The function must handle leap years and varying numbers of days in each month accurately.
//? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
//? The output should be the age in whole years.

// 1: currentDate()  ✅
// 2: currentDate.year & birthdate.year()✅
// 3: age = curYear - BirthYear => 34✅
// 4:  month of each
// 5:  2024 = 34 tab jan wo  2024-05-03✅

// june and june && 5 kab 15

const calculateAge = (birthDate) => {
  let todayDate = new Date();
  birthDate = new Date(birthDate);

  // step 2
  let age = todayDate.getFullYear() - birthDate.getFullYear();
  //   console.log(age);

  // step 3
  let monthDiff = todayDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

console.log(calculateAge("1990-05-15")); // Output will vary depending on the current date

//todo Hint
//? Checks if the current month is less than the birth month or if it's the same month but today's date is before the birth date. If either condition is true, it subtracts one from the age because the birthday has not yet occurred this year
