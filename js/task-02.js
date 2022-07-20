const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElementRef = document.querySelector("ul");

const element = ingredients.map((option) => {
  const listIngredientsRef = document.createElement("li");

  listIngredientsRef.classList.add("item");
  listIngredientsRef.textContent = option;
  return listIngredientsRef;
});

listElementRef.append(...element);
