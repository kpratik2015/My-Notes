const evaluate = (exp) => {
  const operands = [];
  const operators = [];
  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];
    const isDigit = (c) => !isNaN(parseInt(c, 10));
    const isOperator = (c) =>
      c === "+" || c === "-" || c === "/" || c === "*" || c === "^";
    if (isDigit(char)) {
      let num = "";
      while (isDigit(exp[i])) {
        num += exp[i];
        i++;
      }
      i--;
      operands.push(parseInt(num, 10));
    } else if (char === "(") {
      operators.push(char);
    } else if (char === ")") {
      while (operators.at(-1) !== "(") {
        const output = performOperation(operands, operators);
        operands.push(output); //push result back to stack
      }
      operators.pop();
    } else if (isOperator(char)) {
      const precedence = (c) => {
        switch (c) {
          case "+":
          case "-":
            return 1;
          case "*":
          case "/":
            return 2;
          case "^":
            return 3;
        }
        return -1;
      };
      // Do operations till current operator has lower or equal precedence than the top of operator stack
      // or clear operators of higher or equal precedence than current operator
      while (
        operators.length > 0 &&
        precedence(char) <= precedence(operators.at(-1))
      ) {
        const output = performOperation(operands, operators);
        operands.push(output); //push result back to stack
      }
      operators.push(char); // push current operator
    }
  }
  while (operators.length > 0) {
    const output = performOperation(operands, operators);
    operands.push(output); // push final result back to stack
  }
  return operands.pop();
};

function performOperation(operands, operators) {
  const a = operands.pop();
  const b = operands.pop();
  const operation = operators.pop();
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return b - a;
    case "*":
      return a * b;
    case "/":
      if (a == 0) {
        console.log("Cannot divide by zero");
        return 0;
      }
      return b / a;
  }
  return 0;
}

const expression = "2*(5*(3+6))/5-2";

console.log(evaluate(expression));
