/* Boilerplate code for headers and tests SCROLL DOWN :) */

function header(msg) {
  console.log(`\n${'='.repeat(50)}\n${' '.repeat(20)}${msg}\n${'='.repeat(50)}`);
}

function test(functionTest, returnTest) {
  let result = eval(functionTest);
  if(result === returnTest) {
    console.log(`passed ${functionTest} => "${returnTest}"`);
  } else {
    console.log(`!!!FAILED ${functionTest}!!! GOT:${result} EXPECTED:${returnTest}`);
  }
}

/*
Given a string and an int n, return a string made of the first and last n chars
from the string. The string length will be at least n.

Has 2 parameters (str: string, n: number)
returns string
*/

function nTwice(str, n) {
  // YOUR CODE HERE
}

header('nTwice');
test(`nTwice("Hello", 2)`, "Helo");
test(`nTwice("Chocolate", 3)`, "Choate");
test(`nTwice("Chocolate", 1)`, "Ce");
test(`nTwice("Chocolate", 0)`, "");
test(`nTwice("Hello", 4)`, "Hellello");
test(`nTwice("Code", 4)`, "CodeCode");
test(`nTwice("Code", 2)`, "Code");

/*
Given a string and an index, return a string length 2 starting at the given
index. If the index is too big or too small to define a string length 2, use the
first 2 chars. The string length will be at least 2.

Has 2 parameters (str: string, index: number)
returns string
*/

function twoChar(str, index) {
  // YOUR CODE HERE
}

header('twoChar');
test(`twoChar("java", 0)`, "ja");
test(`twoChar("java", 2)`, "va");
test(`twoChar("java", 3)`, "ja");
test(`twoChar("java", 4)`, "ja");
test(`twoChar("java", -1)`, "ja");
test(`twoChar("Hello", 0)`, "He");
test(`twoChar("Hello", 1)`, "el");
test(`twoChar("Hello", 99)`, "He");
test(`twoChar("Hello", 3)`, "lo");
test(`twoChar("Hello", 4)`, "He");
test(`twoChar("Hello", 5)`, "He");
test(`twoChar("Hello", -7)`, "He");
test(`twoChar("Hello", 6)`, "He");
test(`twoChar("Hello", -1)`, "He");
test(`twoChar("yay", 0)`, "ya");

/*
Given a string of odd length, return the string length 3 from its middle, so
"Candy" yields "and". The string length will be at least 3.

Has 1 parameters (str: string)
returns string
*/

function middleThree(str) {
  // YOUR CODE HERE
}

header('middleThree');
test(`middleThree("Candy")`, "and");
test(`middleThree("and")`, "and");
test(`middleThree("solving")`, "lvi");
test(`middleThree("Hi yet Hi")`, "yet");
test(`middleThree("java yet java")`, "yet");
test(`middleThree("Chocolate")`, "col");
test(`middleThree("XabcxyzabcX")`, "xyz");

/*
Given a string, return true if "bad" appears starting at index 0 or 1 in the
string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be
any length, including 0. Note: use .equals() to compare 2 strings.

Has 1 parameters (str: string)
returns boolean
*/

function hasBad(str) {
  // YOUR CODE HERE
}

header('hasBad');
test(`hasBad("badxx")`, true);
test(`hasBad("xbadxx")`, true);
test(`hasBad("xxbadxx")`, false);
test(`hasBad("code")`, false);
test(`hasBad("bad")`, true);
test(`hasBad("ba")`, false);
test(`hasBad("xba")`, false);
test(`hasBad("xbad")`, true);
test(`hasBad("")`, false);
test(`hasBad("badyy")`, true);

/*
Given 2 strings, a and b, return a new string made of the first char of a and
the last char of b, so "yo" and "java" yields "ya". If either string is length
0, use '@' for its missing char.

Has 2 parameters (a: string, b: string)
returns string
*/

function lastChars(a, b) {
  // YOUR CODE HERE
}

