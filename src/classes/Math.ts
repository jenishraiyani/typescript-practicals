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
export class Calculation{
    calculator() {
     try {
       if (mainScreen.innerHTML != "" && !operators.includes(mainScreen.innerHTML.substr(mainScreen.innerHTML.length - 1))) {
         if (mainScreen.innerHTML.includes("^")) {
           let findXYSqaure = mainScreen.innerHTML.split("^", 2);
           childScreen.innerHTML = mainScreen.innerHTML;
           displayOutput(Math.pow(findXYSqaure[0], findXYSqaure[1]));
         } else {
           childScreen.innerHTML = mainScreen.innerHTML;
           let count = eval(mainScreen.innerHTML);
           displayOutput(count);
         }
       }else{
         //showError(errorMsg);
       }
     } catch (err) {
       //showError(errorMsg);
     }
   }
 
   
 //Remove all the entry from screen
  allClear() {
   mainScreen.innerHTML = "0";
   childScreen.innerHTML = "";
   parenthesis.innerHTML = "";
   openParenthesisCounter = 0;
 }
 
 //Remove last entry
  clearEntry() {
   if (mainScreen.innerHTML == "0") {
     childScreen.innerHTML = childScreen.innerHTML.slice(0, -1);
   } else {
     if (mainScreen.innerHTML.length == 1) {
       mainScreen.innerHTML = "0";
       parenthesis.innerHTML = "";
       openParenthesisCounter = 0;
     } else {
       let lastEntry = mainScreen.innerHTML.slice(-1);
       if(lastEntry == "("){
         openParenthesisCounter--;
         parenthesis.innerHTML = openParenthesisCounter;
         mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1);
       } else if(lastEntry == ")"){
         openParenthesisCounter++;
         parenthesis.innerHTML = openParenthesisCounter;
         mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1);
       } else {
         mainScreen.innerHTML = mainScreen.innerHTML.slice(0, -1);
       }
     }
   }
 }
 
  fixedToExponent() {
   let lastFourEntry = mainScreen.innerHTML.substr(mainScreen.innerHTML.length - 4);
   let lastEntry = mainScreen.innerHTML.slice(-1);
   if (lastEntry == ".") {
     mainScreen.innerHTML += "e+0";
   } else if(operators.includes(lastEntry)){
     mainScreen.innerHTML = mainScreen.innerHTML;
   } else if (lastFourEntry != ".e+0") {
     mainScreen.innerHTML += ".e+0";
   } else {
     mainScreen.innerHTML = mainScreen.innerHTML;
   }
 }
 
  getConstant(clickedId) {
   switch (clickedId) {
     case "PI":
       mainScreen.innerHTML = Math.PI;
       break;
     case "Euler":
       mainScreen.innerHTML = Math.E;
       break;
   }
 }
 
  getDerivative() {
   if (mainScreen.innerHTML == 0) {
     let msg = "Cannot divide by zero";
     this.showError(msg);
   } else {
     childScreen.innerHTML = `1/(${mainScreen.innerHTML})`;
     displayOutput(eval(String(1/mainScreen.innerHTML)));
   }
 }
 
  getAbsoluteValue() {
   displayOutput(Math.abs(mainScreen.innerHTML));
 }
 
  getModulo() {
   let modulo = "%";
   if (validateInput(modulo)) {
     mainScreen.innerHTML += modulo;
   }
 }
 
  getFactorial() {
   let factorialNumber = mainScreen.innerHTML;
   if (factorialNumber < 0) {
     this.showError(errorMsg);
   } else if (factorialNumber == 0) {
     mainScreen.innerHTML = "1";
   } else {
     for (let i = factorialNumber - 1; i >= 1; i--) {
       factorialNumber *= i;
     }
     childScreen.innerHTML = `fact(${mainScreen.innerHTML})`;
     displayOutput(factorialNumber);
   }
 }
 
  getPower(clickedId) {
   switch (clickedId) {
     case "findSquare":
       childScreen.innerHTML = `sqr(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(mainScreen.innerHTML,2));
       break;
     case "findXRoot":
       childScreen.innerHTML = `√(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(mainScreen.innerHTML,1/2));
       break;
     case "findTenPower":
       childScreen.innerHTML = `10^(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(10,mainScreen.innerHTML));
       break;
     case "findXCube":
       childScreen.innerHTML = `cube(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(mainScreen.innerHTML,3));
       break;
     case "findCubeRoot":
       childScreen.innerHTML = `cuberoot(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(mainScreen.innerHTML,1/3));
       break;
     case "findTwoXSquare":
       childScreen.innerHTML = `2^(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(2,mainScreen.innerHTML));
       break;
     case "findEulerXSquare":
       childScreen.innerHTML = `e^(${mainScreen.innerHTML})`;
       displayOutput(Math.pow(Math.E,mainScreen.innerHTML));
       break;
     case "findXYSqaure":
       let exponent = "^";
       if (validateInput(exponent)) {
         mainScreen.innerHTML += exponent;
       }
       break;
   }
 }
 
  getLog(clickedId) {
   switch (clickedId) {
     case "logTenBase":
       childScreen.innerHTML = `log(${mainScreen.innerHTML})`;
       displayOutput(Math.log10(mainScreen.innerHTML));
       break;
     case "naturalLogarithm":
       childScreen.innerHTML = `ln(${mainScreen.innerHTML})`;
       displayOutput(Math.log(mainScreen.innerHTML));
       break;
   }
 }
 
  setPlusMinus() {
   let firstOperator = mainScreen.innerHTML.charAt(0);
   if (firstOperator == "-") {
     mainScreen.innerHTML = mainScreen.innerHTML.slice(1);
   } else {
     mainScreen.innerHTML = mainScreen.innerHTML.slice(0, 0) + "-" + mainScreen.innerHTML.slice(0);
   }
 }
 
 
 
 
  getMathFunctionValue(clickedId) {
   switch (clickedId) {
     case "rand":
       displayOutput(Math.random());
       break;
     case "floor":
       childScreen.innerHTML = `floor(${mainScreen.innerHTML})`;
       displayOutput(Math.floor(mainScreen.innerHTML));
       break;
     case "ceil":
       childScreen.innerHTML = `ceil(${mainScreen.innerHTML})`;
       displayOutput(Math.ceil(mainScreen.innerHTML));
       break;
   }
 }
 
  getTrigonometryValue(clickedId) {
   switch (clickedId) {
     case "sin":
       childScreen.innerHTML = `sin(${mainScreen.innerHTML})`;
       displayOutput(Math.sin(mainScreen.innerHTML));
       break;
     case "cos":
       childScreen.innerHTML = `cos(${mainScreen.innerHTML})`;
       displayOutput(Math.cos(mainScreen.innerHTML));
       break;
     case "tan":
       childScreen.innerHTML = `tan(${mainScreen.innerHTML})`;
       displayOutput(Math.tan(mainScreen.innerHTML));
       break;
     case "sinh":
       childScreen.innerHTML = `sinh(${mainScreen.innerHTML})`;
       displayOutput(Math.sinh(mainScreen.innerHTML));
       break;
     case "cosh":
       childScreen.innerHTML = `cosh(${mainScreen.innerHTML})`;
       displayOutput(Math.cosh(mainScreen.innerHTML));
       break;
     case "tanh":
       childScreen.innerHTML = `tanh(${mainScreen.innerHTML})`;
       displayOutput(Math.tanh(mainScreen.innerHTML));
       break;
   }
 }
 
  showError(msg) {
   errorMessage.innerHTML = `<div class='alert alert-danger w-25' role='alert'>${msg}</div>`;
   window.setTimeout(function () {
     errorMessage.innerHTML = "";
   }, 3000);
 }
 }