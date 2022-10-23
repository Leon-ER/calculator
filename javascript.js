const buttons = document.querySelectorAll(".buttons");
const output = document.querySelector(".result");
const outputTop = document.querySelector(".equasion");
const operatorsButtons = document.querySelectorAll(".operators");

// on button click executes the code below && findes the values of
// the operator , number 1 and number 2
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = e.target.dataset.value;
    outputTop.innerText += input;
  });
});
operatorsButtons.forEach((button) => {
  button.addEventListener("click", operatesButton);
});

function getValue(formula) {
  if (formula.includes("/")) {
    // It will split the values into a array at the operator and store them
    const splitValues = formula.split("/");
    // Calls the operate functions with the values from the array;
    return operate("/", splitValues[0], splitValues[1]);
  }
  if (formula.includes("+")) {
    const splitValues = formula.split("+");
    return operate("+", splitValues[0], splitValues[1]);
  }
  if (formula.includes("-")) {
    const splitValues = formula.split("-");
    return operate("-", splitValues[0], splitValues[1]);
  }
  if (formula.includes("*")) {
    const splitValues = formula.split("*");
    return operate("*", splitValues[0], splitValues[1]);
  }
}
// Calculates based on the privious values that were determined in the click event
function operate(operators, value1, value2) {
  const num1 = Number(value1);
  const num2 = Number(value2);
  let total;
  if (operators == "/") {
    // cant divide by a 0
    if (num2 === 0) {
      return null;
    }
    total = num1 / num2;
  }
  if (operators == "+") {
    total = num1 + num2;
  }
  if (operators == "*") {
    total = num1 * num2;
  }
  if (operators == "-") {
    total = num1 - num2;
  }
  return total;
}

function deleteText() {
  output.innerText = "";
  outputTop.innerText = "";
}
function calc() {
  let store = getValue(outputTop.innerText);
  output.innerText = store;
  outputTop.innerText = store;
}
function operatesButton(e) {
  const input = e.target.dataset.value;
  if (
    outputTop.innerText.includes("/") ||
    outputTop.innerText.includes("+") ||
    outputTop.innerText.includes("-") ||
    outputTop.innerText.includes("*")
  ) {
    calc();
  }
  outputTop.innerText += input;
}
