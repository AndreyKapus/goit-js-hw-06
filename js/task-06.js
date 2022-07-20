const inputRef = document.querySelector("input");
const inputDataLength = inputRef.getAttribute("data-length");
const inputValid = document.getElementById("validation-input").onblur;
console.log(inputDataLength);
console.log(inputValid);

document.getElementById("validation-input").onblur = function () {
  console.log(this.value.length);
  const dataLength = this.getAttribute("data-length");
  if (dataLength > this.value.length || dataLength < this.value.length) {
    this.classList.remove("valid");
    this.classList.add("invalid");
  } else {
    this.classList.remove("invalid");
    this.classList.add("valid");
  }
};
