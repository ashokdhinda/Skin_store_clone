let form = document.getElementById("form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userDetails = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
  console.log(userDetails);
  window.location.href = "../html/login.html";
});
