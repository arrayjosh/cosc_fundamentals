
function rhymeword(i) {
  switch(i) {
    case 1: return "thumb";
    case 2: return "shoe";
    case 3: return "knee";
    case 4: return "door";
    case 5: return "hive";
    case 6: return "sticks";
    case 7: return "heaven";
    case 8: return "pate";
    case 9: return "spine";
    case 10: return "shin";
    default: return "";
  }
}

for(let i = 1; i <= 10; i++) {
  console.log("This old man, he played " + i + ".");
  console.log("He played knick-knack on my " + rhymeword(i) + ".");
  console.log("With a knick-knack, paddy-whack.");
  console.log("Give your dog a bone.");
  console.log("This old man came rolling home.\n");
}
