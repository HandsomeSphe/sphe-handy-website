//Menu from burger icon
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
