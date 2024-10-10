let a;
a = window.prompt("Nombre:");
let b;
b = confirm(`${a}, Abandonar el programa?`);

if(b){
    window.alert("Pulsaste \"aceptar\"");
}else window.alert("Pulsaste \"cancelar\"");
console.log(`%c-PROGRAMA FINALIZADO-`, `font-weight:bold; color:blue; text-decoration: underline;`)