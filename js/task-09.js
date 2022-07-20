function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  const bodyColorValue = document.body.style.backgroundColor;
  spanColor.textContent = bodyColorValue;
  console.log(bodyColorValue);
});
