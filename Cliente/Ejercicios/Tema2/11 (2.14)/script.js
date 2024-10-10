let tamano = prompt("Introduzca tamaño");
document.write(`<table style="border: solid black 2px; border-collapse: collapse;">`);
for(let i = 0; i<4; i++){
    document.write(`<tr>`)
    for(let i = 0; i < 4; i++){
        document.write(`<td style="width: ${tamano}px; height:${tamano}px; background-color:black;"></td>`);
        document.write(`<td style="width: ${tamano}px; height:${tamano}px; background-color:white;"></td>`);
    }
    document.write(`</tr>`);//he descubierto que esto no es necesario
    document.write(`<tr>`);
    for(let i = 0; i < 4; i++){
        document.write(`<td style="width: ${tamano}px; height:${tamano}px; background-color:white;"></td>`);
        document.write(`<td style="width: ${tamano}px; height:${tamano}px; background-color:black;"></td>`);
    }
    document.write(`</tr>`)//ni esto, te lo cierra solo
}
