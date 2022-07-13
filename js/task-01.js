const listRef = document.getElementById("categories");
const listLengthRef = listRef.children.length;

console.log("Number of categories:", listLengthRef);

const listTittleRef = document.getElementsByTagName("h2");
for (const item of listTittleRef) {
  const titleTextRef = item.textContent;
  const categoriesRef = item.nextElementSibling;
  const listLength = categoriesRef.children.length;
  console.log("Category:", titleTextRef);
  console.log("elements:", listLength);
}
