let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide"); //By this on click the class "hide" get attached to open button.
  closeBtn.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide"); //By this on click the class "hide" get attached to open button.
    closeBtn.classList.toggle("hide");
  });
