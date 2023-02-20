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
export class MemoryOperations{

  disableButton(){
      memoryClear.className += " disabled";
      memoryRecallElement.className += " disabled";
  } 
  
  enableButton(){
      memoryClear.setAttribute("class", "btn");
      memoryRecallElement.setAttribute("class", "btn");
  } 
  
  getMemoryItem(): void{
    let storedMemoryData = JSON.parse(localStorage.getItem(localMemory)!);
    return storedMemoryData;
  }
  
  setMemoryItem(storedMemoryData): void{
    localStorage.setItem(localMemory, JSON.stringify(storedMemoryData));
  }
  
  //Memory Operations Start
  memoryStore() {
    let storedMemoryData: any = this.getMemoryItem();
    if (mainScreen.innerHTML != "" && !isNaN(mainScreen.innerHTML)) {
      if (storedMemoryData != null) {
        storedMemoryData.push(mainScreen.innerHTML);
        this.setMemoryItem(storedMemoryData);
        this.enableButton();
      } else {
        memoryItems.push(mainScreen.innerHTML);
        this.setMemoryItem(memoryItems);
        this.enableButton();
      }
    }
  }
  
  memoryPlusSubtract(clickedId) {
    if (mainScreen.innerHTML != "") {
        switch (clickedId) {
          case "memory-plus":
            let plus = "+";
            this.memoryPlusSub(plus)
            break;
          case "memory-subtract":
            let subtract = "-";
            this.memoryPlusSub(subtract)
            break;
          default:
            localStorage.removeItem(localMemory);
            this.checkMemory();
            break;
        }
      }
  }
  
   memoryPlusSub(operators){
    let storedMemoryData: any = this.getMemoryItem();
    if(storedMemoryData == null){
     if(operators == '-'){
      memoryItems.push(Math.abs(mainScreen.innerHTML)*-1);
      this.setMemoryItem(memoryItems);
      this.enableButton();
     } else {
      memoryItems.push(Math.abs(mainScreen.innerHTML));
      this.setMemoryItem(memoryItems);
      this.enableButton();
     }
    } else {
      let lastItems = storedMemoryData.length - 1;
      let replaceData = eval(storedMemoryData[lastItems] + operators + mainScreen.innerHTML);
      storedMemoryData[lastItems] = replaceData;
      this.setMemoryItem(storedMemoryData);
    }
  }
  
   memoryRecall() {
    let storedMemoryData: any = this.getMemoryItem();
    mainScreen.innerHTML = storedMemoryData[storedMemoryData.length - 1];
  }
  
   checkMemory() {
    let storedMemoryData = this.getMemoryItem();
    if(storedMemoryData == null) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  }
}