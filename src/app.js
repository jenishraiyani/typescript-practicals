import { mainScreen, operators } from "./classes/Variables.js";
import { Validations } from "./classes/Validations.js";
import { Calculation } from "./classes/Math.js";
import { MemoryOperations } from "./classes/Memory.js";
// Button List
let numbers = document.querySelectorAll('.display-entry');
let parenthesis = document.querySelectorAll('.parenthesis');
let mathOperations = document.querySelectorAll('.math-function');
let memoryOperations = document.querySelectorAll('.memory');
//Class Objects
let validate = new Validations();
let math = new Calculation();
let memoryOperation = new MemoryOperations();
memoryOperation.checkMemory();
function displayEntry(value) {
    let lastEntry = mainScreen.innerHTML.slice(-1);
    if (mainScreen.innerHTML == "0" && value != ".") {
        operators.includes(value) ? mainScreen.innerHTML += value : mainScreen.innerHTML = value;
    }
    else if (mainScreen.innerHTML.substr(mainScreen.innerHTML.length - 4) == ".e+0") {
        operators.includes(value) ? mainScreen.innerHTML = mainScreen.innerHTML :
            mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
    }
    else if (Number(mainScreen.innerHTML) == Math.PI || Number(mainScreen.innerHTML) == Math.E) {
        operators.includes(value) ? mainScreen.innerHTML += value :
            mainScreen.innerHTML = value;
    }
    else if (lastEntry == "(") {
        validate.validateInput(value) && mainScreen.innerHTML != "" ? mainScreen.innerHTML += "0" + value :
            mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
    }
    else {
        validate.validateInput(value) && mainScreen.innerHTML != "" ? mainScreen.innerHTML += value :
            mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
    }
}
for (let elements of numbers) {
    elements.addEventListener('click', function (event) {
        displayEntry(this.value);
    });
}
for (let elements of parenthesis) {
    elements.addEventListener('click', function (event) {
        if (this.value == '(') {
            validate.openParenthesis();
        }
        else {
            validate.closeParenthesis();
        }
    });
}
for (let elements of memoryOperations) {
    elements.addEventListener('click', function (event) {
        let memoryFunction = this.id;
        switch (memoryFunction) {
            case "memory-clear":
                memoryOperation.memoryClear();
                break;
            case "memory-recall":
                memoryOperation.memoryRecall();
                break;
            case "memory-plus":
                memoryOperation.memoryPlusSubtract(this.id);
                break;
            case "memory-subtract":
                memoryOperation.memoryPlusSubtract(this.id);
                break;
            case "memory-store":
                memoryOperation.memoryStore();
                break;
        }
    });
}
for (let elements of mathOperations) {
    elements.addEventListener('click', function (event) {
        let mathFunction = this.value;
        switch (mathFunction) {
            case "exponent":
                math.fixedToExponent();
                break;
            case "derivative":
                math.getDerivative();
                break;
            case "absolute":
                math.getAbsoluteValue();
                break;
            case "mathvalue":
                math.getMathFunctionValue(this.id);
                break;
            case "constant":
                math.getConstant(this.id);
                break;
            case "modulo":
                math.getModulo();
                break;
            case "factorial":
                math.getFactorial();
                break;
            case "log":
                math.getLog(this.id);
                break;
            case "plusminus":
                math.setPlusMinus();
                break;
            case "trigonometry":
                math.getTrigonometryValue(this.id);
                break;
            case "getPower":
                math.getPower(this.id);
                break;
        }
    });
}
document.getElementById("calculate").addEventListener('click', function (event) {
    math.calculator();
});
document.getElementById("clear-all").addEventListener('click', function (event) {
    math.allClear();
});
document.getElementById("clear-entry").addEventListener('click', function (event) {
    math.clearEntry();
});
