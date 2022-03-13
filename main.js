const keysPad = document.querySelectorAll('.key');

const display = document.querySelector('.display-numbers');

const deleteAll = document.querySelector('.delete');
const plus = document.querySelector('.plus').addEventListener('click', doSum);
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const dot = document.querySelector('.dot');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');

let allNumbers = '0';
let firstNumber = '0';
let secondNumber = '0';
let counter = 0;

keysPad.forEach((keypad) => {
  keypad.addEventListener('click', () => {
    allNumbers += keypad.innerText;
    display.innerHTML = allNumbers.slice(1);
  });
});

function doSum() {
  firstNumber = allNumbers;
  console.log(firstNumber);
}

// // console.log(allNumbers.slice(1));

// if (
//   !allNumbers.includes('+') ||
//   !allNumbers.includes('-') ||
//   !allNumbers.includes('x') ||
//   !allNumbers.includes('/')
// ) {
//   firstNumber = allNumbers;
// }

// console.log(firstNumber);

// if (
//   firstNumber.includes('+') ||
//   firstNumber.includes('-') ||
//   firstNumber.includes('x') ||
//   firstNumber.includes('/')
// ) {
//   //   display.innerHTML = firstNumber.slice(1);
//   //   console.log(firstNumber.slice(1));

//   secondNumber += keypad.innerHTML;
//   //   console.log(secondNumber.slice(2));
// }
