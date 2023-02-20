import { mainScreen, memoryClear, memoryRecallElement, memoryItems, localMemory } from "./Variables";

export class MemoryOperations {

    disableButton() {
        memoryClear.className += " disabled";
        memoryRecallElement.className += " disabled";
    }

    enableButton() {
        memoryClear.setAttribute("class", "btn memory");
        memoryRecallElement.setAttribute("class", "btn memory");
    }

    getMemoryItem(): void {
        let storedMemoryData = JSON.parse(localStorage.getItem(localMemory)!);
        return storedMemoryData;
    }

    setMemoryItem(storedMemoryData: object): void {
        localStorage.setItem(localMemory, JSON.stringify(storedMemoryData));
    }
    
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

    memoryPlusSubtract(clickedId: string) {
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
            }
        }
    }

    memoryClear() {
        localStorage.removeItem(localMemory);
        this.checkMemory();
    }

    memoryPlusSub(operators: any) {
        let storedMemoryData: any = this.getMemoryItem();
        if (storedMemoryData == null) {
            if (operators == '-') {
                memoryItems.push(Math.abs(mainScreen.innerHTML) * -1);
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
        if (storedMemoryData == null) {
            this.disableButton();
        } else {
            this.enableButton();
        }
    }
}