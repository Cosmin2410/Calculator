const keysPad = document.querySelectorAll('.key');

const display = document.querySelector('.display-numbers');

const deleteAll = document
  .querySelector('.delete')
  .addEventListener('click', deleteNumber);
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const dot = document.querySelector('.dot');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const answer = document.querySelector('.answer');

let allNumbers = '';
let firstNumber = '';
let secondNumber = '';
let numberLength = '';
let counter = 0;

display.innerHTML = '0';

keysPad.forEach((keypad) => {
  keypad.addEventListener('click', () => {
    allNumbers += keypad.innerText;
    display.innerText = allNumbers;

    if (keypad.innerText === 'RESET') {
      display.innerText = '0';
      allNumbers = '';
    }

    if (keypad.innerText === 'DEL') {
      display.innerText = display.innerText.replaceAll('DEL', '');
      allNumbers = allNumbers.replaceAll('DEL', '');
    }
  });
});

function deleteNumber() {
  if (allNumbers.length > 0) {
    allNumbers = allNumbers.slice(0, -1);
  }
}
