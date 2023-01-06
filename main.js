const logo = document.getElementById('navbar_logo');
const button = document.getElementById('btn');
const menuShow = document.getElementById('menu-show');
const home = document.getElementById('paragraph1');
const closeMenus = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');
const mainBody = document.getElementById('main_section');

const openMenu = () => {
  menuShow.classList.add('show-menu');
  logo.classList.add('blur-filter');
  home.classList.add('blur-filter');
  button.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  logo.classList.remove('blur-filter');
  home.classList.remove('blur-filter');
  button.classList.remove('blur-filter');
  mainBody.classList.remove('blur-filter');
};

button.addEventListener('click', openMenu);
closeMenus.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     logo.classList.add("blur-filter");
//     home.classList.add("blur-filter");
//     btn.classList.add("blur-filter");
//     mainBody.classList.add("blur-filter");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     logo.classList.remove("blur-filter");
//     home.classList.remove("blur-filter");
//     hamburger.classList.remove("blur-filter");
//     mainBody.classList.remove("blur-filter");
// }))