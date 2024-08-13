console.log("Hello world")


function add(a, b) {
    const result = a + b;
    console.log(result);
}
function subtract(a, b) {
    const result = a - b;
    console.log(result);
}
function multiply(a, b) {
    const result = a * b;
    console.log(result);
}
function divide(a, b) {
    const result = a / b;
    console.log(result);
}


function operate(a, b) {
    // calls an above function
    add(a,b);
}

const num1 = 0;
const operator = null;
const num2 = 0;

let displayVal = 0;


// add(5,3)
// subtract(5,3)
// multiply(5,3)
// divide(20,5)