function max3(x, y, z) {
  // RETURN THE LARGEST NUMBER
  // return Math.max(x, y, z);
  if(x >= y) {
    if(x >= z) {
      return x;
    } else {
      return z;
    }
  } else {
    if(y >= z) {
      return y;
    } else {
      return z;
    }
  }
}

// console.log(max3(101, 45, 26)); //101
// console.log(max3(10, 453, 261)); //453
// console.log(max3(101000011, 45455, 261)); //101000011
// console.log(max3(3, 4, 1)); //4
// console.log(max3(-3, -4, -1)); //-1


function missingChar(str, pos) {
  // let newStr = "";
  // for(let i = 0; i < str.length; i++) {
  //   // How can we ensure the character at 'pos' is NOT added to newStr?
  //   if(i !== pos) {
  //     newStr += str[i];
  //   }
  // }
  // return newStr;
  let str1 = str.slice(0,pos);
  let str2 = str.slice(pos+1);
  return str1 + str2;
}

console.log(missingChar("horse", 2)); //hose
console.log(missingChar("Joshua", 3)); //Josua
console.log(missingChar("boats", 0)); //oats
