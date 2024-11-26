

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
const datos2 = ["ddddddd Nito", "sssssss Tuga", "fdfdfdf torni"]
const datos3 = ["22222 Nito", "222222 Tuga", "fdfdfdf dacadacaa"]
const datos4 = ["fsdfdsafsd Nito", "fdsfsdfsad Tuga", "fdfdfdf ppepeppe"]
const datos5 = ["vcvxvcx Nito", "sssssss Tuga", "cvxcvxcbxcb Nillo"]
const datos6 = ["0000000000 Nito", "sssssss 0000000", "fdfdfdf 111111"]

agregar(datos1, datos2, datos3, datos4, datos5, datos6)
