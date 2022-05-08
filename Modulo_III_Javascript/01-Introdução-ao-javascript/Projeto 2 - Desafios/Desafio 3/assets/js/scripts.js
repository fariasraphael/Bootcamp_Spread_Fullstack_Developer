var currentNumberWrapper = document.getElementById ('currentNumber');
var currentNumber = 0;

function mudaCor() {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }
    if (currentNumber > 10) {
        currentNumberWrapper.style.color = "blue";
    }
    if (currentNumber <= 10 && currentNumber >=0) {
        currentNumberWrapper.style.color = "black";
    }
}

function increment() {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
        mudaCor();
}

function decrement() {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        mudaCor();
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