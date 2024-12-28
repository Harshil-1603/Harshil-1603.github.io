document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    let currentInput = "";
    let operator = null;
    let firstOperand = null;
  
    document.querySelectorAll("input[type='button']").forEach((button) => {
      button.addEventListener("click", () => {
        const value = button.value;
  
        if (!isNaN(value)) {
          currentInput += value;
          output.value = currentInput;
        } else if (value === "CE") {
          currentInput = "";
          firstOperand = null;
          operator = null;
          output.value = "";
        } else if (value === "=") {
          if (firstOperand !== null && operator && currentInput) {
            const secondOperand = parseFloat(currentInput);
            let result = calculate(firstOperand, secondOperand, operator);
            output.value = result;
            currentInput = "";
            firstOperand = result;
            operator = null;
          }
        } 
        else {
            if (currentInput || output.value) {
              firstOperand = currentInput ? parseFloat(currentInput) : parseFloat(output.value);
              operator = value;
              output.value=operator
              currentInput = ""; // Clear input to start typing the next operand
            }}
      });
    });
  
    const calculate = (a, b, op) => {
      switch (op) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return b !== 0 ? a / b : "Error";
        default:
          return null;
      }
    };
  });
  