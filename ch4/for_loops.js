
function alignRight(value, width) {
  let str = "" + value;
  while(str.length < width) {
    str = " " + str;
  }
  return str;
}

const TABLE_SIZE = 35;
const FIELD_WIDTH = 5;

function multiplicationTable() {
  for(let i = 1; i <= TABLE_SIZE; i++) {
    let line = "";
    for(let j = 1; j <= TABLE_SIZE; j++) {
      line += alignRight(i * j, FIELD_WIDTH);
    }
    console.log(line);
  }
}

// multiplicationTable();

const SIZE = 5000;

function checkerBoard() {
  for(let i = 0; i < SIZE; i++) {
    let line = "";
    for(let j = 0; j < SIZE; j++) {
      line += ((j + i) % 2 === 0) ? "#" : " ";
    }
    console.log(line);
  }
}

// checkerBoard();

function drawTriangle(size) {
  for(let i = 1; i <= size; i++) {
    let line = "";
    for(let j = 0; j < i; j++) {
      line += "#";
    }
    console.log(line);
  }
}

// drawTriangle(8);

function gcd(x, y) {
  let r = x % y;
  while( r !== 0 ) {
    x = y;
    y = r;
    r = x % y;
  }
  return y;
}

// console.log("gcd of 49 and 35 is " + gcd(49, 35));
// console.log("gcd of 12 and 3 is " + gcd(12, 3));
// console.log("gcd of 1000005 and 1000000 is " + gcd(1000005, 1000000));
// console.log("gcd of no and no is " + gcd(4628191651818, 8271614319));

function notString(str) {
  if(str[0] === 'n' && str[1] === 'o' && str[2] === 't') {
    return str;
  } else {
    return "not " + str;
  }
}

console.log(notString("candy"));
console.log(notString("not bad"));
console.log(notString("x"));


function reverseString(str) {
  let reverse = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString('candy'));
console.log(reverseString('Joshua'));
