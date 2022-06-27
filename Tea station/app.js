const navBtn = document.getElementById("nav-btn");

const navLists = document.getElementById("nav-lists");

const closeBtn = document.getElementById("close-btn");



closeBtn.addEventListener("click", () => {
  navLists.classList.remove("movetoright");
});

const date = document.getElementById("year");
date.innerHTML = new Date().getFullYear();
