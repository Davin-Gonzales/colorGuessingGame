var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById('colorValue');

buttons[0]
class rgbValues{
    constructor (){
        this.color = generateRandomNumber();
    }
}

function generateRandomNumber(){
    return Math.round(Math.random()*255);
}




function randomButtonColor(button, redRGB, greenRGB, blueRGB){
    button.setAttribute('style',
                        'background-color: rgb('+ redRGB +','+ greenRGB +','+ blueRGB +');'
                       );
}


var answerMessage = document.getElementById('answer');

function startGame(){
    answerMessage.innerHTML = "";

for (var i = 0; i < buttons.length; i++){

    let red = new rgbValues();
    let green = new rgbValues();
    let blue = new rgbValues();
    
    randomButtonColor(buttons[i], red.color, green.color, blue.color);

    
    
}
}

startGame();
document.getElementById('resetButton').addEventListener('click', startGame);
