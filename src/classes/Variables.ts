let childScreen:any = document.getElementById("child-screen") as HTMLDivElement;
let mainScreen:any = document.getElementById("output-screen") as HTMLDivElement;
let errorMessage = document.getElementById("error-message") as HTMLDivElement;
let operators = ["%", "+", "-", "*", "/", ".", "^", ".e+0"];
let memoryClear = document.getElementById("memory-clear") as HTMLElement;
let memoryRecallElement = document.getElementById("memory-recall") as HTMLElement;
let errorMsg = "Please enter valid input";
let memoryItems:any = [];
let localMemory:string = "calcmemory";
let openParenthesisCounter = 0;
let closeParenthesisCounter = 0;
let parenthesis = document.getElementById("parenthesis-counter") as HTMLSpanElement | any;

export function openParenthesisCount(operator:string) {
    if(operator == "-"){
        openParenthesisCounter--;
    }else{
         openParenthesisCounter++;
    }
   
}
export {mainScreen, operators, childScreen, errorMessage, memoryClear, memoryRecallElement, errorMsg,
     memoryItems, localMemory, openParenthesisCounter, closeParenthesisCounter,parenthesis}