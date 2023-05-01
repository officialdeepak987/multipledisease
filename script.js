
// const hamburger=document.querySelector(".humburger");
// hamburger.onClick=function(){
//     var menu=document.querySelector(".nav-bar");
//     menu.classList.toggle("active");
// }

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());