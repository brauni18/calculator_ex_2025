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
  
  const expression = display.textContent;
  const parts = expression.split(/([+\-*/])/);

  parts.forEach((part, i) => {

   if(part == "*") {
    const prevNumber = parseFloat(parts[i - 1]);
    const nextNumber = parseFloat(parts[i + 1]);
    const result = prevNumber * nextNumber;
    parts.splice(i - 1, 3, result);
    i -= 2; 
  
   } else if(part == "/") {
     const prevNumber = parseFloat(parts[i - 1]);
     const nextNumber = parseFloat(parts[i + 1]);
      if (nextNumber === 0) {
        display.textContent = "Error";
        return;
      }
      const result = prevNumber / nextNumber;
      parts.splice(i - 1, 3, result);
      i -= 2; 
   }
  });

  parts.forEach((part, i) => {
    if (part == "+") {
      const prevNumber = parseFloat(parts[i - 1]);
      const nextNumber = parseFloat(parts[i + 1]);
      const result = prevNumber + nextNumber;
      parts.splice(i - 1, 3, result);
      i -= 2;
    } else if (part == "-") {
      const prevNumber = parseFloat(parts[i - 1]);
      const nextNumber = parseFloat(parts[i + 1]);
      const result = prevNumber - nextNumber;
      parts.splice(i - 1, 3, result);
      i -= 2;
    }
  });
  display.textContent = parts[0];
});
