let dia = window.prompt("Introduzca el día de la semana (Letra)");
switch(dia.toUpperCase()){
    case 'L':
        console.log("El horario es de 7:00-14:00.");
        break;
    case 'M':
        console.log("El horario es de 9:00-16:00.");
        break;  
    case 'X':
        console.log("El horario es de 7:30-14:30.");
        break;
    case 'J':
        console.log("El horario es de 8:00-15:00.");
        break;
    case 'V':
        console.log("El horario es de 15:00-23:00.");
        break;  
    case 'S':
        console.log("El horario es de 16:00-22:00.");
        break;  
    case 'D':
        console.log("Día libre.");
        break;  
    default:
        console.log("No se ha introducido un día correcto.");
}