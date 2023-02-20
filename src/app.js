"use strict";
exports.__esModule = true;
var mainScreen = document.getElementById("output-screen");
var errorMessage = document.getElementById("error-message");
var memoryClear = document.getElementById("memory-clear");
var memoryRecallElement = document.getElementById("memory-recall");
var operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
var errorMsg = "Please enter valid input";
var memoryItems = [];
var localMemory = "calcmemory";
var openParenthesisCounter = 0;
var closeParenthesisCounter = 0;
var parenthesis = document.getElementById("parenthesis-counter");
var Validations_1 = require("./classes/Validations");
var validate = new Validations_1.Validations();
/*
import { Calculation } from "./classes/Math";
import { Validations } from "./classes/Validations";
import { MemoryOperations } from "./classes/Memory";

var memory = new MemoryOperations();
var validate = new Validations();
var calculate = new Calculation();
memory.checkMemory();

document.getElementById("calculate").addEventListener("click", function() {
  calculate.calculator();
});
function memoryFunction(clickedId){
  if(clickedId == "memory-recall"){
    memory.memoryRecall();
  }

}*/
function displayEntry(value) {
    console.log("ss");
    var lastEntry = mainScreen.innerHTML.slice(-1);
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
function displayOutput(value) {
    if (isNaN(value) || !isFinite(value)) {
        //showError(errorMsg);
        mainScreen.innerHTML = "0";
    }
    else {
        mainScreen.innerHTML = value;
    }
}
document.getElementById("fixedToExponent").addEventListener("click", function (event) {
    //calculate.fixedToExponent();
}, false);
document.getElementById("fixedToExponent").addEventListener("click", function (event) {
    //calculate.fixedToExponent();
}, false);
document.querySelector(".btn").addEventListener("click", function (event) {
    displayEntry(this.innerHTML);
}, false);
