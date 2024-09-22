const toggleBtns = document.querySelectorAll(".menu-toggle");
const nav = document.querySelector(".nav");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    nav.classList.toggle("opened");
  });
});
document.addEventListener("click", (e) => {
  // Check if the click is outside the nav and any of the toggle buttons
  const isClickOutsideToggleBtns = [...toggleBtns].every(
    (btn) => !btn.contains(e.target)
  );

  if (!nav.contains(e.target) && isClickOutsideToggleBtns) {
    if (nav.classList.contains("opened")) {
      nav.classList.remove("opened");
    }
  }
});
