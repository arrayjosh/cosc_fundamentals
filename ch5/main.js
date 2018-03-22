function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return !isEven(n);
}

// for(let i = 1; i <= 100; i++) {
//   if( isEven(i) ) {
//     console.log(i);
//   }
// }

function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

const x = 6;

// console.log("is 2018 a leap year? " + isLeapYear(2018));
// console.log("is 2000 a leap year? " + isLeapYear(2000));
// console.log("is 1900 a leap year? " + isLeapYear(1900));
// console.log("is 2020 a leap year? " + isLeapYear(2020));
