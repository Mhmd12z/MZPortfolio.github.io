let menuBtn = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav .links");
let navSearch = document.querySelector(".nav .search");
menuBtn.onclick = function () {
  navLinks.classList.toggle("active");
  navSearch.classList.toggle("active");
};
// let links=document.querySelectorAll(".nav .links a");
// let home=document.querySelector(".main");
// let aboutSec=document.querySelector(".about");
// let portfolioSec=document.querySelector(".projects");
// let contactSec=document.querySelector(".contact");
// window.onscroll=function(){
//     if(scrollY<document.documentElement.clientHeight){
//         links[0].className="";
//         links[1].className="";
//     }
//     if(scrollY>aboutSec.offsetTop - 100 && scrollY<portfolioSec.offsetTop){
//         links[0].classList.add("active-link");
//     }
//     else if(scrollY>portfolioSec.offsetTop){
//         links[0].classList.remove("active-link");
//         links[1].classList.add("active-link");
//     }
// }
