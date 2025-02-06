/*Step 1*/
const randomDecimal = Math.random();
const range = 33 - 3 + 1; // 31
const randomInRange = randomDecimal * range; // Adjusts the range to get a number between 0 (inclusive) and the value of 'range' (exclusive).
const randomInt = Math.floor(randomInRange); // Convert the decimal number to an integer to get values between 0 and (range - 1).
const shiftValue = randomInt + 3; // Shift the range to get an integer between 3 and 33


/*Step 2*/
const range = 33 - 3 + 1; //Equates to the range of 3 and 33


/*Question 1*/
/*Range equals differnce between max in min. Add one to sum up to total range*/


/*Step 3*/
const randomInRange = randomDecimal * range; // Calculates to number with set range


/*Question 2*/
// Multiplying range and random decimal generates a decimal, which falls between 0 and range


/*Step 4*/
const randomInt = Math.floor(randomInRange); //Rounds randomInRange down


/*Question 3*/
//Math.floor() ensures that we round down

/*Step 5*/
const shiftValue = randomInt + 3; //Adds 3 to randomInt, making shiftValue within desired range 3-33


/*Question 4*/
//shiftValue is a decimal, adding 3 ensures it is now within the desired range