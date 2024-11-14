
const jugadoresIniciales = [["Pedro", 10], ["Pablo", 20], ["Paco", 30]]

let registro = crearRegistroJugadores(jugadoresIniciales)
mostrarPuntuaciones(registro)
console.log(obtenerPuntuacion("Pedro",registro))
console.log(obtenerPuntuacion("nome",registro)) //este debe fallar
actualizarPuntuacion("Pedro",35,registro)
actualizarPuntuacion("pepe",35,registro) //este debe fallar
console.log(obtenerPuntuacion("Pedro",registro))
console.log(obtenerPuntuacion("Paco",registro))
mostrarPuntuaciones(registro)


function crearRegistroJugadores(lista){
    //crea el mapa
    const mapaJugadores = new Map()

    //doble bucle, rellena el mapa con los jugadores y sus puntos
    for(let i = 0; i<lista.length;i++){      
        for(let j = 0; j<lista[i].length;j = j+2){
                mapaJugadores.set(lista[i][j], lista[i][j+1])
        }
       
    }
    return mapaJugadores
}
function obtenerPuntuacion(jugador, registro){
    //si encuentra al jugador, devuelve su puntuación, sino devuelve un mensaje de error
    if(registro.has(jugador)){
        return registro.get(jugador)
    }
    else return `no se ha encontrado a ese jugador (\"${jugador}\").`

}
function actualizarPuntuacion(jugador,puntos,registro){
    //si le encuentra, le cambia los puntos
    if(registro.has(jugador)){
        registro.set(jugador, puntos)
    }
    //sino, mensaje de error
    else{
        console.log(`no se ha encontrado a ese jugador (\"${jugador}\").`)
    }

}

function mostrarPuntuaciones(registro){

    //for of simple que muestra los jugadores y sus puntuaciones
    for([jugador,puntos] of registro){

        console.log(`Jugador: ${jugador}, Puntos: ${puntos}`)

    }

    
    
}



