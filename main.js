const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const menuBtn = document.querySelector(".menuBtn");

const leftContainer = document.getElementById("leftContainer");
const centerContainer = document.getElementById("centerContainer");

nextBtn.addEventListener("click", () => {
  prevBtn.classList.add("active");
  nextBtn.classList.remove("active");

  leftContainer.classList.add("page2");
  leftContainer.classList.remove("page1");
  centerContainer.classList.add("page2");
  centerContainer.classList.remove("page1");
});

prevBtn.addEventListener("click", () => {
  prevBtn.classList.remove("active");
  nextBtn.classList.add("active");

  leftContainer.classList.add("page1");
  leftContainer.classList.remove("page2");
  centerContainer.classList.add("page1");
  centerContainer.classList.remove("page2");
});

menuBtn.addEventListener("click", () => {
  alert("menu");
});
