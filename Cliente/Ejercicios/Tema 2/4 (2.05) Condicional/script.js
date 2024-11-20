let dividendo, divisor;
dividendo = window.prompt("Introduzca un número dividendo.");
divisor = window.prompt("Introduzca un número divisor.");
let cociente = (divisor == 0) ? "No se puede dividir un número entre 0" : `El resultado de ${dividendo} / ${divisor} es ${dividendo/divisor}`;
window.alert(cociente);