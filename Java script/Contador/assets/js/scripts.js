console.log("Heelo worlk??");

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function dimi() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function aume() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
} 