// Mobile Menu

const menuBtn=document.getElementById("menu-btn");
const mobileMenu=document.getElementById("mobile-Menu");

menuBtn.addEventListener("click",function(){
  mobileMenu.classList.toggle("hidden");
});
const mobileLinks = document.querySelectorAll("#mobile-Menu a");

mobileLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    mobileMenu.classList.add("hidden");
  });
});
// Sticky Navbar

const header=document.querySelector("header");

window.addEventListener("scroll",function(){
  if(window.scrollY>50){
    header.classList.add("bg-white","shadow-md");
  }else{
    header.classList.remove("bg-white","shadow-md");
  }
});

// FAQ

const faqBtns=document.querySelectorAll(".faq-btn");

faqBtns.forEach(function(btn){
  btn.addEventListener("click",function(){
    const content=this.nextElementSibling;
    const icon=this.querySelector(".faq-icon");

    if(content.classList.contains("hidden")){
      content.classList.remove("hidden");
      icon.textContent="-";
    }else{
      content.classList.add("hidden");
      icon.textContent="+";
    }
  });
});

// Close Mobile Menu

const navLinks=document.querySelectorAll("#mobile-menu a");

navLinks.forEach(function(link){
  link.addEventListener("click",function(){
    mobileMenu.classList.add("hidden");
  });
});