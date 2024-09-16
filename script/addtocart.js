document.addEventListener("DOMContentLoaded", function () {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length > 0) {
    displayCart(cart);
  } else {
    const cartSection = document.getElementById("product-section");
    cartSection.innerHTML = "<p>Your cart is empty!</p>";
  }
});

function displayCart(cart) {
  const cartSection = document.getElementById("product-section");
  cartSection.innerHTML = "";

  cart.forEach(function (product, index) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "cart-card";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    cardDiv.appendChild(img);

    const name = document.createElement("p");
    name.textContent = product.name;
    cardDiv.appendChild(name);

    const discount = document.createElement("p");
    discount.innerHTML = `${product.discount} <span>SKINM10</span>`;
    cardDiv.appendChild(discount);

    const price = document.createElement("p");
    price.textContent = `$ ${product.price}`;
    cardDiv.appendChild(price);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE";
    removeBtn.addEventListener("click", function () {
      removeProductFromCart(index);
    });
    cardDiv.appendChild(removeBtn);

    cartSection.append(cardDiv);
  });
}

function removeProductFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart(cart);
}
