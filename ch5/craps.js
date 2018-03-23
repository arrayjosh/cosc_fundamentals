/* global randomInteger */

function craps() {
  let total = rollTwoDice();
  if(total === 2 || total === 3 || total === 12) {
    console.log("That's craps, you lose!");
  } else if (total === 7 || total === 11) {
    console.log("That's a natural, you win!!!");
  } else {
    console.log(`Your point is ${total}.`);
    let running = true;

    while(running) {
      let secondRoll = rollTwoDice();
      if(secondRoll === total) {
        console.log("You made your point, you win!!!");
        running = false;
      } else if(secondRoll === 7) {
        console.log("That's a 7, you lose.... sucka!");
        running = false;
      }
    }
  }
}

function rollTwoDice() {
  let d1 = randomInteger(1, 6);
  let d2 = randomInteger(1, 6);
  let total = d1 + d2;
  console.log(`Rolling dice: ${d1} + ${d2} = ${total}`);
  return total;
}

/* Returns a random integer in the range low to high, inclusive. */
function randomInteger(low, high) {
  return low + Math.floor((high - low + 1) * Math.random());
}


randomInteger(56 / 2);
