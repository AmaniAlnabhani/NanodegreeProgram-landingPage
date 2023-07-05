
const toggleButton=document.getElementById("toggle-button");
const navList=document.getElementById("nav-list");
toggleButton.addEventListener('click',()=>{
   navList.classList.toggle('active');
})



//select all section
const sections = document.querySelectorAll("section");
//select all li in the nav bar
const navLi = document.querySelectorAll(".navbar .nav-list .list-item");
//fuction do do scrolling
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
   
    if (section.getBoundingClientRect().top < window.innerHeight /2) {
      current = section.getAttribute("id");
    }
  });
   //make Helight in nav bar base on which section/div current display 
  navLi.forEach((li) => {
    li.classList.remove("activebg");
    if (li.classList.contains(current)) {
      li.classList.add("activebg");
    }
  });
});


