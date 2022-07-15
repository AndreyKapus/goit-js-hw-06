const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imageRef = document.querySelector("ul");
const imageEl = images.map((image) => {
  imageRef.insertAdjacentHTML(
    "afterbegin",
    `<li class = list><img src=${image.url} ${image.alt} class = listItemEl></li>`
  );
  const listEl = document.querySelector(".gallery");
  listEl.style.display = "flex";
  listEl.style.listStyle = "none";

  const listItemEl = document.querySelector(".listItemEl");

  listItemEl.style.width = "440px";
});

// const imageListRef = document.querySelector("li");
// const imageStyles = imageListRef.map((element) => {
//   element.classList.add("imageClass");
//   imageClass.style.width = "240px";
//   imageListRef.append(imageStyles);
//   return;
//   console.log(imageListRef);
// });
