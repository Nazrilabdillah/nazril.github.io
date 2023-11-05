const navbarMenu = document.querySelector(".menu")
const navbarClose = document.querySelector(".closeMenu")
const nav = document.querySelector(".nav-com")

function toggleMenu(value){
  value == "open"? openNavbarMenu():closeNavbarMenu()
}
function openNavbarMenu(){
  navbarMenu.classList.add("remove")
  navbarClose.classList.add("add")
  nav.classList.add("active")
}
function closeNavbarMenu(){
  nav.classList.remove("active")
  navbarMenu.classList.remove("remove")
  navbarClose.classList.remove("add")
}
