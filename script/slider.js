const main_img = document.getElementById("main-img");
const prev_img = document.getElementById("prev-img");
const next_img = document.getElementById("next-img");

let arr = [
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-Agelessness1-HP-Hero-Desktop_1180x450-ss-144332.jpg",
  "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/47/original-SkinC-HAIHP-Hero-Desktop-1180x450-SkinStore-211147.jpg",
    "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/30/original-New_Page%5B1%5D-133530.png",

];
let currentIndex = 0;
function updateImage() {
  main_img.src = arr[currentIndex];
}
prev_img.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = arr.length - 1;
  } else {
    currentIndex--;
  }
  updateImage();
});

next_img.addEventListener("click", () => {
  if (currentIndex === arr.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImage();
});

setInterval(() => {
  if (currentIndex == arr.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  console.log("current in dex-", currentIndex);

  updateImage();
}, 2000);
