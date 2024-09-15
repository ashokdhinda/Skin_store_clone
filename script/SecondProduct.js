document.addEventListener("DOMContentLoaded", async function () {
  let products;
  try {
    let res = await fetch("/Skin_store_clone/json/product_one.json");
    let data = await res.json();
    products = data;
    console.log(products);
    diaplayData(products);
  } catch (error) {
    console.log(error);
  }

  let lowToHighBtn = document.getElementById("lowToHigh");
  let highToLow = document.getElementById("highToLow");

  lowToHighBtn.addEventListener("click", () => {
    products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    console.log(products);
    diaplayData(products);
  });

  highToLow.addEventListener("click", () => {
    products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    console.log(products);
    diaplayData(products);
  });
});

function diaplayData(products) {
  products.forEach(function (ele) {
    const production_seaction = document.getElementById("product-section");
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
    quickBuyBtn.addEventListener(`click`, function () {
      window.location.href = `/Skin_store_clone/script/itemProduct.js`;
    });
    cardDiv.appendChild(quickBuyBtn);

    production_seaction.append(cardDiv);
  });
}
