var userInput = 200;
var inputArray = [];

for (let i = 0; i < userInput + 1; i++) {
  inputArray[i] = i;
}

var stringArray = inputArray.map(String);

console.log(stringArray);

for (let i = 0; i < stringArray.length; i++) {
  if (i === 0) {
    console.log("0");
  } else if (i === 1) {
    console.log("beep!");
  } else if (i === 2) {
    console.log("boop!");
  } else if (i === 3) {
    console.log("won't you be my neighbor!");
  }
  //Case 12
  else if (stringArray[i].includes('1') && stringArray[i].includes('2')) {
    console.log("boop!");
  }
  //Case 13
  else if (stringArray[i].includes('1') && stringArray[i].includes('3')) {
    console.log("won't you be my neighbor!");
  }
  //case includes all the 1s
  else if (stringArray[i].includes('1')) {
    console.log("beep!");
  }
  else if (stringArray[i].includes('2') && stringArray[i].includes('3')) {
    console.log("won't you be my neighbor!");
  }
  //case includes all the 2s
  else if (stringArray[i].includes('2')) {
    console.log("boop!");
  }
  // Case includes all the 3s
  else if (stringArray[i].includes('3')) {
    console.log("won't you be my neighbor!");
  }
  else {
    console.log(stringArray[i]);
  }

}



