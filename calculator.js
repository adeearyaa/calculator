// first im going to add all the basic functionality of the calculator
let firstNumber = "";
let secondNumber = "";
let operator = "";
let currentNum = 1;
let secondOperator = false;

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function operate(num1, num2, operator) {
    let result;
    switch(operator) {
        case "add":
            result = add(num1,num2);
            break
        case "subtract":
            result = subtract(num1, num2);
            break
        case "multiply":
            result = multiply(num1,num2);
            break
        case "divide":
            result = divide(num1,num2);
            break
        default:
            break;
    }
    return result;
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const evaluator = document.querySelector(".equals");
const clear = document.querySelector(".clear");

evaluator.addEventListener("click", () => {
    let finalResult = operate(Number(firstNumber),Number(secondNumber), operator);
    currentNum = 1;
    operator = "";
    secondNumber = "";
    firstNumber = String(finalResult);
    display.textContent = finalResult;
    secondOperator = false;
})

clear.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = ""
    display.textContent = "";
    secondOperator = false;
})

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += " " + number.textContent;
        if (currentNum == 1) {
            firstNumber += number.textContent
        } else {
            secondNumber += number.textContent
        }
    }
    )
})

operators.forEach((op) => {
    op.addEventListener("click", () => {
        display.textContent += " " +  op.textContent;
        if (currentNum == 1) {
            currentNum = 2
        }
        let operation = op.textContent
        switch(operation) {
            case "+":
                operator = "add";
                break;
            case "-":
                operator = "subtract";
                break;
            case "/":
                operator = "divide";
                break;
            case "*":
                operator = "multiply";
                break;
            default:
                break;
        }
        if (secondOperator == true) {
            firstNumber = operate(Number(firstNumber), Number(secondNumber), operator)
            currentNum = 2;
            secondNumber = "";
        }
        secondOperator = true
    }
    )
})