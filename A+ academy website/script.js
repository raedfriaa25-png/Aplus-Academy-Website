function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".hero-card img");
  if (!card) return;

  const x = (window.innerWidth / 2 - e.clientX) / 45;
  const y = (window.innerHeight / 2 - e.clientY) / 45;

  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});