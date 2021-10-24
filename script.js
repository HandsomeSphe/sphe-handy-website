//All of my Selectors
const burger_icon = document.querySelector(".burger__icon");
const smallscreens_menu = document.querySelector(".menu");
const smallScreenRemove_btn = document.querySelector(".remove");
const website = document.querySelector(".main");

//Showing small screen menu
burger_icon.addEventListener("click", function () {
  smallscreens_menu.style.display = "block";
  website.style.display = "none";
});
//Remove small screen menu
smallScreenRemove_btn.addEventListener("click", function () {
  smallscreens_menu.style.display = "none";
  website.style.display = "";
});
//Implementing the smooth scroll
///----------Method 1 -------------/////////
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
///----------Method 2----------------//////////
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    console.log("LINK");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
///----------Clicking on the Logo----------------//////////
const logo = document.querySelector(".logo");
const home_page = document.querySelector("#home");

logo.addEventListener("click", function () {
  home_page.scrollIntoView({
    behavior: "smooth",
  });
});

///----------Content sliding in----------------//////////
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const obsCallBack = function (entries) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
};

const observer = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0,
  rootMargin: "-128px",
});
observer.observe(header);
