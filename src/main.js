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
  images.push(image);
  div.style.gridRowStart = i + 1;

  //add Overlay
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

  let textDiv = document.createElement("div");
  textDiv.innerHTML = "<h3>Lorem ipsum</h3>";
  textDiv.style.gridRowStart = i + 1;

  div.append(image, overlay);
  imageGrid.append(div, textDiv);

  if (i % 2 == 1) {
    div.style.gridColumnStart = 2;
    div.style.gridColumnEnd = 2 + 5;
    textDiv.style.gridColumnStart = 8;
    textDiv.style.gridColumnEnd = 8 + 5;
  } else {
    div.style.gridColumnStart = 8;
    div.style.gridColumnEnd = 8 + 5;
    textDiv.style.gridColumnStart = 2;
    textDiv.style.gridColumnEnd = 2 + 5;
  }
}
