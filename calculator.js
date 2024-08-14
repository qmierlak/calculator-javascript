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

let displayVal = "";
document.getElementById("display").innerHTML = displayVal;

let numButtons = document.querySelectorAll(".num");
for (let button of numButtons) {
    button.addEventListener('click',(event) => {
        console.log(button.id);
        document.getElementById("display").innerHTML += button.id;
    });
}

clearButton = document.querySelector("#clear");
clearButton.addEventListener('click',(event) => {
    console.log(clearButton.id);
    document.getElementById("display").innerHTML = "";
});

// add(5,3)
// subtract(5,3)
// multiply(5,3)
// divide(20,5)