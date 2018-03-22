function header(msg) {
  console.log(`\n${'='.repeat(50)}\n${' '.repeat(20)}${msg}\n${'='.repeat(50)}`);
}

function test(functionTest, returnTest) {
  let result = eval(functionTest);
  if(result === returnTest) {
    console.log(`passed ${functionTest} => "${returnTest}"`);
  } else {
    console.log(`!!!!FAILED ${functionTest}!!!!`);
    console.log(`GOT:${result} EXPECTED:${returnTest}`);
  }
}

/* We have a loud talking parrot. The talking parameter is a boolean, a the
"hour" parameter is the current hour time in the range 0..23. We are in
trouble if the parrot is talking and the hour is before 7 or after 20.
Return true if we are in trouble and false if we are not. */
function parrotTrouble(talking, hour) {
  return (talking && (hour < 7 || hour > 20));
}

header('parrotTrouble');
test(`parrotTrouble(true, 6)`, true); //true
console.log(parrotTrouble(true, 7)); //false
console.log(parrotTrouble(false, 6)); //false
console.log(parrotTrouble(true, 21)); //true
console.log(parrotTrouble(false, 21)); //false
console.log(parrotTrouble(false, 20)); //false
console.log(parrotTrouble(true, 23)); //true


/* Given 2 ints, a and b, return true if one of them is 10 or if
their sum is 10. */
function makes10(a, b) {
  return ((a === 10 || b === 10) || (a+b === 10));
}

header('makes10');
console.log(makes10(9, 10)); //true
console.log(makes10(9, 9)); //false
console.log(makes10(1, 9)); //true
console.log(makes10(10, 1)); //true
console.log(makes10(10, 10)); //true
console.log(makes10(3, 8)); //false


/* Given an int n, return true if it is within 10 of 100 or 200.
Note: Math.abs(num) computes the absolute value of a number. */
function within10(n, target) {
  // is n within 10 of target
  return Math.abs(target - n) <= 10;
}

function nearHundred(n) {
  return within10(n, 100) || within10(n, 200);
}

header('nearHundred');
console.log(nearHundred(93)); //true
console.log(nearHundred(90)); //true
console.log(nearHundred(89)); //false
console.log(nearHundred(110)); //true
console.log(nearHundred(111)); //false
console.log(nearHundred(121)); //false
console.log(nearHundred(191)); //true


/* Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, then return true only if both
are negative. */
function posNeg(a, b, negative) {
  return (!negative && (a < 0 && b > 0 || a > 0 && b < 0)) || (negative && a < 0 && b < 0);
  // if(negative) {
  //   return a < 0 && b < 0;
  // } else {
  //   return (a < 0 && b > 0 || a > 0 && b < 0);
  // }
}

header('posNeg');
console.log(posNeg(1, -1, false)); //true
console.log(posNeg(-1, 1, false)); //true
console.log(posNeg(-4, -5, true)); //true
console.log(posNeg(-4, -5, false)); //false
console.log(posNeg(-4, 5, false)); //true
console.log(posNeg(-4, 5, true)); //false
console.log(posNeg(1, 1, false)); //false
