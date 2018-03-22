function generateDay() {
  return Math.ceil(Math.random() * 365);
}

let birthdays = [];
for(let i = 0; i < 23; i++) {
  birthdays.push(generateDay());
}
console.log(birthdays.sort());

console.log(typeof birthdays[0]);
