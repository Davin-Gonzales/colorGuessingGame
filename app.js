var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById('colorValue');

buttons[0]
class rgbValues{
    constructor (red){
        this.red = generateRandomNumber();
    }
    constructor (green){
        this.green = generateRandomNumber();
    }
    constructor (blue){
        this.blue = generateRandomNumber();
    }
}
function generateRandomNumber(){
    return Math.round(Math.random()*255);
}



function randomButtonColor(button){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}


var answerMessage = document.getElementById('answer');

function startGame(){
    answerMessage.innerHTML = "";
    var answerButton = Math.round(Math.random() * (buttons.length - 1));

for (var i = 0; i < buttons.length; i++){
    randomButtonColor(buttons[i]);
    if (i === answerButton) {
        heading.innerHTML = `(${randomButtonColor.red}, ${randomButtonColor.green}, ${randomButtonColor.blue})`;
      }
    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]){
            answerMessage.innerHTML = "Correct!";
        }
        else{
            answerMessage.innerHTML = "Wrong answer! Guess Again!";
        }
    })
}
}

startGame();
document.getElementById('resetButton').addEventListener('click', startGame);
