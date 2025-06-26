AOS.init();






  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });







function printNumbers() {
  for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }
}

printNumbers(); // Call the function
