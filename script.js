const numbers = document.querySelectorAll(".number");
const display = document.querySelector(".display");
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    display.textContent += number.textContent;
  });
});
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equal");

addButton.addEventListener("click", () => {
  display.textContent += "+";
});
subtractButton.addEventListener("click", () => {
  display.textContent += "-";
});
multiplyButton.addEventListener("click", () => {
  display.textContent += "*";
});
divideButton.addEventListener("click", () => {
  display.textContent += "/";
});
clearButton.addEventListener("click", () => {
  display.textContent = "";
});
equalsButton.addEventListener("click", () => {
  
  display.textContent = eval(display.textContent);
});
