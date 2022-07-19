const inputRef = document.getElementById("font-size-control");
const outputRef = document.getElementById("text");

inputRef.addEventListener("input", inputRange);
function inputRange(event) {
  outputRef.style.fontSize = event.currentTarget.value + "px";
}
