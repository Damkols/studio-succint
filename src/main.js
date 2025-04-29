import "./scss/main.scss";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const imageGrid = document.querySelector(".image__grid");
let images = [];

for (let i = 0; i < 14; i++) {
  let div = document.createElement("div");
  div.classList.add("image__container");
  let image = document.createElement("img");
  image.src = `/images/${i + 1}.jpeg`;
  images.push(image);
  div.style.gridRowStart = i + 1;

  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

  let textDiv = document.createElement("div");
  textDiv.innerHTML = "<h3>Art</h3> <h3> on</h3> <h3> X</h3>";
  textDiv.style.gridRowStart = i + 1;

  div.append(image, overlay);
  imageGrid.append(div, textDiv);

  if (i % 2 == 1) {
    div.style.gridColumnStart = 1;
    div.style.gridColumnEnd = 1 + 7;
    textDiv.style.gridColumnStart = 12;
    textDiv.style.gridColumnEnd = 12 + 1;
  } else {
    div.style.gridColumnStart = 6;
    div.style.gridColumnEnd = 6 + 7;
    textDiv.style.gridColumnStart = 1;
    textDiv.style.gridColumnEnd = 1 + 2;
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
  smoothTouch: true,
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing;

ScrollTrigger.refresh();
