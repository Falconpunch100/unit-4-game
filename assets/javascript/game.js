$(document).ready(function(){
    var winNum = $("#winningNumber");
    var curNum = $("#currentNumber");
});






function randomNumber(max, min){
     var returnNumber;
     returnNumber = Math.floor(Math.random() * (max-min) + min)
    return returnNumber;    
    }

console.log(randomNumber(120, 19));
console.log(randomNumber(12, 1) + " Wind Crystal");
console.log(randomNumber(12, 1) + " Water Crystal");
console.log(randomNumber(12, 1) + " Earth Crystal");
console.log(randomNumber(12, 1) + " Fire Crystal");


