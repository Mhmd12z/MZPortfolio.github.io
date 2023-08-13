let menuBtn = document.querySelector(".menu-icon");
let navLinks = document.querySelector(".nav .links");
let navSearch = document.querySelector(".nav .search");
menuBtn.onclick = function () {
  navLinks.classList.toggle("active");
  navSearch.classList.toggle("active");
};
let logo=document.querySelector(".logo");
logo.addEventListener("click",function(){
  scrollTo(0,0);
})
// let links=document.querySelectorAll(".nav .links a");

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
let iconReturn=document.createElement("i");
iconReturn.classList.add("fa-solid");
iconReturn.classList.add("fa-arrow-up");
iconReturn.classList.add("fa-bounce");
let returnBtn=document.createElement("button");
returnBtn.append(iconReturn);

returnBtn.style.cssText=`
position: fixed;
bottom: 20px;
right: 20px;
font-size: 40px;
background-color: #2e3135;
border: none;
color: var(--main-color);
padding: 20px 10px;
border-radius: 5px;
cursor: pointer;
z-index: -1;
opacity: 0;
transition: var(--transition);
`;
returnBtn.addEventListener("click",function(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
})
document.body.appendChild(returnBtn);
let home=document.querySelector(".main");
window.onscroll=function(){
  if(scrollY>home.offsetTop + 600){
    returnBtn.style.zIndex=100;
    returnBtn.style.opacity=1;
  }
  else{
    returnBtn.style.zIndex=-1;
    returnBtn.style.opacity=0;
  }
}
let twitter=document.querySelectorAll(".x-twitter");
for(let i=0;i<twitter.length;i++){
  twitter[i].addEventListener("click",function(){
    window.location.href='https://www.instagram.com/m7md_zeidan/';
  });
}
