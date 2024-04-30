let number1 = ""
let number2 = ""
let operator = ""
let isEqualPressed = false
// DOM ELEMENTS
const display = document.querySelector("#display")
const digits = document.querySelectorAll("#digit")
const operations = document.querySelectorAll("#operation")
const equal = document.querySelector("#operation-equal")
const clear = document.querySelector("#clear")
// FUNCTION FOR THE CALCULATOR 
function populateDisplay(number) {
    display.textContent += number
}
function updateDisplay(number) {
    display.textContent = number
}
function clearDisplay() {
    display.textContent = ""
    number1 = ""
    number2 = ""
    operator = ""
}
// LISTENERS
digits.forEach(digit => {
    digit.addEventListener("click", (e) => {
        const digitContent = e.target.textContent
        // Si no hay operador es porque aun no se cargo todo el numero 1
        if (!operator) {
            if (isEqualPressed) {
                clearDisplay()
                number1 = digitContent
                isEqualPressed = false
            } else {
                number1 += digitContent
            }
        } else {
            number2 += digitContent
        }
        populateDisplay(digitContent)
    })
})
operations.forEach(operation => {
    operation.addEventListener("click", (e) => {
        const operationContent = e.target.textContent
        // Si ya tengo un operador y la variable number2 cargada opero con number1 y number2 y el resultado lo opero con el nuevo operador
        if (operator && number2) {
            const result = operate(operator, number1, number2)
            updateDisplay(result)
            number1 = result
            number2 = ""
        }
        operator = operationContent
        populateDisplay(operationContent)
    })
})
equal.addEventListener("click", () => {
    if (operator && number1 && number2) {
        const result = operate(operator, number1, number2)
        updateDisplay(result)
        number1 = result
        number2 = ""
        operator = ""
        isEqualPressed = true
    }
})
clear.addEventListener("click", clearDisplay)


function operate(operator, number1, number2) {
    number1 = Number(number1)
    number2 = Number(number2)
    if (operator === "+") {
        return add(number1, number2)
    } else if (operator === "-") {
        return subtract(number1, number2)
    } else if (operator === "X") {
        return multiply(number1, number2)
    } else if (operator === "/") {
        return divide(number1, number2)
    } else {
        return "WTF"
    }
}
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    const result = a / b
    if (result.toString().includes(".")) {
        return result.toFixed(2)
    }
    if (!Number.isFinite(result) || Number.isNaN(result)) {
        return "MATH ERROR"
    }
    return a / b
}
