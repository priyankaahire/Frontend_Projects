class Calculator {

    static functionMap = {};
    constructor(prevOperandTextEl, currOperandTextEl) {
          this.prevOperandTextEl = prevOperandTextEl;
          this.currOperandTextEl = currOperandTextEl;
          this.clear();
          Calculator.functionMap = {
            '+': this.add,
            '-': this.sub,
            '*': this.multiple,
            '÷': this.divsion
        };
    }
    //* Clear 
    clear() {
        this.currentOperand = "";
        this.prevOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand =   this.currentOperand.toString().slice(0, -1);
    }

    chooseOperation(operation) {
        if(this.currentOperand === "") return;
        if(this.currentOperand !== "") {
            this.compute();
        }
       this.operation = operation; //* Here Now we have a operation which we defined as "" above;
       this.prevOperand = this.currentOperand;
       this.currentOperand = "";
    }
    compute() {
       let computation;
       const prev = parseFloat(this.prevOperand);
       const current = parseFloat(this.currentOperand);
       if(isNaN(prev) || isNaN(current)) return;
       let computationFun = Calculator.functionMap[this.operation];
       //% Instead of switch case I have used function maps
       /*switch(this.operation) {
           case '+':  computation = prev + current;
           break;
           case '-':  computation = prev - current;
           break;
           case '*':  computation = prev * current;
           break;
           case '÷':  computation = prev / current;
           break;
           default:
           break;
       }*/
       this.currentOperand = computationFun != null ? computationFun(prev, current) : '';
       this.operation = undefined;
       this.prevOperand = '';
    }
    add(prev, current) {
        return prev + current;
    };
    sub(prev, current) {
        return prev - current;
    }
    multiple(prev, current) {
        return prev * current;prv-operand
    }
    divsion(prev, current) {
        return prev / current;
    }
    appendNumber(number) {
        console.log(number);
        if( number == "." && this.currentOperand.includes(".")) return;
        this.currentOperand =  this.currentOperand.toString() + number.toString();
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const numberArr = stringNumber.split(".");
        const intDigits = parseFloat(numberArr[0]);
        const decDigits = numberArr[1];

        let intDisplay;
        if(isNaN(intDigits)) {
            intDisplay = "";
        } else {
            intDisplay = intDigits.toLocaleString("en", {
                maximumFractionDigits:0
            });
        }

        if(decDigits != null) {
            return `${intDisplay}.${decDigits}`;
        } else {
            return intDisplay;
        }
    }
    updateDisplay() {
       this.currOperandTextEl.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
            this.prevOperandTextEl.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        } else {
            this.prevOperandTextEl.innerText = this.getDisplayNumber(this.prevOperand);
        }
    }

   
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteBtn = document.querySelector("[data-delete]");
const clearBtn = document.querySelector("[data-allclear]");
const equalsBtn = document.querySelector("[data-equals]");
const prevOperandTextEl = document.querySelector("[data-prev-operand]");
const currOperandTextEl = document.querySelector("[data-curr-operand]");

document.addEventListener("DOMContentLoaded", () => {
    const calc = new Calculator(prevOperandTextEl, currOperandTextEl);

    numberButtons.forEach(buttons => {
        buttons.addEventListener('click', () => {
            calc.appendNumber(buttons.innerText);
            calc.updateDisplay();
        })
    });

    operationButtons.forEach(oprBtn => {
        oprBtn.addEventListener('click', () => {
            calc.chooseOperation(oprBtn.innerText);
            calc.updateDisplay();
        } )
    });

    equalsBtn.addEventListener('click', () => {
        calc.compute();
        calc.updateDisplay();
    });

    deleteBtn.addEventListener('click', () => {
        calc.delete();
        calc.updateDisplay();
    });

    clearBtn.addEventListener('click', () => {
        calc.clear();
        calc.updateDisplay();
    });

})