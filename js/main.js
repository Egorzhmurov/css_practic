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

// Change text style and readability when hovering over service blocks
document.addEventListener('DOMContentLoaded', () => {
    const designBlocks = document.querySelectorAll('.design_block');

    designBlocks.forEach(block => {
        const paragraph = block.querySelector('p');

        block.addEventListener('mouseenter', () => {
            paragraph.style.color = '#ffffff';
            paragraph.style.fontWeight = 'bold';
        });

        block.addEventListener('mouseleave', () => {
            paragraph.style.color = '';
            paragraph.style.fontWeight = '';
        });
    });
});