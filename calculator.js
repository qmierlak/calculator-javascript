
function add(a, b) {
    a = Number(a);
    b = Number(b);
    const result = a + b;
    console.log(result);
    return result;
}
function subtract(a, b) {
    a = Number(a);
    b = Number(b);
    const result = a - b;
    console.log(result);
    return result;
}
function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    const result = a * b;
    console.log(result);
    return result;
}
function divide(a, b) {
    a = Number(a);
    b = Number(b);
    const result = a / b;
    console.log(result);
    return result;
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

        if(num1 !== null && num2 !== null && operator != null) {
            document.getElementById("display").innerHTML = "";
            num1 = null;
            num2 = null;
            operator = null;
        }

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

equalsButton = document.querySelector("#equals");
equalsButton.addEventListener('click',(event)=> {
    console.log(equalsButton.id);
    
    if (num1 !== null && num2 === null && operator !== null) {
        num2 = document.getElementById("display").innerHTML;
        console.log("num1 is now: " + num1);
        console.log("num2 is now: " + num2);

        // call operate 
        if(operator === "plus") {
            document.getElementById("display").innerHTML = add(num1,num2);
        }
        if(operator === "minus") {
            document.getElementById("display").innerHTML = subtract(num1,num2);

        }
        if(operator === "times") {
            document.getElementById("display").innerHTML = multiply(num1,num2);

        }
        if(operator === "divide") {
            document.getElementById("display").innerHTML = divide(num1,num2);
        }
    }

})


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