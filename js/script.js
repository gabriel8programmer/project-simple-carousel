
//buttons
const btn_next = document.querySelector(".next");
const btn_prev = document.querySelector(".prev");
//container with all the images
const images = [...document.querySelectorAll(".image")];
const container_images = document.querySelector(".container_images");

const total_size_images = images.length;
const width_image = images[0].offsetWidth;
let image_today = 0;

//functions
function start() {
  image_today = 0;
  //calling function update_buttons_carousel
  update_buttons_carousel();
}

function update_carousel(index) {
  container_images.scrollLeft = index * width_image;
}

function hide_prev() {
  if (image_today <= 0) {
    btn_prev.style.display = "none";
  } else {
    btn_prev.style.display = "block";
  }
}

function hide_next() {
  if (image_today >= total_size_images - 1) {
    btn_next.style.display = "none";
  } else {
    btn_next.style.display = "block";
  }
}

function update_buttons_carousel() {
  hide_prev();
  hide_next();
}

//events

//logic for btn prev
btn_prev.addEventListener("click", (e) => {
  image_today--;
  if (image_today <= 0) {
    image_today = 0;
  }
  update_carousel(image_today);
  update_buttons_carousel();
});

//logic for btn next
btn_next.addEventListener("click", (e) => {
  image_today++;
  if (image_today >= total_size_images - 1) {
    image_today = total_size_images - 1;
  }
  update_carousel(image_today);
  update_buttons_carousel();
});

start();
