let a = window.prompt("Introduzca su nombre");
let b = window.prompt("Introduzca su edad");
if(b <= 12) console.log(`%c${a} tiene ${b} años y por tanto es Niño`, `font-weight: bold; color: green;`);
else if(b > 12 && b<18) console.log(`%c${a} tiene ${b} años y por tanto es Adolescente`, `font-weight: bold; color: green;`);
else if(b > 17 && b<65) console.log(`%c${a} tiene ${b} años y por tanto es Trabajador`, `font-weight: bold; color: green;`);
else if(b > 64) console.log(`%c${a} tiene ${b} años y por tanto es Jubilado`, `font-weight: bold; color: green;`);