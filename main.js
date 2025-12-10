
const items = document.querySelectorAll(".item");

items.forEach(item => {
  const btn = item.querySelector(".btn");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
