/*
 * File: DateLib.js
 * --------------------
 * The library exports the functions monthName and isLeapYear, along with
 * a set of constants giving names to the months of the year. It is not
 * intended as a complete set of facilities for dates but instead serves
 * as an example of a JavaScript library.
 */

/* Constants for the names of the months */
const JANUARY = 1;
const FEBRUARY = 2;
const MARCH = 3;
const APRIL = 4;
const MAY = 5;
const JUNE = 6;
const JULY = 7;
const AUGUST = 8;
const SEPTEMBER = 9;
const OCTOBER = 10;
const NOVEMBER = 11;
const DECEMBER = 12;

/*
 * Converts a numeric month in the range 1 to 12 into its name.
 */

function monthName(month) {
  switch (month) {
    case JANUARY: return "January";
    case FEBRUARY: return "February";
    case MARCH: return "March";
    case APRIL: return "April";
    case MAY: return "May";
    case JUNE: return "June";
    case JULY: return "July";
    case AUGUST: return "August";
    case SEPTEMBER: return "September";
    case OCTOBER: return "October";
    case NOVEMBER: return "November";
    case DECEMBER: return "December";
    default: return undefined;
  }
}

function monthNumber(month) {
  switch(month.toUpperCase()) {
    case "JANUARY": return JANUARY;
    case "FEBRUARY": return FEBRUARY;
    case "MARCH": return MARCH;
    case "APRIL": return APRIL;
    case "MAY": return MAY;
    case "JUNE": return JUNE;
    case "JULY": return JULY;
    case "AUGUST": return AUGUST;
    case "SEPTEMBER": return SEPTEMBER;
    case "OCTOBER": return OCTOBER;
    case "NOVEMBER": return NOVEMBER;
    case "DECEMBER": return DECEMBER;
    default: return undefined;
  }
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
