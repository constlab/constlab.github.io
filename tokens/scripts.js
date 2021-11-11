document.querySelectorAll(".token__name").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("token__main--open");
  });
});
