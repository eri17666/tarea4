import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const multButton = document.querySelector("#multiplicar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

if (multButton) {
  multButton.addEventListener("click", () => {
    const firstNumber = Number.parseInt(first.value);
    const secondNumber = Number.parseInt(second.value);
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
  });
}