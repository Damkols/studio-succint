import "./scss/main.scss";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const imageGrid = document.querySelector(".image__grid");
const scrollable = document.querySelector(".scrollable");
let images = [];

let currentY = 0;
let targetY = 0;

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
    div.style.gridColumnStart = 1;
    div.style.gridColumnEnd = 1 + 5;
    textDiv.style.gridColumnStart = 8;
    textDiv.style.gridColumnEnd = 8 + 5;
  } else {
    div.style.gridColumnStart = 8;
    div.style.gridColumnEnd = 8 + 5;
    textDiv.style.gridColumnStart = 1;
    textDiv.style.gridColumnEnd = 1 + 5;
  }
  createPixels(div);
}

function createPixels(image) {
  let { width, height } = image.getBoundingClientRect();
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      let imagePixel = document.createElement("div");
      imagePixel.className = "pixel";
      imagePixel.style.left = x + "px";
      imagePixel.style.top = y + "px";
      image.append(imagePixel);
    }
  }
}

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  direction: "vertical",
  gestureDirection: "vertical",
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing;
