//All of my Selectors
const burger_icon = document.querySelector(".burger__icon");
const second_burger_icon = document.querySelector("#secondburger");
const smallscreens_menu = document.querySelector(".menu");
const smallScreenRemove_btn = document.querySelector(".remove");
const website = document.querySelector(".main");
const years_of_coding = document.querySelector(".time-experience")

//Showing small screen menu
burger_icon.addEventListener("click", function () {
  smallscreens_menu.style.display = "block";
  website.style.display = "none";
});
second_burger_icon.addEventListener("click", function () {
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
const scrollPage = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
};

///----------Method 2 for smooth scroll----------------//////////
document.querySelector(".nav__links").addEventListener("click", scrollPage);
document.querySelector("#actualnav").addEventListener("click", scrollPage);

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
const nav = document.querySelector("#fixedbar");
const navHeight = nav.getBoundingClientRect().height;
const obsCallBack = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.style.display = "flex";
    nav.classList.add("sticky");
  } else {
    nav.style.display = "none";
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

let now = new Date();
let current_date = now.getFullYear()
var time = current_date - 2018;

years_of_coding.textContent = time;