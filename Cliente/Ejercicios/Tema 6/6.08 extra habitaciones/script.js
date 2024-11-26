let casa = document.getElementById("casa")


let siguienteHermano = function(){
    let activo = document.querySelector('.activo')
    if(activo.nextElementSibling.tagName != 'BUTTON'){
        console.log(activo.nextElementSibling)
        activo.setAttribute("class", activo.getAttribute("class").split(" ")[0])
        activo.nextElementSibling.setAttribute("class", (activo.getAttribute("class") + " activo"))
    }
}

let anteriorHermano = function(){
    let activo = document.querySelector('.activo')
    if(activo.previousElementSibling.textContent != null){
        activo.setAttribute("class", activo.getAttribute("class").split(" ")[0])
        activo.previousElementSibling.setAttribute("class", (activo.getAttribute("class") + " activo"))
    }

}
let primerHijo = function(){
    let activo = document.querySelector('.activo')
    let hijosActivo = activo.childNodes()p-.
    activo.setAttribute("class", activo.getAttribute("class").split(" ")[0])
    
}