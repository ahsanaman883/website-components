const searchbtn = document.querySelector( ".search-btn");
const overlay = document.querySelector( ".overlay");
const crossbtn = document.querySelector( ".cross-btn");

searchbtn.addEventListener("click", function () {
    overlay.classList.toggle("searchActive");
});
crossbtn.addEventListener("click", function () {
    overlay.classList.remove("searchActive");
});