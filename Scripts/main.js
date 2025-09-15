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


    const projects = document.querySelectorAll(".project-item");
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalType = document.getElementById("modal-type");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close-btn");

    const projectDetails = [
        {
            title: "P.A.C.T",
            type: "Web Development",
            description: "A platform to assist caregivers with accessibility tools and features."
        },
        {
            title: "Tic Tac Toe",
            type: "Programming",
            description: "A classic tic-tac-toe game implemented in Java with a simple AI."
        },
        {
            title: "Le Patio",
            type: "Programming",
            description: "An interactive virtual visit project developed in JavaScript."
        },
        {
            title: "Irisa Publications",
            type: "Database",
            description: "Visualization of scientific publications using PostgreSQL and Globe.gl."
        },
        {
            title: "Tabas'KHO",
            type: "Web Development",
            description: "A humorous parody website designed with a custom HTML/CSS/JS stack."
        },
        {
            title: "Cap Sur Bréhat",
            type: "TeamBuilding",
            description: "An escape game and treasure hunt on Bréhat island to promote collaboration."
        },
    ];

    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            const data = projectDetails[index];
            modalTitle.textContent = data.title;
            modalType.textContent = data.type;
            modalImage.src = data.image;
            modalDescription.textContent = data.description;
            modal.style.display = "block";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });


});
