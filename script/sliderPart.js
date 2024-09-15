const main_img = document.getElementById("main-img");
const prev_img = document.getElementById("prev-img");
const next_img = document.getElementById("next-img");



let arr = [
    // "../images/original-Page-116[1]-070206.webp",
    "../images/original-Page-007-035233.webp",
    "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63RDANWrto9CpgepRgTTK6cTzhuuLr8S_1i11YAkiCyMk_MiUmTros2ziRE5DxOHOSPE&usqp=CAU",
 
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
