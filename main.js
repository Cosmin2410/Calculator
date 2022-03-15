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
const equal = document
  .querySelector('.equal')
  .addEventListener('click', doEqual);
const answer = document.querySelector('.answer');

let allNumbers = '';
let firstNumber = '';
let secondNumber = '';
let numberLength = '';
let counter = 1;

display.innerHTML = '0';

keysPad.forEach((keypad) => {
  keypad.addEventListener('click', () => {
    allNumbers += keypad.innerText;
    display.innerText = allNumbers;

    if (keypad.innerText === 'RESET') {
      display.innerText = '0';
      allNumbers = '';
      answer.innerHTML = '=';
    }

    if (keypad.innerText === 'DEL') {
      display.innerText = display.innerText.replaceAll('DEL', '');
      allNumbers = allNumbers.replaceAll('DEL', '');
    }

    if (keypad.innerText === '=') {
      display.innerText = display.innerText.replaceAll('=', '');
      allNumbers = allNumbers.replaceAll('=', '');
    }
  });
});

function deleteNumber() {
  if (allNumbers.length > 0) {
    allNumbers = allNumbers.slice(0, -1);
  }
}

function doEqual() {
  answer.innerHTML = eval(allNumbers);
}

// theme switch

const bgs = document.querySelectorAll('.bg');
const keysBg = document.querySelectorAll('.keyBg');
const colorsText = document.querySelectorAll('.keyWord');

const body = document.querySelector('body');
const equalBg = document.querySelector('.equal');
const displayBg = document.querySelector('.display-answer');
const calcBg = document.querySelector('.calc-buttons');
const toggleBg = document.querySelector('.toggle-bettwen-button');

const toggle = document
  .querySelector('.toggle-bettwen-button')
  .addEventListener('click', toggleTheme);

const ball = document.querySelector('.ball');

// toggle button

function toggleTheme() {
  if (counter === 0) {
    ball.style.left = '3px';
    counter = 1;

    body.style.color = 'white';
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';

    toggleBg.style.backgroundColor = 'hsl(223, 31%, 20%)';
    calcBg.style.backgroundColor = 'hsl(223, 31%, 20%)';
    displayBg.style.backgroundColor = 'hsl(224, 36%, 15%)';
    equalBg.style.backgroundColor = 'hsl(6, 63%, 50%)';
    equalBg.style.boxShadow = '0 4px hsl(6, 70%, 34%)';
    ball.style.backgroundColor = 'hsl(6, 63%, 50%)';

    keysBg.forEach((keybg) => {
      keybg.style.backgroundColor = 'hsl(30, 25%, 89%)';
      keybg.style.boxShadow = '0 4px hsl(28, 16%, 65%)';
    });

    bgs.forEach((bg) => {
      bg.style.backgroundColor = 'hsl(225, 21%, 49%)';
      bg.style.boxShadow = '0 4px hsl(224, 28%, 35%)';
    });

    colorsText.forEach((colorText) => {
      colorText.style.color = 'hsl(221, 14%, 31%)';
    });
  } else if (counter === 1) {
    ball.style.left = '1.6rem';
    counter = 2;

    body.style.color = 'hsl(60, 10%, 19%)';
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';

    toggleBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
    calcBg.style.backgroundColor = 'hsl(0, 5%, 81%)';
    displayBg.style.backgroundColor = 'hsl(0, 0%, 93%)';
    equalBg.style.backgroundColor = 'hsl(25, 98%, 40%)';
    equalBg.style.boxShadow = '0 4px hsl(25, 99%, 27%)';
    ball.style.backgroundColor = 'hsl(25, 98%, 40%)';

    keysBg.forEach((keybg) => {
      keybg.style.backgroundColor = 'hsl(45, 7%, 89%)';
      keybg.style.boxShadow = '0 4px hsl(35, 11%, 61%)';
    });

    bgs.forEach((bg) => {
      bg.style.backgroundColor = 'hsl(185, 42%, 37%)';
      bg.style.boxShadow = '0 4px hsl(185, 58%, 25%)';
    });

    colorsText.forEach((colorText) => {
      colorText.style.color = 'hsl(60, 10%, 19%)';
    });
  } else {
    ball.style.left = '3rem';
    counter = 0;

    body.style.color = 'hsl(52, 100%, 62%)';
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';

    toggleBg.style.backgroundColor = 'hsl(268, 71%, 12%)';
    calcBg.style.backgroundColor = ' hsl(268, 71%, 12%)';
    displayBg.style.backgroundColor = ' hsl(268, 71%, 12%)';
    equalBg.style.backgroundColor = 'hsl(176, 100%, 44%)';
    equalBg.style.boxShadow = '0 4px hsl(177, 92%, 70%)';
    ball.style.backgroundColor = 'hsl(176, 100%, 44%)';

    keysBg.forEach((keybg) => {
      keybg.style.backgroundColor = 'hsl(268, 47%, 21%)';
      keybg.style.boxShadow = '0 4px hsl(290, 70%, 36%)';
    });

    bgs.forEach((bg) => {
      bg.style.backgroundColor = 'hsl(281, 89%, 26%)';
      bg.style.boxShadow = '0 4px hsl(285, 91%, 52%)';
    });

    colorsText.forEach((colorText) => {
      colorText.style.color = 'hsl(52, 100%, 62%)';
    });
  }
}
