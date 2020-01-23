var buttons = document.getElementsByClassName("colorButton");
var heading;
var colorAr = [];
heading = document.getElementById("colorValue");

buttons[0];
class rgbValues {
  constructor() {
    this.color = generateRandomNumber();
  }
}

function generateRandomNumber() {
  return Math.round(Math.random() * 255);
}

function randomButtonColor(button, redRGB, greenRGB, blueRGB) {
  button.setAttribute(
    "style",
    "background-color: rgb(" + redRGB + "," + greenRGB + "," + blueRGB + ");"
  );
}

// function displayColorRGB(red, green, blue){
//     document.getElementById('output').innerHTML(red, green, blue)
// };

// function toggleColor(){
//     var r = 255;
//     var g = 0;
//     var b = 0;
//     var colorButton = document.getElementById('colorDisplayButton');
//     var displaySetting = colorButton.style.display;
//     if (displaySetting == 'flex'){
//         colorButton.innerHTML = 'Show Color';
//         colorButton.style.display = 'inline';
//     }
//     else{
//         colorButton.innerHTML = 'Hide Color';
//         colorButton.style.display = 'flex';
//     }

// }

function rgbToString(r, g, b) {
  return `${r}, ${g}, ${b}`;
}

var answerMessage = document.getElementById("answer");

function startGame() {
  answerMessage.innerHTML = "";

  for (var i = 0; i < buttons.length; i++) {
    let red = new rgbValues();
    let green = new rgbValues();
    let blue = new rgbValues();

    randomButtonColor(buttons[i], red.color, green.color, blue.color);

    let string = rgbToString(red.color, green.color, blue.color);
    colorAr[i] = string;
    document.getElementById("colorRGB").innerHTML = colorAr[0];
    document.getElementById("colorRGB1").innerHTML = colorAr[1];
    document.getElementById("colorRGB2").innerHTML = colorAr[2];
    document.getElementById("colorRGB3").innerHTML = colorAr[3];
    document.getElementById("colorRGB4").innerHTML = colorAr[4];
    document.getElementById("colorRGB5").innerHTML = colorAr[5];
  }
  console.log(colorAr);
}

startGame();
document.getElementById("resetButton").addEventListener("click", startGame);
