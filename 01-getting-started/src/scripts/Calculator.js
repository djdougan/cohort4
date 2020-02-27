
class Calculator {
    constructor() {
        // debugger;
        this.btn0 = document.getElementById("btn-0");
        this.btn1 = document.getElementById("btn-1");
        this.btn2 = document.getElementById("btn-2");
        this.btn3 = document.getElementById("btn-3");
        this.btn4 = document.getElementById("btn-4");
        this.btn5 = document.getElementById("btn-5");
        this.btn6 = document.getElementById("btn-6");
        this.btn7 = document.getElementById("btn-7");
        this.btn8 = document.getElementById("btn-8");
        this.btn9 = document.getElementById("btn-9");
        this.btnPlus = document.getElementById("btn-plus");
        this.btnSubtract = document.getElementById("btn-subtract");
        this.btnMultiply = document.getElementById("btn-multiply");
        this.btnDivide = document.getElementById("btn-divide");
        this.btnDecimal = document.getElementById("btn-decimal");
        this.btnEquals = document.getElementById("btn-equals");
        this.btnClear = document.getElementById("btn-clear");
        this.init();
    };

    updateDisplay(e) {
        // debugger;
        let btn = e.target;
        let input = btn.dataset.sym;
        let display = document.getElementById("input-display");
        display.value += input;
    }
    clearDisplay() {
        let display = document.getElementById("input-display");
        display.value = "";
    }
    init() {
        // debugger;
        // this.input.addEventListener('click', this.updateDisplay);
        this.btn1.addEventListener('click', this.updateDisplay);
        this.btn2.addEventListener('click', this.updateDisplay);
        this.btn0.addEventListener('click', this.updateDisplay);
        this.btn3.addEventListener('click', this.updateDisplay);
        this.btn4.addEventListener('click', this.updateDisplay);
        this.btn5.addEventListener('click', this.updateDisplay);
        this.btn6.addEventListener('click', this.updateDisplay);
        this.btn7.addEventListener('click', this.updateDisplay);
        this.btn8.addEventListener('click', this.updateDisplay);
        this.btn9.addEventListener('click', this.updateDisplay);
        this.btnPlus.addEventListener('click', this.updateDisplay);
        this.btnSubtract.addEventListener('click', this.updateDisplay);
        this.btnMultiply.addEventListener('click', this.updateDisplay);
        this.btnDivide.addEventListener('click', this.updateDisplay);
        this.btnDecimal.addEventListener('click', this.updateDisplay);
        this.btnEquals.addEventListener('click', this.calculate);
        this.btnClear.addEventListener('click', this.clearDisplay);
    }

    calculate() {
        let display = document.getElementById("input-display");
        let p = display.value;
        display.value = eval(p);

    }



}
let calc = new Calculator();
// export default Calculator;