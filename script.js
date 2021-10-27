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
///---------Smooth Scroll for small screens----------------//////////
document.querySelector(".menu__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("menu__link")) {
    const id = e.target.getAttribute("href");
    website.style.display = "";
    smallscreens_menu.style.display = "none";
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
//Remove small screen menu
smallScreenRemove_btn.addEventListener("click", function () {
  smallscreens_menu.style.display = "none";
  website.style.display = "";
});

///----------Method 2 for smooth scroll----------------//////////
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
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

///----------Navigation sliding in----------------//////////
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const obsCallBack = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(obsCallBack, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
observer.observe(header);
/////--------------------Contact form---------------/////////
const contact_btn = document.querySelector("#footer__btn");
const contact_popup = document.querySelector(".contactpage");
const contact_remove = document.querySelector(".contact-popup--remove");
const submit_btn = document.querySelector("#submitpopup");
const firstname_input = document.querySelector(".username");
const email_input = document.querySelector(".email");
const message_area = document.querySelector("#mssg");

//Display the popup form
contact_btn.addEventListener("click", function () {
  contact_popup.style.visibility = "visible";
});
//Remove the popup form
contact_remove.addEventListener("click", function () {
  contact_popup.style.visibility = "hidden";
});
//clear the input fields after 1 minute
submit_btn.addEventListener("click", function (e) {
  // e.preventDefault();
  setTimeout(function () {
    firstname_input.value = "";
    email_input.value = "";
    message_area.value = "";
  }, 1500);
});
