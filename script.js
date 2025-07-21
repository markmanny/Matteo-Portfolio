// Navbar active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Evidenzia la sezione attiva nella navbar durante lo scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
  let index = sections.length;
  while (--index >= 0) {
    const sectionTop = sections[index].getBoundingClientRect().top;
    if (sectionTop <= 80) {
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
      break;
    }
  }
}
window.addEventListener('scroll', activateNavLink);
window.addEventListener('DOMContentLoaded', activateNavLink);

// Animazione cards About quando appaiono
function showCardsOnScroll() {
  const cards = document.querySelectorAll('.card');
  const trigger = window.innerHeight * 0.85;
  cards.forEach((card, i) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < trigger) {
      setTimeout(() => card.classList.add('visible'), i * 180);
    }
  });
}
window.addEventListener('scroll', showCardsOnScroll);
window.addEventListener('DOMContentLoaded', showCardsOnScroll);

document.addEventListener('DOMContentLoaded', function() {
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const bioCard = document.querySelector('.bio-card');
  if (bioCard) {
    setTimeout(() => bioCard.classList.add('animate'), 300);
  }
});

// Hamburger menu logic
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  if (hamburger && navUl) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      navUl.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
    });
    // Chiudi il menu quando si clicca un link
    navUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navUl.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});