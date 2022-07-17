const form = document.getElementById("name-input");
const output = document.getElementById("name-output");

form.addEventListener("input", onInputChange);
output.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (form.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
