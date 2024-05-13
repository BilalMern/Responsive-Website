let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar__menu");
openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide"); //By this on click the class "hide" get attached to open button.
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide"); //By this on click the class "hide" get attached to open button.
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});
