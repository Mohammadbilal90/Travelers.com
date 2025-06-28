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








    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href || link.href === window.location.origin + window.location.pathname) {
            link.classList.add('active');
        }
    });

