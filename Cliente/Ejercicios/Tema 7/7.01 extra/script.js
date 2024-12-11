let seccion = document.getElementById("commentSection")
let input = document.getElementById("commentText")

let eventoSeccion = function(){
    console.log(`se ha pulsado la caja de comentarios`)
}

seccion.addEventListener("click", eventoSeccion)

input.addEventListener("click", (event)=>{
    seccion.removeEventListener("click", eventoSeccion)
    console.log(`se ha pulsado el input`)
})