AOS.init();






  // const menuToggle = document.getElementById('mobile-menu');
  // const navList = document.querySelector('.nav-list');

  // menuToggle.addEventListener('click', () => {
  //   navList.classList.toggle('active');
  // });





// File: js/app.js

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu').querySelector('ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
