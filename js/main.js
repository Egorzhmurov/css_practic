document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.getElementsByClassName("tab_links");
    var tabcontents = document.getElementsByClassName("tab_contents");

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