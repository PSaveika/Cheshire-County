//Tabs

const tabButtons = document.getElementsByClassName("tablink");
const tabContent = document.getElementsByClassName("tab-content-wrapper");
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav ul li");

for(var tab of tabContent) {
    tab.style.display = "none";
}

tabButtons[0].classList.add("active-button");
tabContent[0].style.display = "flex";

function changeTab(event, name) {
    for(var tab of tabContent) {
        tab.style.display = "none";
    }
    document.getElementById(name).style.display = "flex";

    for(var button of tabButtons) {
        button.classList.remove("active-button");
    }
    event.currentTarget.classList.add("active-button");
}

//Nav on scroll

window.addEventListener("scroll", function(){
    let current = "";
    for(var section of sections) {
        const sectionTop = section.offsetTop;
        if(window.pageYOffset >= section.offsetTop / 1.1) {
            current = section.getAttribute("id");
        }
    }

    for(var navLink of navLinks) {
        navLink.classList.remove("active");
        if(navLink.getAttribute("list-el-name") === current) {
            navLink.classList.add("active");
        }
    }
    console.log(current)
})