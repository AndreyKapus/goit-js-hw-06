const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const element = ingredients.map((option) => {
  const listIngredientsRef = document.createElement("li");

  listIngredientsRef.classList.add("item");
  listIngredientsRef.textContent = option;

  const listElementRef = document.querySelector("ul");
  listElementRef.appendChild(listIngredientsRef);
});
