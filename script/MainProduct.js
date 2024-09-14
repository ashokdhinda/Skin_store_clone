document.addEventListener("DOMContentLoaded", async function () {
    let products;
    try {
        let res = await fetch ("/Skin_store_clone/json/product.json")
        let data = await res.json()
        products = data
        // console.log(products, "eefc");
        disPlayData(products)
    } catch (error) {
        console.log(error); 
    }
        let lowToHighBtn = document.getElementById("lowToHigh");    
        let highTolowBTn = document.getElementById("highToLow")

    lowToHighBtn.addEventListener('click', () => {
        products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
        // console.log(products);
        disPlayData(products)
    })
           
           
    highTolowBTn.addEventListener("click", () => {
        products.sort((a,b)=> parseFloat(b.price) - parseFloat(a.price))
        // console.log(products);
        disPlayData(products)
        
    })
})

function disPlayData(products) {
    const productionSection = document.getElementById("product-section");
    productionSection.innerHTML = ""

    products.forEach(product => {
        const productCard = createProductCard(product)
        productionSection.appendChild(productCard)
    })
}

function createProductCard(product) {
    const productDiv = document.createElement("div")
    productDiv.className = "product-div"

    const img = document.createElement("img")
    img.src = product.image;
    img.alt = product.name;
    productDiv.appendChild(img)

    const name = document.createElement("p")
    name.textContent = product.name;
    productDiv.appendChild(name)

    const discount = document.createElement("p")
    discount.innerHTML = `${product.discount} <span>SKINM!)</span>`
    productDiv.appendChild(discount)

    const price = document.createElement("p")
    price.textContent = `${product.price}`
    productDiv.appendChild(price)

    const quickBuy = document.createElement("button")
    quickBuy.textContent = "BUY NOW"
    quickBuy.addEventListener('click', function () {
        window.location.href = "/Skin_store_clone/html/itemProduct.html"
    })
    productDiv.appendChild(quickBuy)
    return productDiv

}