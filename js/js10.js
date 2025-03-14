let currentIndex = 0;
const images = document.querySelectorAll(".slideshow img");

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(showNextImage, 2000);
