
document.addEventListener("DOMContentLoaded", async function () {
  let products;
  try {
    let res = await fetch("product_one.json");
    let data = await res.json();
    products = data;
    console.log(products);
    displayData(products); 
  } catch (error) {
    console.log(error);
  }

  let lowToHighBtn = document.getElementById("lowToHigh");
  let highToLowBtn = document.getElementById("highToLow"); 

  lowToHighBtn.addEventListener("click", () => {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log(products);
    displayData(products);
  });

  
  highToLowBtn.addEventListener("click", () => {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log(products);
    displayData(products);
  });
});

function displayData(products) {
  const productionSection = document.getElementById("product-section");
    productionSection.innerHTML = "";

  products.forEach(function (ele) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "product-card";

    const img = document.createElement("img");
    img.src = ele.image;
    img.alt = ele.name;
    cardDiv.appendChild(img);

    const name = document.createElement("p");
    name.textContent = ele.name;
    cardDiv.appendChild(name);

    const discount = document.createElement("p");
    discount.innerHTML = `${ele.discount} <span>SKINM10</span>`;
    cardDiv.appendChild(discount);

    const price = document.createElement("p");
    price.textContent = `$ ${ele.price}`;
    cardDiv.appendChild(price);

    const quickBuyBtn = document.createElement("button");
    quickBuyBtn.textContent = "QUICK BUY";
    quickBuyBtn.addEventListener("click", function () {
      alert("Product added to cart");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(ele);
      localStorage.setItem("cart", JSON.stringify(cart));

      window.location.href = `../html/addTocart.html`;
    });
    cardDiv.appendChild(quickBuyBtn);

    productionSection.appendChild(cardDiv);
  });
}
