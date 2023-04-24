
//buttons
const btn_next = document.querySelector(".next");
const btn_prev = document.querySelector(".prev");
//container with all the images
const images = [...document.querySelectorAll(".image")];
const container_images = document.querySelector(".container_images");

let list_images = [];
let image_today = 0;
const total_size_images = images.length;

//functions 
function reset_list_images() {
  //reset elements list images
  list_images.map(image => {
    container_images.appendChild(image);
  });
  //clear list images
  list_images = [];
}

btn_next.addEventListener("click", (e) => {

  list_images.push(images[0]);
  images[image_today].remove();

  image_today++;

  if (image_today >= total_size_images) {
    image_today = 0;
    reset_list_images();
  }

})