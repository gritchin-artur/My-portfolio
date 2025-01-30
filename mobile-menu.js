document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.querySelector(".burger-menu");
  const navList = document.querySelector(".nav-list");

  // open mobile version nav-list
  burgerMenu.addEventListener("click", function (event) {
    navList.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    event.stopPropagation();
  });

  // close outside the nav-list
  document.addEventListener("click", function (event) {
    if (!navList.contains(event.target) && !burgerMenu.contains(event.target)) {
      navList.classList.remove("active");
      burgerMenu.classList.remove("active");
    }
  });
});
