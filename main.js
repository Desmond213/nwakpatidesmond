const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("active");
});