const btn = document.querySelector(".btn")

const moon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`

const sun = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`;
btn.addEventListener("click", ()=>{
    document.documentElement.classList.toggle("dark")
    if (isDarkExist()) {
        btn.innerHTML = sun;
    } else {
        btn.innerHTML = moon;
    }

});

function isDarkExist (){
   return document.documentElement.classList.contains("dark")
}

const taggleBtn = document.querySelector('.taggleBtn')
const slidebar = document.querySelector('.slidebar')

taggleBtn.addEventListener('click', () => {
    slidebar.classList.toggle('translate-x-full');
});


const nav = document.querySelector(".name");

window.onmousemove = (e) => {
    const percent = e.clientX / window.innerWidth;
 nav.animate({
    transform: `translateX(${-percent * nav.offsetWidth}px)` 
}, {
fill: "forwards",
duration: 4000,
});
}



/* =========================================
   PROJECT DATA
========================================= */

const projectsData = {
    foodieHub: {
        title: "E-Government CTI Project",
        category: "Backend Web Devlopment",
        year: "2026",
        image: "assets/images/sign up page.png",
        imageAlt: "Foodie Hub project screenshot",

        overview:
            "Write a short introduction explaining what Foodie Hub is and what problem it addresses.",

        description:
            "Describe the purpose of the project, who it is for, how it works, and why you decided to build it.",

        technologies: [
            "Node.js",
            "Express",
            "PostgreSQL"
        ],

        role:
            "Describe your role in the project and the parts you personally developed.",

        features: [
            "Add your first key feature here.",
            "Add your second key feature here.",
            "Add your third key feature here."
        ],

        challenges:
            "Describe a technical challenge you encountered and how you approached solving it.",

        learning:
            "Explain what you learned while building this project.",

        live: "",
        github: ""
    },

    openLearning: {
        title: "Thumbnail Gallery",
        category: "Javascript Project",
        year: "2025",
        image: "images/open-learning.png",
        imageAlt: "Open Learning project screenshot",

        overview:
            "Introduce your project and explain its educational or social purpose.",

        description:
            "Describe the idea behind Open Learning, its intended audience, and the experience you want to create.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Tailwind CSS"
        ],

        role:
            "Describe your personal contributions to the project.",

        features: [
            "Add your first key feature here.",
            "Add your second key feature here.",
            "Add your third key feature here."
        ],

        challenges:
            "Describe a challenge you faced and how you addressed it.",

        learning:
            "Describe the skills and insights you gained.",

        live: "",
        github: ""
    },

    voices: {
        title: "Voices",
        category: "Digital storytelling",
        year: "2026",
        image: "images/voices.png",
        imageAlt: "Voices project screenshot",

        overview:
            "Introduce Voices and explain the story or idea behind the project.",

        description:
            "Describe the project's purpose, the people it aims to reach, and how the digital experience works.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "GSAP"
        ],

        role:
            "Describe the parts of the project you designed and developed.",

        features: [
            "Add your first key feature here.",
            "Add your second key feature here.",
            "Add your third key feature here."
        ],

        challenges:
            "Describe a challenge you faced during development and how you approached it.",

        learning:
            "Explain what you learned about development, design, or storytelling.",

        live: "",
        github: ""
    },

    portfolio: {
        title: "Personal Portfolio",
        category: "Front-end development",
        year: "2026",
        image: "images/portfolio.png",
        imageAlt: "Personal portfolio project screenshot",

        overview:
            "Introduce your portfolio and explain what you wanted it to communicate about you.",

        description:
            "Describe the design concept, the structure of the website, and how you approached building it.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        role:
            "Describe your work on the design, development, and interactions.",

        features: [
            "Add your first key feature here.",
            "Add your second key feature here.",
            "Add your third key feature here."
        ],

        challenges:
            "Describe a technical or design challenge and how you addressed it.",

        learning:
            "Explain what you learned while building and refining your portfolio.",

        live: "",
        github: ""
    }
};


/* =========================================
   PROJECT MODAL FUNCTIONALITY
========================================= */

const projectModal = document.getElementById("project-modal");
const closeModalBtn = document.getElementById("modal-close");

const projectRows = document.querySelectorAll(
    ".project-row[data-project]"
);

let lastFocusedElement = null;


/* -----------------------------------------
   OPEN MODAL
----------------------------------------- */

function openProjectModal(projectKey, trigger) {
    const project = projectsData[projectKey];

    if (!project) return;

    lastFocusedElement = trigger;

    // Fill in project information

    document.getElementById("modal-title").textContent =
        project.title;

    document.getElementById("modal-category").textContent =
        project.category;

    document.getElementById("modal-year").textContent =
        project.year;

    document.getElementById("modal-overview").textContent =
        project.overview;

    document.getElementById("modal-description").textContent =
        project.description;

    document.getElementById("modal-role").textContent =
        project.role;

    document.getElementById("modal-challenges").textContent =
        project.challenges;

    document.getElementById("modal-learning").textContent =
        project.learning;


    // Project image

    const modalImage = document.getElementById("modal-image");

    modalImage.src = project.image;
    modalImage.alt = project.imageAlt;


    // Technologies

    const techContainer = document.getElementById("modal-tech");

    techContainer.replaceChildren();

    project.technologies.forEach((technology) => {
        const tag = document.createElement("span");

        tag.textContent = technology;
        techContainer.appendChild(tag);
    });


    // Features

    const featuresContainer =
        document.getElementById("modal-features");

    featuresContainer.replaceChildren();

    project.features.forEach((feature) => {
        const item = document.createElement("li");

        item.textContent = feature;
        featuresContainer.appendChild(item);
    });


    // Project links

    setProjectLink("modal-live", project.live);
    setProjectLink("modal-github", project.github);


    // Show modal

    projectModal.showModal();

    document.body.classList.add("modal-open");

    closeModalBtn.focus();
}


/* -----------------------------------------
   PROJECT LINKS
----------------------------------------- */

function setProjectLink(id, url) {
    const link = document.getElementById(id);

    if (url) {
        link.href = url;
        link.hidden = false;
    } else {
        link.removeAttribute("href");
        link.hidden = true;
    }
}


/* -----------------------------------------
   CLICK PROJECT ROW
----------------------------------------- */

projectRows.forEach((row) => {
    row.addEventListener("click", (event) => {
        event.preventDefault();

        const projectKey = row.dataset.project;

        openProjectModal(projectKey, row);
    });
});


/* -----------------------------------------
   CLOSE MODAL
----------------------------------------- */

function closeProjectModal() {
    if (projectModal.open) {
        projectModal.close();
    }
}


// Close button

closeModalBtn.addEventListener("click", closeProjectModal);


// Click outside the modal

projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
        closeProjectModal();
    }
});


// Escape key is handled natively by <dialog>.
// Restore scrolling and keyboard focus when closed.

projectModal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");

    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
});