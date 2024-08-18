
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

let num1 = null;
let operator = null;
let num2 = null;

let displayVal = "";
document.getElementById("display").innerHTML = displayVal;

let numButtons = document.querySelectorAll(".num");
for (let button of numButtons) {
    button.addEventListener('click',(event) => {
        console.log(button.id);
        document.getElementById("display").innerHTML += button.id;
    });
}


let operatorButtons = document.querySelectorAll(".operator");
for (let button of operatorButtons) {
    button.addEventListener('click',(event) => {
        //console.log(button.innerHTML);
        //document.getElementById("display").innerHTML += button.id;

        if(num1 === null) {
            num1 = document.getElementById("display").innerHTML;
            console.log("num1 is now: " + num1);

            document.getElementById("display").innerHTML = "";

            operator = button.id;
            console.log("operator is now: " + operator);
        }


    });
}



clearButton = document.querySelector("#clear");
clearButton.addEventListener('click',(event) => {
    console.log(clearButton.id);
    document.getElementById("display").innerHTML = "";
    num1 = null;
    num2 = null;
    operator = null;
});

// add(5,3)
// subtract(5,3)
// multiply(5,3)
// divide(20,5)