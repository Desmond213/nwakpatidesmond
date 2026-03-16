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
        menu.classList.remove("hide"); 
    } else {
        menu.classList.add("hide"); 
    }

}

window.addEventListener("scroll", controlMenu);


menu.classList.add("hide");

// for the typing texts
const phrases = [
  "Nwakpati Desmond",
  "Creative.",
];

const typingElement = document.getElementById("typing");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = '';
let isDeleting = false;
let typingSpeed = 150;

function type() {
    const fullText = phrases[phraseIndex];

    if(!isDeleting) {
        // add letters
        currentPhrase = fullText.slice(0, letterIndex + 1);
        letterIndex++;
    } else {
        // delete letters
        currentPhrase = fullText.slice(0, letterIndex - 1);
        letterIndex--;
    }

    typingElement.textContent = currentPhrase;

    if(!isDeleting && letterIndex === fullText.length){
        isDeleting = true;
        setTimeout(type, 1000); 
        return;
    } 
    else if(isDeleting && letterIndex === 0){
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        setTimeout(type, 500); 
        return;
    }

    setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

type();

// TO CHANGE ACTIVE COLOR

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function(link){

    link.addEventListener("click", function(){

        // remove active from all icons
        menuLinks.forEach(function(item){
            item.classList.remove("active");
        });

        // add active to clicked icon
        this.classList.add("active");

    });

});