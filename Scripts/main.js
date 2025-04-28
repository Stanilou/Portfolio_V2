document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const links = document.querySelectorAll("header > div > ul > li > a");
    const updateActiveLink = () => {
        let currentSection = null;
        document.querySelectorAll("main > div").forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
                currentSection = section.id;
            }
        });
        links.forEach(link => {
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            links.forEach(link => link.classList.remove("active"));
            event.target.classList.add("active");
        });
    });

    const logo = document.getElementById("easter-egg");
    const sound = document.getElementById("sound");
    function playSound() {
        sound.currentTime = 0;
        sound.play();
    }
    logo.addEventListener('click', playSound);
});