header('lastChars');
test(`lastChars("last", "chars")`, "ls");
test(`lastChars("yo", "java")`, "ya");
test(`lastChars("hi", "")`, "h@");
test(`lastChars("", "hello")`, "@o");
test(`lastChars("", "")`, "@@");
test(`lastChars("kitten", "hi")`, "ki");
test(`lastChars("k", "zip")`, "kp");
test(`lastChars("kitten", "")`, "k@");
test(`lastChars("kitten", "zip")`, "kp");


/*
We have a number of bunnies and each bunny has two big floppy ears. We want to
compute the total number of ears across all the bunnies recursively (without
loops or multiplication).

Has 1 parameters (bunnies: number)
returns number
*/

function bunnyEars(bunnies) {
  // YOUR CODE HERE
}

header('bunnyEars');
test(`bunnyEars(0)`, 0);
test(`bunnyEars(1)`, 2);
test(`bunnyEars(2)`, 4);
test(`bunnyEars(3)`, 6);
test(`bunnyEars(4)`, 8);
test(`bunnyEars(5)`, 10);
test(`bunnyEars(12)`, 24);
test(`bunnyEars(50)`, 100);
test(`bunnyEars(234)`, 468);


/*
We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3,
..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears,
because they each have a raised foot. Recursively return the number of "ears" in
the bunny line 1, 2, ... n (without loops or multiplication).

Has 1 parameters (bunnies: number)
returns number
*/

function bunnyEars2(bunnies) {
  // YOUR CODE HERE
}

header('bunnyEars2');
test(`bunnyEars2(0)`, 0);
test(`bunnyEars2(1)`, 2);
test(`bunnyEars2(2)`, 5);
test(`bunnyEars2(3)`, 7);
test(`bunnyEars2(4)`, 10);
test(`bunnyEars2(5)`, 12);
test(`bunnyEars2(6)`, 15);
test(`bunnyEars2(10)`, 25);


/*
Given a non-negative int n, return the sum of its digits recursively (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide
(/) by 10 removes the rightmost digit (126 / 10 is 12).

Has 1 parameters (n: number)
returns number
*/

function sumDigits(n) {
  // YOUR CODE HERE
}

header('sumDigits');
test(`sumDigits(126)`, 9);
test(`sumDigits(49)`, 13);
test(`sumDigits(12)`, 3);
test(`sumDigits(10)`, 1);
test(`sumDigits(1)`, 1);
test(`sumDigits(0)`, 0);
test(`sumDigits(730)`, 10);
test(`sumDigits(1111)`, 4);
test(`sumDigits(11111)`, 5);
test(`sumDigits(10110)`, 3);
test(`sumDigits(235)`, 10);


/*
Given a string, compute recursively (no loops) the number of lowercase 'x' chars
in the string.

Has 1 parameters (str: string)
returns number
*/

function countX(str) {
  // YOUR CODE HERE
}

header('countX');
test(`countX("xxhixx")`, 4);
test(`countX("xhixhix")`, 3);
test(`countX("hi")`, 0);
test(`countX("h")`, 0);
test(`countX("x")`, 1);
test(`countX("")`, 0);
test(`countX("hihi")`, 0);
test(`countX("hiAAhi12hi")`, 0);


/*
Given a string, compute recursively (no loops) the number of times lowercase
"hi" appears in the string.

Has 1 parameters (str: string)
returns number
*/

function countHi(str) {
  // YOUR CODE HERE
}

header('countHi');
test(`countHi("xxhixx")`, 1);
test(`countHi("xhixhix")`, 2);
test(`countHi("hi")`, 1);
test(`countHi("hihih")`, 2);
test(`countHi("h")`, 0);
test(`countHi("")`, 0);
test(`countHi("ihihihihih")`, 4);
test(`countHi("ihihihihihi")`, 5);
test(`countHi("hiAAhi12hi")`, 3);
test(`countHi("xhixhxihihhhih")`, 3);
test(`countHi("ship")`, 1);
