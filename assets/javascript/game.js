var winNum = $("#winningNumber");
var curNum = $("#currentNumber");
var wins = $("#wins");
var loses = $("#loses");
var windValue = randomNumber(12, 1);
var waterValue = randomNumber(12, 1);
var earthValue = randomNumber(12, 1);
var fireValue = randomNumber(12, 1);

$(document).ready(function(){
    var windCrystal = $("#wind");
    var waterCrystal = $("#water");
    var earthCrystal = $("#earth");
    var fireCrystal = $("#fire");
    windCrystal.click(function(){
        addScore(windValue);
        gameWon();
    });

    waterCrystal.click(function(){
        addScore(waterValue);
        gameWon();
    });

    earthCrystal.click(function(){
        addScore(earthValue);
        gameWon();
    });

    fireCrystal.click(function(){
        addScore(fireValue);
        gameWon();
    });
    rngWinningNumber();
    addScore(0);
});

function rngWinningNumber(){
    var random = randomNumber(120, 19);
    winNum.text(random);
}

function addScore(score){
    var currentScoreString = curNum.text();
    var currentScoreNumber = parseInt(currentScoreString, 10);
    currentScoreNumber += score;
    curNum.text(currentScoreNumber);
}

function randomNumber(max, min){
     var returnNumber;
     returnNumber = Math.floor(Math.random() * (max-min) + min)
    return returnNumber;    
    }

function gameWon(){
    var currentScoreNumber = parseInt(curNum.text(), 10);
    var currentWinNumber = parseInt(winNum.text(), 10);
    if(currentScoreNumber === currentWinNumber){
        alert("Congratulations! You win!");
        var curNumWins = parseInt(wins.text(), 10);
        curNumWins++
        wins.text(curNumWins);
        reset();
    }
    else if (currentWinNumber < currentScoreNumber){
        alert("Sorry, you lost. Better luck next time!");
        var curNumLoses = parseInt(loses.text(), 10);
        curNumLoses++
        loses.text(curNumLoses);
        reset();
    }
}

function reset(){
    windValue = randomNumber(12, 1);
    waterValue = randomNumber(12, 1);
    earthValue = randomNumber(12, 1);
    fireValue = randomNumber(12, 1);
    rngWinningNumber();
    curNum.text("0");
}
