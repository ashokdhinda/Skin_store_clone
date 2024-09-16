let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let useDetails = {
    email: email.value,
    password: password.value,
  };
  let saveItem = JSON.parse(localStorage.getItem("userDetails")) || {};
  if (
    saveItem.email == useDetails.email &&
    saveItem.password == useDetails.password
  ) {
    alert("Login Success");
    window.location.href = "../html/account.html";
  } else {
    alert("worng crendetial");
  }
});
