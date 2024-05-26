const loginbtn = document.querySelector(".loginbtn");
const crossbtn = document.querySelector(".cross-btn");
const cancelbtn = document.querySelector(".cancel-btn");
const loginoverlay = document.querySelector(".login-overlay");

loginbtn.addEventListener("click", function () {
    loginoverlay.classList.toggle("active");
});
crossbtn.addEventListener("click", function () {
    loginoverlay.classList.toggle("active");
});
cancelbtn.addEventListener("click", function () {
    loginoverlay.classList.toggle("active");
});