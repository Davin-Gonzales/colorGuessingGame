var buttons = document.getElementsByClassName('colorButton');
var heading;
var rgbArray = [];
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

var answerMessage = document.getElementById('answer');

function startGame(){
    answerMessage.innerHTML = "";

for (var i = 0; i < buttons.length; i++){

    let red = new rgbValues();
    let green = new rgbValues();
    let blue = new rgbValues();
    
    rgbArray[0] = red.color;
    rgbArray[1] = green.color;
    rgbArray[2] = blue.color;

    console.log(rgbArray);

    randomButtonColor(buttons[i], red.color, green.color, blue.color);

    function rgbToString(r, g, b){
        return `${r}, ${g}, ${b} good`;
    }

    document.getElementById('colorRGB').innerHTML = rgbToString(red.color, green.color, blue.color)

}
}

startGame();
document.getElementById('resetButton').addEventListener('click', startGame);
