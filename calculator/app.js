const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      expression = "";
      display.value = "";
    } 
    else if (value === "DEL") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } 
    else if (value === "=") {
      try {
        expression = eval(expression.replace("%", "/100"));
        display.value = expression;
      } catch {
        display.value = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      display.value = expression;
    }
  });
});
