const navBtn = document.getElementById("nav-btn");

const navLists = document.getElementById("nav-lists");

const closeBtn = document.getElementById("close-btn");

navBtn.addEventListener("click", () => {
  navLists.classList.add("movetoright");
});

closeBtn.addEventListener("click", () => {
  navLists.classList.remove("movetoright");
});

const date = document.getElementById("year");
date.innerHTML = new Date().getFullYear();
