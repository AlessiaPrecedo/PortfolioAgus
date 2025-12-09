
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

const items = document.querySelectorAll(".item");

items.forEach(item => {
  const btn = item.querySelector(".btn");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
