function bottles(n) {
  if(n !== 1) {
    return n + " bottles";
  }
  return "1 bottle";
}


for(let i = 99; i > 0; i--) {
  console.log(bottles(i) + " of beer on the wall");
  console.log(bottles(i) + " of beer.");
  console.log("You take one down, pass it around.");
  console.log(bottles(i - 1) + " of beer on the wall.\n");
}
