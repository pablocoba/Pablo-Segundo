let nuevoElemento2 = document.createElement("li")
let text2 = document.createTextNode("   2")
nuevoElemento2.appendChild(text2)
let nodoReferencia = document.querySelectorAll("li:nth-of-type(2)")[0]
let lista = document.getElementById("lista")
lista.insertBefore(nuevoElemento2, nodoReferencia)



