function abs(x) {
  // if(x < 0) {
  //   return -x;
  // } else {
  //   return x;
  // }
  return (x < 0) ? -x : x;
}

function test_abs() {
  console.log("abs of -5 is: " + abs(-5) );
  console.log("abs of 7 is: " + abs(7) );
  console.log("abs of 0 is: " + abs(0) );
  console.log("abs of -4762343 is: " + abs(-4762343));
  console.log("abs of -3.1415 is: " + abs(-3.1415));
  console.log("abs of 3.1415 is: " + abs(3.1415));
}

// test_abs();

function max(x, y) {
  // YOU CODE THIS ONE
  // if(x > y) {
  //   return x;
  // } else {
  //   return y;
  // }
  return (x > y) ? x : y;
}

function text_max() {
  console.log("max of 3 and 6: " + max(3,6)); // SHOULD BE 6
  console.log("max of -3 and -6: " + max(-3,-6)); // SHOULD BE -3
  console.log("max of 6 and 6: " + max(6,6)); // SHOULD BE 6
}
//
// text_max();


function posOrNeg(x) {
  if(x < 0) {
    console.log(x + " is negative");
    console.log("That's cool, negative numbers are rad man!");
  } else if(x > 0) {
    console.log(x + " is positive");
  } else {
    console.log(x + " is neither positive nor negative");
  }
}

function test_posOrNeg() {
  posOrNeg(-342);
  posOrNeg(467);
  posOrNeg(0);
}

// test_posOrNeg();


// Prints the quarter, given the month number
function monthName(month) {
  switch(month) {
    case  1:
    case  2:
    case  3:
      console.log("First Quarter");
      break;
    case  4:
    case  5:
    case  6:
      console.log("Second Quarter");
      break;
    case  7:
    case  8:
    case  9:
      console.log( "Third Quarter");
      break;
    case 10:
    case 11:
    case 12:
      console.log( "Fourth Quarter");
      break;
    default: console.log( undefined); break;
  }
}

// monthName(11);
//
// monthName(true);
//
// monthName("number");

function largestFactor(n) {
  let factor = n - 1;
  while(n % factor !== 0) {
    factor--;
  }
  return factor;
}

// console.log("LF of 6 is " + largestFactor(6));
// console.log("LF of 9 is " + largestFactor(9));
// console.log("LF of 10 is " + largestFactor(10));
// console.log("LF of 15 is " + largestFactor(15));
// console.log("LF of 63 is " + largestFactor(63));
// console.log("LF of 262144 is " + largestFactor(262144));

// value is a string, width is a number
function alignRight(value, width) {
  let str = "" + value;
  while(str.length < width) {
    str = " " + str;
  }
  return str;
}


// console.log(alignRight("Mark", 20));
// console.log(alignRight("Landon", 20));
// console.log(alignRight("Tom", 20));
// console.log(alignRight("Cami", 20));
// console.log(alignRight("Jesse", 20));
// console.log(alignRight("Quinn", 20));
// console.log(alignRight("Michelle", 20));
// console.log(alignRight("Ryan", 20));
// console.log(alignRight("Alex", 20));


function printTheNumbers() {
  for(let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

// printTheNumbers();


function factorial(n) {
  let result = 1;
  for(let i = n; i > 0; i--) {
    result = result * i;
  }
  return result;
}

function recursiveFactorial(n) {
  if(n <= 1) {
    return 1;
  } else {
    return n * recursiveFactorial(n - 1);
  }
}

console.log("factorial of 3 is " + recursiveFactorial(3));
console.log("factorial of 4 is " + recursiveFactorial(4));
console.log("factorial of 5 is " + recursiveFactorial(5));
console.log("factorial of 68 is " + recursiveFactorial(68));



function countdown(start) {
  for(let i = start; i >= 0; i--) {
    console.log(i);
  }
}

// countdown(1000000);
/* PRINT OUT:
10
9
8
7
6
5
4
3
2
1
0
*/





// function countup(end) {
//   recCountup(end, 0);
// }

function recCountup(end, i) {
  if(i > end) return; //BASE CASE
  console.log(i);
  recCountup(end, i + 1);
}

recCountup(10, 0);

/* PRINT OUT:
0
1
2
3
4
5
6
7
8
9
10
*/


function sumOddInts(n) {
  let sum = 0;
  for(let i = 0; i < n; i++) {
    sum += (2 * i) + 1;
  }
  return sum;
}

console.log(sumOddInts(10));
