let childScreen = document.getElementById("child-screen");
let mainScreen = document.getElementById("output-screen");
let errorMessage = document.getElementById("error-message");
let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
let memoryClear = document.getElementById("memory-clear");
let memoryRecallElement = document.getElementById("memory-recall");
let errorMsg = "Please enter valid input";
let memoryItems = [];
let localMemory = "calcmemory";
let openParenthesisCounter = 0;
let closeParenthesisCounter = 0;
let parenthesis = document.getElementById("parenthesis-counter");
export function openParenthesisCount(operator) {
    if (operator == "-") {
        openParenthesisCounter--;
    }
    else {
        openParenthesisCounter++;
    }
}
export { mainScreen, operators, childScreen, errorMessage, memoryClear, memoryRecallElement, errorMsg, memoryItems, localMemory, openParenthesisCounter, closeParenthesisCounter, parenthesis };
