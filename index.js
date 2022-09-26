const carouselContents = document.querySelector(".carousel-contents");
let startingX = -200;
let xSpeed = 1;

carouselContents.addEventListener("mouseover", () => {
  xSpeed = 0;
});

carouselContents.addEventListener("mouseout", () => {
  xSpeed = 1;
});

const createCarouselImages = (num) => {
  for (let i = 0; i < num; i++) {
    const carouselImage = document.createElement("div");
    carouselImage.classList.add("carousel-image");
    carouselImage.style.backgroundImage = `url(images/logo-${i}.png)`;
    if (i === 0) {
      carouselImage.x = startingX;
    } else {
      startingX += 200;
      carouselImage.x = startingX;
    }

    carouselImage.style.left = carouselImage.x + "px";

    carouselContents.append(carouselImage);
  }
};

createCarouselImages(6);
const carouselImages = document.querySelectorAll(".carousel-image");

const updateAll = () => {
  carouselImages.forEach((item) => {
    item.x += xSpeed;
    item.style.left = item.x + "px";

    if (item.x > 1000) {
      item.x = -200;
    }
  });
  window.requestAnimationFrame(updateAll);
};

window.onload = () => {
  window.requestAnimationFrame(updateAll);
};
