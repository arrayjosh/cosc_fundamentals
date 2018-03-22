function frontBack(str) {
  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

console.log(frontBack("this"));
console.log(frontBack("code"));
console.log(frontBack("Array"));
console.log(frontBack("Joshua"));


function front3(str, repeats) {
  return str.slice(0,3).repeat(repeats);
}

console.log(front3("Joshua", 3));
console.log(front3("yo", 2));
console.log(front3("coffee", 15));
console.log(front3("a", 8));


function back3(str, repeats) {
  return str.slice(-3).repeat(repeats);
}

console.log(back3("Joshua", 4));
console.log(back3("Array", 15));
console.log(back3("Indeed", 2));
console.log(back3("Hello", 5));


function backAround(str) {
  return str.slice(-1) + str + str.slice(-1);
}

console.log(backAround("cat")) // "tcatt"
console.log(backAround("Josh")) // "hJoshh"
console.log(backAround("flair")) // "rflairr"
console.log(backAround("horse")) // "ehorsee"


function makeAbba(a, b) {
  return a + b + b + a;
}

console.log(makeAbba('get', 'rekt'));


function makeTags(tag, word) {
  // return "<" + tag + ">" + word + "</" + tag + ">";
  return `<${tag}>${word}</${tag}>`;
}

console.log(makeTags('i', 'Yay')); // <i>Yay</i>
console.log(makeTags('div', 'freakin cool')); // <div>freakin cool</div>
console.log(makeTags('div', makeTags('i', 'this goes inside the div'))); // <div>freakin cool</div>


function makeOutWord(out, word) {
  return `${out.slice(0,2)}${word}${out.slice(-2)}`;
}

console.log(makeOutWord("<<>>", "fox")); // <<fox>>
console.log(makeOutWord("[[]]", "netflix")); // [[netflix]]
