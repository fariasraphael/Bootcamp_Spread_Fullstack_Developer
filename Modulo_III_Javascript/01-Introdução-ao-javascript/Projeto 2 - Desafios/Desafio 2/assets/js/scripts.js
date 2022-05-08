var currentNumberWrapper = document.getElementById ('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } 
}

document.getElementById("adicionar").addEventListener('click', increment);
document.getElementById("subtrair").addEventListener('click', decrement);

/*var currentNumberWrapper = document.getElementById ('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/