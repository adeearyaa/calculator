// first im going to add al the basic functionality of the calculator

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
    switch(operator) {
        case "add":
            add(num1,num2);
            break
        case "subtract":
            subtract(num1, num2);
            break
        case "multiply":
            multiply(num1,num2);
            break
        case "divide":
            divide(num1,num2);
            break
        default:
            break;
    }
}