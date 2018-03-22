/* global randomStudent, randomRockPaperScissors */


console.log("EPIC MATCH OF ROCK, PAPER, SCISSORS");

/* Choose 2 different random students */
let student1 = randomStudent();
console.log("Student 1 is.... " + student1);
let student2 = randomStudent();
while(student1 === student2) {
  student2 = randomStudent();
}
console.log("Student 2 is.... " + student2);

/* Pick rock, paper, or scissors for each student */
let choice1 = randomRockPaperScissors();
let choice2 = randomRockPaperScissors();
console.log(`${student1} chose ${choice1}`);
console.log(`${student2} chose ${choice2}`);
/* If the choices are the same... try again! */
while(choice1 === choice2) {
  console.log("They both chose the same thing, choose again!");
  choice1 = randomRockPaperScissors();
  choice2 = randomRockPaperScissors();
  console.log(`${student1} chose ${choice1}`);
  console.log(`${student2} chose ${choice2}`);
}

/* Now we know the two studnts have different choices
  So let's figure out who won! */
let winner;
if(choice1 === "Rock") {
  winner = choice2 === "Paper" ? student2 : student1;
} else if(choice1 === "Paper") {
  winner = choice2 === "Scissors" ? student2 : student1;
} else {
  winner = choice2 === "Rock" ? student2 : student1;
}

console.log("The winner is ......drumroll..... " + winner);



/* global GWindow, GOval, randomReal, randomColor */
const WIDTH = 500;
const HEIGHT = 300;
const NUM_CIRCLES = 20000;
const MIN_RADIUS = 1;
const MAX_RADIUS = 2;

function randomCircles() {
  let gw = GWindow(WIDTH, HEIGHT);
  for(let i = 0; i < NUM_CIRCLES; i++) {
    gw.add(createRandomCircle());
  }
}

function createRandomCircle() {
  let r = randomReal(MIN_RADIUS, MAX_RADIUS);
  let x = randomReal(r, WIDTH - r);
  let y = randomReal(r, HEIGHT - r);
  let circle = GOval(x-r, y-r, 2 * r, 2 * r);
  circle.setFilled(true);
  circle.setColor(randomColor());
  return circle;
}
