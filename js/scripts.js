var userInput = 8;
var outputArray = [];

for (let i = 0; i < userInput + 1; i++) {
  if (i === 1) {
    outputArray[i] = "Beep!";
  } else if (i === 2) {
    outputArray[i] = "Boop!"
  } else if (i === 3) {
    outputArray[i] = "Won't you be my neighbor?"
  } else {
    outputArray[i] = i;
  }
  console.log(outputArray[i]);
}