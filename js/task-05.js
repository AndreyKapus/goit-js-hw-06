const form = document.getElementById("name-input");
const output = document.getElementById("name-output");
const defaultValue = document.getElementById("name-output").textContent;

form.addEventListener("input", onInputChange);
output.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (form.value === "") {
    output.textContent = defaultValue;
  } else {
    output.textContent = event.currentTarget.value;
  }
}
