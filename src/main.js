import "./scss/main.scss";
const imageGrid = document.querySelector(".image__grid");
const scrollable = document.querySelector(".scrollable");
let images = [];

let currentY = 0;
let currentX = 0;

// Add images
for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.classList.add("image__container");
  let image = document.createElement("img");
  image.src = `./images/${i + 1}.jpeg`;
}
