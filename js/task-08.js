const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    alert("Нужно заполнить все поля!");
    return;
  }
  const dataArray = {
    mail,
    password,
  };
  console.log(dataArray);
}

// ------------- Решение через Form Data ---------------

// const formRef = document.querySelector(".login-form");
// console.log(formRef);

// formRef.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     if (value === "") {
//       alert("Нужно заполнить все поля!");
//     }
//     const dataArray = {
//       name,
//       value,
//     };
//     console.log(dataArray);
//   });
// }
