let mainScreen:any = document.getElementById("output-screen") as HTMLDivElement;
let errorMessage = document.getElementById("error-message") as HTMLDivElement;
let memoryClear = document.getElementById("memory-clear") as HTMLElement;
let memoryRecallElement = document.getElementById("memory-recall") as HTMLElement;
let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
let errorMsg = "Please enter valid input";
let memoryItems:any = [];
let localMemory:string = "calcmemory";
let openParenthesisCounter = 0;
let closeParenthesisCounter = 0;
let parenthesis = document.getElementById("parenthesis-counter") as HTMLSpanElement | any;

import { Validations } from "./classes/Validations";
var validate = new Validations();
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
  let lastEntry = mainScreen.innerHTML.slice(-1);
  if (mainScreen.innerHTML == "0" && value != ".") {
    operators.includes(value) ? mainScreen.innerHTML += value : mainScreen.innerHTML = value;
  } else if (mainScreen.innerHTML.substr(mainScreen.innerHTML.length - 4) == ".e+0") {
    operators.includes(value) ? mainScreen.innerHTML = mainScreen.innerHTML : 
    mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
  } else if(Number(mainScreen.innerHTML) == Math.PI || Number(mainScreen.innerHTML) == Math.E){
    operators.includes(value) ? mainScreen.innerHTML += value : 
    mainScreen.innerHTML = value;
  } else if(lastEntry == "("){
   validate.validateInput(value) && mainScreen.innerHTML != "" ? mainScreen.innerHTML += "0"+ value :  
    mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
  } else {
    validate.validateInput(value) && mainScreen.innerHTML != "" ? mainScreen.innerHTML += value :  
    mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1) + value;
  }
}



function displayOutput(value){
  if(isNaN(value) || !isFinite(value)){
    //showError(errorMsg);
    mainScreen.innerHTML = "0";
  }else{
    mainScreen.innerHTML = value;
  }
}

document.getElementById("fixedToExponent").addEventListener("click", function(event) {
  //calculate.fixedToExponent();
}, false);

document.getElementById("fixedToExponent").addEventListener("click", function(event) {
  //calculate.fixedToExponent();
}, false);


document.querySelector(".btn").addEventListener("click", function(event) {
  displayEntry(this.innerHTML);
}, false);
