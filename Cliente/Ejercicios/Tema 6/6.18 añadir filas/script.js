

function agregar(...datos){
    const tabla = document.getElementById('tabla')

    datos.forEach(columna => {
        let nuevoTr = document.createElement("tr")
        tabla.appendChild(nuevoTr)

        columna.forEach(celda=>{
            let nuevoElemento = document.createElement("td") 
            let text = document.createTextNode(celda)
            nuevoElemento.appendChild(text);
            tabla.lastChild.appendChild(nuevoElemento)
        })

    });
}

const datos1 = ["Elena Nito", "Hector Tuga", "Victor Nillo"]
const datos2 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf Nillo"]
const datos3 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf Nillo"]
const datos4 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf Nillo"]
const datos5 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf Nillo"]
const datos6 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf Nillo"]

agregar(datos1, datos2, datos3, datos4, datos5, datos6)
