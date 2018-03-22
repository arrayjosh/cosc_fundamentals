function header(msg) {
  console.log("\n" + '='.repeat(15) + "\n" + msg + "\n" + '='.repeat(15));
}


/* Given 2 strings, a and b, return a string of the form short+long+short,
with the shorter string on the outside and the longer string on the inside.
The strings will not be the same length, but they may be empty (length 0). */

function comboString(a, b) {
  if(a.length > b.length) {
    return `${b}${a}${b}`;
  } else {
    return a + b + a;
  }
}

header('comboString');
console.log(comboString("Hello", "hi")); // "hiHellohi"
console.log(comboString("hi", "Hello")); // "hiHellohi"
console.log(comboString("aaa", "b")); // "baaab"
console.log(comboString("", "car"));
console.log(comboString("r", "aceca"));
console.log(comboString("test", "case"));
//TODO WRITE YOUR OWN TEST CASE HERE!


/* Given 2 strings, return their concatenation, except omit the first char
of each. The strings will be at least length 1. */

function nonStart(a, b) {
  return a.slice(1) + b.slice(1);
}

header('nonStart');
console.log(nonStart("Hello", "There")); // "ellohere"
console.log(nonStart("java", "code")); // "avaode"
console.log(nonStart("shotl", "java")); // "hotlava"
console.log(nonStart("edi", "node")); // "hotlava"
console.log(nonStart("", "there")); // "hotlava"
console.log(nonStart("jesse", "rules")); // "hotlava"
//TODO WRITE YOUR OWN TEST CASE HERE!

/*
Given a string, return a "rotated left 2" version where the first 2 chars are
moved to the end. The string length will be at least 2. */

function rotateLeft2(str, n) {
  let first = str.slice(0,n);
  let last = str.slice(n);
  return last + first;
}

header('rotateLeft2');
console.log(rotateLeft2("Hello", 2)); // "lloHe"
console.log(rotateLeft2("java", 3)); // "vaja"
console.log(rotateLeft2("Hi", 1)); // "Hi"
console.log(rotateLeft2("bacon", 5)); // "Hi"
console.log(rotateLeft2("", 2)); // "Hi"
console.log(rotateLeft2("y", 2)); // "Hi"
//TODO WRITE YOUR OWN TEST CASE HERE!

/*
Given a string, return a "rotated right 2" version where the last 2 chars are
moved to the start. The string length will be at least 2. */

function rotateRight2(str, n) {
  let first = str.slice(0, -2);
  let last = str.slice(-2);
  return last + first;
}

header('rotateRight2');
console.log(rotateRight2("Hello")); // "loHel"
console.log(rotateRight2("java")); // "vaja"
console.log(rotateRight2("Hi")); // "Hi"
//TODO WRITE YOUR OWN TEST CASE HERE!

/* Given a string, return a string length 1 from its front, unless
front is false, in which case return a string length 1 from its back.
The string will be non-empty. */
function theEnd(str, front) {
  return front ? str[0] : str.slice(-1);
}

header('theEnd');
console.log(theEnd("Hello", true)); // "H"
console.log(theEnd("Hello", false)); // "o"
console.log(theEnd("oh", true)); // "o"
//TODO WRITE YOUR OWN TEST CASE HERE!
