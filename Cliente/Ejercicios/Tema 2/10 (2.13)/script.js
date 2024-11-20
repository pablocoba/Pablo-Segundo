let col = window.prompt("Introduce cuántas columnas quieres");
let width = window.prompt("Introduce un ancho");
let height = window.prompt("Introduce un alto");
let contador = 0;
document.write(`<table style=\"border: black; border: 2px; background-color: black; width:${width*col}px;\">`)
document.write(`<tr style=\"background-color: white; height:${height}px\">`)

for(let i = 0; i < col*2; i++){
    document.write(`<td style=\"width: ${width}px; height:${height}px;></td>`);
    contador++;
}



document.write("</tr></table>")
