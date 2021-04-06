//UI
$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    const userInputs = document.getElementById("user-input").value;
    if (!Number(userInputs)) {
      $('#nan-error').show();
      $('#space').show();
    }

    const output = beepBoopBemyfriend(userInputs);
    output.forEach(function (e) {
      $('ol').append("<li>" + e + " <br></li>");
    });
    $('#main-page').hide();
    $('#output').show();
  });

  $('#play-again').click(function () {
    $('#main-page').show();
    $('#output').hide();
    $('ol').empty()
    $('#nan-error').hide();
  });

  $(function () {
    showText("#msg", "Welcome to Mr. Roboger Neighborhood!", 0, 50);
  });

  var showText = function (target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
});

//Business logic
function beepBoopBemyfriend(userInput) {
  var inputArray = [];

  for (let i = 0; i < parseInt(userInput) + 1; i++) {
    inputArray[i] = i;
  }

  var stringArray = inputArray.map(String);
  var outputArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].includes('3')) {
      outputArray[i] = "won't you be my neighbor!";
    }
    else if (stringArray[i].includes('2')) {
      outputArray[i] = "boop!";
    }
    else if (stringArray[i].includes('1')) {
      outputArray[i] = "beep!";
    }
    else {
      outputArray[i] = stringArray[i];
    }
  }
  return outputArray;
}





