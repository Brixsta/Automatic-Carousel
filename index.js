const carouselContents = document.querySelector(".carousel-contents");
const carouselContainer = document.querySelector(".carousel-container");
let startingX = -200;
let xSpeed = 1.5;
let cardExpanded = false;

carouselContents.addEventListener("mouseover", () => {
  xSpeed = 0;
});

carouselContents.addEventListener("mouseout", () => {
  xSpeed = 1.5;
});

const createCarouselImages = (num) => {
  for (let i = 0; i < num; i++) {
    const carouselImage = document.createElement("div");
    carouselImage.classList.add("carousel-image");
    carouselImage.style.backgroundImage = `url(images/logo-${i}.png)`;
    carouselImage.id = i;
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

const expandCard = (item) => {
  item.addEventListener("click", () => {
    const carouselImages = document.querySelectorAll(".carousel-image");
    carouselImages.forEach((item) => {
      item.classList.add("hidden");
    });
    if (!cardExpanded) {
      cardExpanded = true;
      carouselContainer.style.height = "60%";
      carouselContents.style.height = "85%";
      const cardPhotoContainer = document.createElement("div");
      cardPhotoContainer.classList.add("card-photo-container");
      carouselContents.append(cardPhotoContainer);
      const cardPhoto = document.createElement("div");
      cardPhoto.classList.add("card-photo");
      cardPhotoContainer.append(cardPhoto);
      cardPhoto.style.backgroundImage = `url('images/logo-${item.id}.png')`;
      const cardTextContainer = document.createElement("div");
      cardTextContainer.classList.add("card-text-container");
      carouselContents.append(cardTextContainer);
      const cardTextTitle = document.createElement("h1");
      cardTextTitle.classList.add("card-text-title");
      cardTextTitle.innerHTML = "lorem Ipsum";
      cardTextContainer.append(cardTextTitle);
      const cardTextDivider = document.createElement("div");
      cardTextDivider.classList.add("card-text-divider");
      cardTextContainer.append(cardTextDivider);
      createTextDividerCircles(7);
      const cardTextContent = document.createElement("p");
      cardTextContent.classList.add("card-text-content");
      cardTextContent.innerHTML =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid repellendus earum vero inventore architecto, libero praesentium dignissimos impedit. Quod impedit reprehenderit blanditiis iste harum sunt mollitia. Natus, atque deserunt?";
      cardTextContainer.append(cardTextContent);
      const goBackButton = document.createElement("button");
      goBackButton.classList.add("go-back-button");
      cardTextContainer.append(goBackButton);
      goBackButton.innerHTML = "BACK";
      goBackButton.addEventListener("click", restoreCarousel);
    }
  });
};

const createTextDividerCircles = (num) => {
  for (let i = 0; i < num; i++) {
    const cardTextDivider = document.querySelector(".card-text-divider");
    const circle = document.createElement("div");

    if (i % 2 === 1) {
      circle.style.height = "10px";
      circle.style.width = "10px";
    } else {
      circle.style.backgroundColor = "#7f2ccb";
    }
    circle.classList.add("text-divider-circle");
    cardTextDivider.append(circle);
  }
};

restoreCarousel = () => {
  cardExpanded = false;
  carouselContainer.style.height = "300px";
  carouselContents.style.height = "75%";
  const cardPhotoContainer = document.querySelector(".card-photo-container");
  cardPhotoContainer.remove();
  const cardTextContainer = document.querySelector(".card-text-container");
  cardTextContainer.remove();
  const carouselImages = document.querySelectorAll(".carousel-image");
  carouselImages.forEach((item) => {
    item.classList.remove("hidden");
  });
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

    expandCard(item);
  });
  window.requestAnimationFrame(updateAll);
};

window.onload = () => {
  window.requestAnimationFrame(updateAll);
};
