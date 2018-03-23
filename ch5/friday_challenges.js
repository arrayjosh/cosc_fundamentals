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
When squirrels get together for a party, they like to have cigars. A squirrel
party is successful when the number of cigars is between 40 and 60, inclusive.
Unless it is the weekend, in which case there is no upper bound on the number of
cigars. Return true if the party with the given values is successful, or false
otherwise.

Has 2 parameters (cigars: number, isWeekend: boolean)
returns boolean
*/

function cigarParty(cigars, isWeekend) {
  return (cigars >= 40 && cigars <= 60) || (isWeekend && cigars >= 40)
}

header('cigarParty');
test(`cigarParty(30, false)`, false);
test(`cigarParty(50, false)`, true);
test(`cigarParty(70, true)`, true);
test(`cigarParty(30, true)`, false);
test(`cigarParty(50, true)`, true);
test(`cigarParty(60, false)`, true);
test(`cigarParty(61, false)`, false);
test(`cigarParty(40, false)`, true);
test(`cigarParty(39, false)`, false);
test(`cigarParty(40, true)`, true);
test(`cigarParty(39, true)`, false);


/*
Given a string, return true if the first instance of "x" in the string is
immediately followed by another "x".

Has 1 parameters (str: string)
returns boolean
*/

function doubleX(str) {
  let ind = str.indexOf('x');
  return str[ind + 1] === 'x';
}

header('doubleX');
test(`doubleX("axxbb")`, true);
test(`doubleX("axaxax")`, false);
test(`doubleX("xxxxx")`, true);
test(`doubleX("xaxxx")`, false);
test(`doubleX("aaaax")`, false);
test(`doubleX("")`, false);
test(`doubleX("abc")`, false);
test(`doubleX("x")`, false);
test(`doubleX("xx")`, true);
test(`doubleX("xax")`, false);
test(`doubleX("xaxx")`, false);


/*
Given three ints, a b c, return true if they are in strict increasing order,
such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception
that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

Has 4 parameters (a: number, b: number, c: number, equalOk: boolean)
returns boolean
*/

function inOrderEqual(a, b, c, equalOk) {
  if(equalOk) {
    return a <= b && b <= c;
  } else {
    return a < b && b < c;
  }
}

header('inOrderEqual');
test(`inOrderEqual(2, 5, 11, false)`, true);
test(`inOrderEqual(5, 7, 6, false)`, false);
test(`inOrderEqual(5, 5, 7, true)`, true);
test(`inOrderEqual(5, 5, 7, false)`, false);
test(`inOrderEqual(2, 5, 4, false)`, false);
test(`inOrderEqual(3, 4, 3, false)`, false);
test(`inOrderEqual(3, 4, 4, false)`, false);
test(`inOrderEqual(3, 4, 3, true)`, false);
test(`inOrderEqual(3, 4, 4, true)`, true);
test(`inOrderEqual(1, 5, 5, true)`, true);
test(`inOrderEqual(5, 5, 5, true)`, true);
test(`inOrderEqual(2, 2, 1, true)`, false);
test(`inOrderEqual(9, 2, 2, true)`, false);
test(`inOrderEqual(0, 1, 0, true)`, false);


/*
We have triangle made of blocks. The topmost row has 1 block, the next row down
has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no
loops or multiplication) the total number of blocks in such a triangle with the
given number of rows.

Has 1 parameters (rows: number)
returns number
*/

function triangle(rows) {
  if(rows <= 0) return 0;
  else if(rows === 1) return 1;
  else return rows + triangle(rows - 1);
}

header('triangle');
test(`triangle(0)`, 0);
test(`triangle(1)`, 1);
test(`triangle(2)`, 3);
test(`triangle(3)`, 6);
test(`triangle(4)`, 10);
test(`triangle(5)`, 15);
test(`triangle(6)`, 21);
test(`triangle(7)`, 28);


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
Given a string, if the string begins with "red" or "blue" return that color
string, otherwise return the empty string.

Has 1 parameters (str: string)
returns string
*/

function seeColor(str) {
  if(str.indexOf('red') === 0) return 'red';
  else if(str.indexOf('blue') === 0) return 'blue';
  else return '';
}

header('seeColor');
test(`seeColor("redxx")`, "red");
test(`seeColor("xxred")`, "");
test(`seeColor("blueTimes")`, "blue");
test(`seeColor("NoColor")`, "");
test(`seeColor("red")`, "red");
test(`seeColor("re")`, "");
test(`seeColor("blu")`, "");
test(`seeColor("blue")`, "blue");
test(`seeColor("a")`, "");
test(`seeColor("")`, "");
test(`seeColor("xyzred")`, "");


/*
Given a string, return a string length 2 made of its first 2 chars. If the
string length is less than 2, use '@' for the missing chars.

Has 1 parameters (str: string)
returns string
*/

function atFirst(str) {
  let result = str.slice(0, 2);
  while(result.length < 2) result += '@';
  return result;
}

header('atFirst');
test(`atFirst("hello")`, "he");
test(`atFirst("hi")`, "hi");
test(`atFirst("h")`, "h@");
test(`atFirst("")`, "@@");
test(`atFirst("kitten")`, "ki");
test(`atFirst("java")`, "ja");
test(`atFirst("j")`, "j@");


/*
Given a string, return true if it ends in "ly".

Has 1 parameters (str: string)
returns boolean
*/

function endsLy(str) {
  return str[str.length - 2] === 'l' && str[str.length - 1] === 'y';
}

header('endsLy');
test(`endsLy("oddly")`, true);
test(`endsLy("y")`, false);
test(`endsLy("oddy")`, false);
test(`endsLy("oddl")`, false);
test(`endsLy("olydd")`, false);
test(`endsLy("ly")`, true);
test(`endsLy("")`, false);
test(`endsLy("falsey")`, false);
test(`endsLy("evenly")`, true);
