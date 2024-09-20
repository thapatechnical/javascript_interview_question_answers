//*---------------------------------------------------------
//* Programming Challenge: Simple Currency Converter
//*---------------------------------------------------------

//?  Write  a function to convert an amount from one currency to another using static exchange rates.

//* Requirements:
//? Write a function named convertCurrency that takes three parameters: amount, fromCurrency, and toCurrency.
//? Use a fixed object to store exchange rates relative to a base currency (e.g., USD).
//? The function should return the converted amount in the target currency.
//? Handle conversion through USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.

const rates = {
  USD: 1, // Base currency
  EUR: 0.9, // 1 USD = 0.9 EUR
  GBP: 0.8, // 1 USD = 0.8 GBP
  INR: 82, // 1 USD = 82 INR
};

// usd = 1   = 0.9
//       100 = ?

const convertCurrency = (amount, fC, tC) => {
  let amountInUSD = 0;
  if (fC !== "USD") {
    amountInUSD = amount / rates[fC];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (tC !== "USD") {
    convertedAmount = amountInUSD * rates[tC];
  } else {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};

// Example usage:
console.log(convertCurrency(100, "INR", "EUR")); // Output will depend on the rates provided
