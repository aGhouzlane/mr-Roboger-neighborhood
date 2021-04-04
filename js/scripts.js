//UI
$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    const userInputs = document.getElementById("user-input").value;
    const output = beepBoopBemyfriend(userInputs)
    output.forEach(function (e) {
      $('ol').append("<li>" + e + " <br></li>");
    });
  });

});

//Business logic
function beepBoopBemyfriend(userInput) {
  var inputArray = [];

  for (let i = 0; i < parseInt(userInput) + 1; i++) {
    inputArray[i] = i;
  }

  var stringArray = inputArray.map(String);
  var outputArray = [];

  //console.log(stringArray);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes('1') && stringArray[i].includes('2') && stringArray[i].includes('3')) {
      //console.log("won't you be my neighbor!");
      outputArray[i] = "won't you be my neighbor!";
    }
    else if (stringArray[i].includes('1') && stringArray[i].includes('2')) {
      //console.log("boop!");
      outputArray[i] = "boop!";
    }
    else if ((stringArray[i].includes('1') || stringArray[i].includes('2')) && stringArray[i].includes('3')) {
      //console.log("won't you be my neighbor!");
      outputArray[i] = "won't you be my neighbor!";
    }
    //case includes all the 1s
    else if (stringArray[i].includes('1')) {
      //console.log("beep!");
      outputArray[i] = "beep!";
    }
    //case includes all the 2s
    else if (stringArray[i].includes('2') && !stringArray[i].includes('3')) {
      //console.log("boop!");
      outputArray[i] = "boop!";
    }

    // Case includes all the 3s
    else if (stringArray[i].includes('3')) {
      //console.log("won't you be my neighbor!");
      outputArray[i] = "won't you be my neighbor!";
    }
    else {
      //console.log(stringArray[i]);
      outputArray[i] = stringArray[i];
    }
  }
  return outputArray;
}




