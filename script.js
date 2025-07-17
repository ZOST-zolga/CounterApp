'use strict';

const decrementButton = document.getElementById('decre');
const incrementButton = document.getElementById('incre');
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = count;
});
if (!decrementButton || !incrementButton || !resetButton) {
    console.error('One or more buttons are missing in the HTML.');
}

let count = 0;
const countDisplay = document.getElementById('count');
decrementButton.addEventListener('click', () => {
    count--;
    countDisplay.textContent = count;
});
incrementButton.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});
