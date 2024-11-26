const tareas = document.querySelectorAll('[data-tarea]')

for(tarea of tareas){
    let t = tarea.getAttribute("data-tarea")
    let siono = confirm(`Está completada la tarea ${t}? Pulsa aceptar si SÍ, pulsa cancelar si NO`)
    if(siono){
        tarea.setAttribute("class", "completada")
    }
    else{
        tarea.setAttribute("class","pendiente")
    }
}

console.log(tareas)

