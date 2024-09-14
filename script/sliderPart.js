const main_img = document.getElementById("main-img");
const prev_img = document.getElementById("prev-img");
const next_img = document.getElementById("next-img")

let arr = [
  `/Skin_store_clone/images/original-Page-116[1]-070206.webp`,
  `/Skin_store_clone/images/original-Page-007-035233.webp`,
];
let currentIndex = 0;
function ubdateImage() {
    main_img.src=arr[currentIndex]
}
prev_img.addEventListener('click',()=>{
    if (currentIndex == 0) {
        currentIndex = arr.length - 1
    } else {
        currentIndex--
    }
    ubdateImage()
})

next_img.addEventListener('click', () => {
    if (currentIndex === arr.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++
    }
    ubdateImage()
})
setInterval(() => {
    if (currentIndex === arr.length-1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    ubdateImage()
}, 2000)

