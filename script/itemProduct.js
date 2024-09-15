const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const count = document.getElementById("num-de-in");
const addButton = document.getElementById("button-part");

increase.addEventListener("click", () => {
    let num = Number(count.textContent)
    num+=1
    count.textContent = num
    
    
})
decrease.addEventListener("click", ()=>{
    let num = Number(count.textContent)
    num -= 1
    if (num >= 0) {
        count.textContent = num;
    }
    
})
addButton.addEventListener("click", () => {
    alert("item is add successfully");
    window.location.href = '/Skin_store_clone/html/addTocart.html'
})