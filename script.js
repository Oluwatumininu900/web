// script.js

let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
    if (operation === null) {
        currentInput += number;
        updateDisplay(currentInput);
    } else {
        if (currentInput === '') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay(currentInput);
    }
}

function setOperation(op) {
    if (currentInput === '' && firstOperand === null) return;
    if (firstOperand !== null) {
        calculateResult();
    }
    operation = op;
    firstOperand = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operation === null || currentInput === '' || firstOperand === null) return;
    const a = parseFloat(firstOperand);
    const b = parseFloat(currentInput);
    let result;
    
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = 'Error';
            } else {
                result = a / b;
            }
            break;
    }
    
    updateDisplay(result);
    currentInput = result;
    operation = null;
    firstOperand = null;
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    firstOperand = null;
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
