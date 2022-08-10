// Tabs variables
const tabButtons = document.getElementsByClassName("tablink");
const tabContent = document.getElementsByClassName("tab-content-wrapper");
// Navigation variables
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll("nav ul li");

// Tabs
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
    let current = ""
   for(var section of sections){
      const sectionTop = section.offsetTop
      if(window.pageYOffset >= sectionTop / 1.2) {
         current = section.getAttribute("id")
      }
   }

    for(var navLink of navLinks) {
        navLink.classList.remove("active");
        navLink.classList.remove("lii");
        if(navLink.getAttribute("list-el-name") === current) {
            navLink.classList.add("active");
        }
    }
    
    
})

const burger = document.querySelector(".burger")
const burgerList = document.getElementById("list")

burger.addEventListener("click", function(){
    // this.classList.toggle("rotate")
    burgerList.classList.toggle("open")
 })

window.addEventListener("resize", function(){
    if(window.innerWidth > 768){
       burger.classList.remove("rotate")
       burgerList.classList.remove("open")
    }
 })

 console.log(burgerList)

// Nav burger 

// function myFunction() {
//     var x = document.getElementById("list");
//     console.log(x)
//     if (x.style.display === "flex") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "flex";
//     }
//   } 


// function getBurgerValue(burgerListElement, displayValue) {
//     let burgerListStyle = window.getComputedStyle(burgerListElement);
//     return burgerListStyle.getPropertyValue(displayValue)
// }

//dadaryt, kad ant click pasleptu
// const burgerList = document.getElementById("list")
//     let value = getBurgerValue(burgerList, "display");
//     console.log(value);

//     burgerList.style.setProperty("display" , "none")