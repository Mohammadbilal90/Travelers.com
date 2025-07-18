AOS.init();










// File: js/app.js

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu').querySelector('ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
