// function to handle tab switching About Me section
document.addEventListener("DOMContentLoaded", function() {
    const tablinks = document.getElementsByClassName("tab_links");
    const tabcontents = document.getElementsByClassName("tab_contents");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function() {
            for (let link of tablinks) {
                link.classList.remove("active_link");
            }
            for (let content of tabcontents) {
                content.classList.remove("active_tab");
            }
            this.classList.add("active_link");
            tabcontents[i].classList.add("active_tab");
        });
    }
});

// Toggle the service block hover state
document.addEventListener('DOMContentLoaded', () => {
    const designBlocks = document.querySelectorAll('.design_block');

    designBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.classList.add('is-hovered');
        });

        block.addEventListener('mouseleave', () => {
            block.classList.remove('is-hovered');
        });
    });
});

const sidemenu = document.getElementById("sidemenu");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", () => {
    sidemenu.classList.add("open");
});

menuClose.addEventListener("click", () => {
    sidemenu.classList.remove("open");
});

menuOpen.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menuOpen.click();
    }
});

menuClose.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menuClose.click();
    }
});