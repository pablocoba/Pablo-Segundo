
const central = document.getElementsByTagName('li')[1];

console.log(central.previousElementSibling.textContent);
console.log(central.nextElementSibling.textContent);

central.previousElementSibling.style.color = "blue";
central.nextElementSibling.style.color = "red";