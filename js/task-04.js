const wrapper = document.querySelector("#counter ");
const btnIncrement = document.querySelector("[data-action='increment']");
const btnDecrement = document.querySelector("[data-action='decrement']");
const spanValue = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
