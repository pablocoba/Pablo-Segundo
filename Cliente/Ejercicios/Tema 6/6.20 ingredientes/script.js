
const lista = document.getElementById("lista")
let ingrediente = "caca"

while(ingrediente != null){
        ingrediente = prompt('introduce un ingrediente')
        if(ingrediente!=null){
            let nuevoElemento = document.createElement("li")
            let texto = document.createTextNode(ingrediente)
            nuevoElemento.appendChild(texto)
            lista.appendChild(nuevoElemento)
        }
}

