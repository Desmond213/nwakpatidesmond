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

// for the menu
const menu = document.getElementById("floatingMenu");
const aboutSection = document.querySelector("#aboutme");
const footer = document.querySelector(".footer");

function controlMenu() {

    const aboutTop = aboutSection.getBoundingClientRect().top;
    const footerTop = footer.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (aboutTop <= screenHeight * 0.6 && footerTop > screenHeight * 0.8) {
        menu.classList.remove("hide"); // show menu
    } else {
        menu.classList.add("hide"); // hide menu
    }

}

window.addEventListener("scroll", controlMenu);

/* hide menu when page loads */
menu.classList.add("hide");