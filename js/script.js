const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }


  addDigit(digit) {
    // checando se a aoperação tem um ponto
    if(digit == "." && this.currentOperationText.innerText.includes(".")) {
      return
    }
    
    this.currentOperation = digit
    this.updateScreen()
  }

// processando operações da calculadora
processOperation(operation) {
  console.log(operation);
}

  updateScreen() {
    this.currentOperationText.innerText += this.currentOperation
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

// ativando eventos dos botões
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
