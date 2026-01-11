const hamburger = document.getElementById("hamburger");
const navlist = document.querySelector(".navlist");
const navLinks = document.querySelectorAll(".navlist a");

hamburger.addEventListener("click", () => {
    navlist.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navlist.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (
        !navlist.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {
        navlist.classList.remove("active");
    }
});