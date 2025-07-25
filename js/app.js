AOS.init();










// File: js/app.js

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu').querySelector('ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


let Number = [" 5, 10 , 15, 20 "];

Number.forEach(function (num) {
  console.log("Value:" + num);
});


let numbers = [5, 10, 15, 20];
let i = 0;         
let sum = 0;       

while (i < numbers.length) {
  sum = sum + numbers[i];  
  i++;                      
}

console.log("Total Sum:", sum);

let NumBers = [5, 10, 15, 20];
NumBers.forEach(function (num) {
  console.log(num * 2)
});
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Bilal");


function add(m , s){
  return m + s;
}


let result = add(95, 150);

console.log(result);













