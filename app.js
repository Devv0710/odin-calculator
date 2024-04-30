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
    return a / b
}
