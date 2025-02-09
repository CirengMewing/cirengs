// sticky navbar
document.addEventListener('scroll',() => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled')
  }
})

// active links navbar
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;
  
  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
    }
  });
};

// Toggle class active untuk hamburger menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// ketika hamburger menu di klik
menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

// Klik di luar elemen
// const hm = document.querySelector('#menu-icon');

// document.addEventListener('click', function (e) {
//   if (!hm.contains(e.target) && !navbar.contains(e.target)) {
//     navbar.classList.remove('active');
//   }
// });
