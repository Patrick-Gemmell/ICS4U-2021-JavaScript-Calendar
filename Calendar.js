// Created By: Patrick
// Created On: April 2021
// This program tells the user the day of the
//   week based on a date the user inputs.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// This function finds the day of the week based on a date the user inputs.
/**
 * This function finds the day of the week based on a date the user inputs.
 * @param {int} date
 * @param {int} month
 * @param {int} year
 * @param {int} centuryCode
 * @param {int} addingNumber
 * @return {int}
 */
function findWeekday(date, month, year, centuryCode, addingNumber) {
  // Calculating the first number for the century code
  let firstVariable = 0;
  if (centuryCode % 4 == 0) {
    firstVariable = 2;
  } else if (centuryCode % 4 == 1) {
    firstVariable = 0;
  } else if (centuryCode % 4 == 2) {
    firstVariable = 5;
  } else if (centuryCode % 4 == 3) {
    firstVariable = 3;
  } else {
    console.log('ERROR');
  }

  // Calculating the second variable
  const secondVariable = Math.floor(addingNumber / 12);

  // Calculating the third variable
  const thirdVariable = addingNumber % 12;

  // Calculating the fourth variable
  const fourthVariable = Math.floor(thirdVariable / 4);

  // Calculating final variable and reducing it to find the doomsday
  const fifthVariable = firstVariable + secondVariable +
                       thirdVariable + fourthVariable;

  while (fifthVariable > 6) {
    fifthVariable = fifthVariable - 7;
  }

  // Finding the doomsday based on the month
  let doomsdayDate = 0;
  switch (month) {
    case 1:
      if (year % 4 == 0) {
        doomsdayDate = 4;
      } else {
        doomsdayDate = 3;
      }
      break;
    case 2:
      if (year % 4 == 0) {
        doomsdayDate = 29;
      } else {
        doomsdayDate = 28;
      }
      break;
    case 3:
      doomsdayDate = 14;
      break;
    case 4:
      doomsdayDate = 4;
      break;
    case 5:
      doomsdayDate = 9;
      break;
    case 6:
      doomsdayDate = 6;
      break;
    case 7:
      doomsdayDate = 11;
      break;
    case 8:
      doomsdayDate = 8;
      break;
    case 9:
      doomsdayDate = 5;
      break;
    case 10:
      doomsdayDate = 10;
      break;
    case 11:
      doomsdayDate = 7;
      break;
    case 12:
      doomsdayDate = 12;
      break;
    default:
      doomsdayDate = 0;
  }

  // This block finds a numeric value for the day of the week
  if (date < doomsdayDate) {
    while (date < doomsdayDate) {
      if (fifthVariable <= 0) {
        fifthVariable = 6;
        date = date + 1;
      } else {
        fifthVariable = fifthVariable - 1;
        date = date + 1;
      }
    }
  } else if (date > doomsdayDate) {
    while (date > doomsdayDate) {
      if (fifthVariable >= 6) {
        fifthVariable = 0;
        date = date - 1;
      } else {
        fifthVariable = fifthVariable + 1;
        date = date - 1;
      }
    }
  } else {
    console.log('ERROR');
  }

  // This block finds the day of the week and returns its value
  let weekDayReturn = null;
  switch (fifthVariable) {
    case 0:
      weekDayReturn = 'Sunday';
      break;
    case 1:
      weekDayReturn = 'Monday';
      break;
    case 2:
      weekDayReturn = 'Tuesday';
      break;
    case 3:
      weekDayReturn = 'Wednesday';
      break;
    case 4:
      weekDayReturn = 'Thursday';
      break;
    case 5:
      weekDayReturn = 'Friday';
      break;
    case 6:
      weekDayReturn = 'Saturday';
      break;
    default:
      weekDayReturn = null;
  }
  return weekDayReturn;
}

try {
  // Input for the date number
  const dateInput = prompt('Enter the date number: ');
  console.log();

  // Input for the month number
  const monthInput = prompt('Enter the month (number): ');
  console.log();

  // Input for the year
  const yearInput = prompt('Enter the year (four numbers): ');
  console.log();

  // Process
  // Splitting the year string in half to make for easier calculations
  const firstHalfYearStr = yearInput.slice(0, 2);
  const secondHalfYearStr = yearInput.slice(2, 4);

  // Ensuring all the variables are passed as integers
  const userDate = parseInt(dateInput, 10);
  const userMonth = parseInt(monthInput, 10);
  const userYear = parseInt(yearInput, 10);
  const firstHalfYear = parseInt(firstHalfYearStr, 10);
  const secondHalfYear = parseInt(secondHalfYearStr, 10);

  // Calling the function that will calculate the day of the week
  const dayOfTheWeek = findWeekday(userDate, userMonth, userYear,
      firstHalfYear, secondHalfYear);

  // Output
  console.log();
  console.log('The day of the week is', dayOfTheWeek);

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log('ERROR: Invalid Input');
}
