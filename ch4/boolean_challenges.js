function header(msg) {
  // console.log(`\n${'='.repeat(20)}\n${msg}\n${'='.repeat(20)}`);
  // OR!!!!
  console.log("\n====================\n" + msg + "\n====================");
}

function twoVarTruthTable(func) {
  header(func.name);
  console.log("TT: " + func(true, true));
  console.log("TF: " + func(true, false));
  console.log("FT: " + func(false, true));
  console.log("FF: " + func(false, false));
}


function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

twoVarTruthTable(sleepIn);

function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile;
}

twoVarTruthTable(monkeyTrouble);

function challenge3(x, y) {
  return x || !y;
  /* Should return:
    TT: true
    TF: true
    FT: false
    FF: true
    */
}

twoVarTruthTable(challenge3);

function sumDouble(x, y) {
  return (x === y) ? 4 * x : (x + y);
}

header('sumDouble');
console.log('(1,2): ' + sumDouble(1,2)); // 3
console.log('(3,4): ' + sumDouble(3,4)); // 7
console.log('(2,2): ' + sumDouble(2,2)); // 8


function diff21(n) {
  if(n <= 21) {
    return Math.abs(n - 21);
  } else {
    return Math.abs(n - 21) * 2;
  }
}

console.log("diff21 of 19 is " + diff21(19)); // 2
console.log("diff21 of 10 is " + diff21(10)); // 11
console.log("diff21 of 21 is " + diff21(21)); // 0
console.log("diff21 of 25 is " + diff21(25)); // 8
