class User{
    constructor(nombre, telefono, correo){
        this.nombre = nombre,
        this.telefono = telefono,
        this.correo = correo
    }

}
//creo 3 objetos con espacios random
let pablo = new User("pablo ","123456789","pablo.coba@gmail.com")
let paco = new User("caco"," 999999999","caco.papa@gmail.com")
let pedro = new User("   dedro","333333333  ","dedro.lolo@hotmail.com")

const lista = [pablo,paco,pedro]

let stringJSON = JSON.stringify(lista)
//lo convierto en json
let objJSON = JSON.parse(stringJSON)
const showUsers = (objJSON)=>{
    console.log(" ")
    console.log("LISTA DE USUARIOS: ")
    //for or recorre la lista y la imprime.
        for(let user of objJSON){
            console.log(`Nombre: ${user.nombre}, Telefono: ${user.telefono}, Correo: ${user.correo}, Usuario: ${user.usuario}`)
        }
    }
showUsers(objJSON)

//funciones
extraerUsuario(objJSON)
limpiarEspacios(objJSON)
formatearTelefono(objJSON)


showUsers(objJSON)

function formatearTelefono(objJSON){
    console.log(" ")
    let num = new Array()

    for(let j = 0; j < objJSON.length; j++){
        let nuevoTelefono = objJSON[j].telefono
        let guion = "-"
        //hago un array donde se almacenará todo, luego se lo meto todo a un string  
        num.push("+34-")
        num.push(nuevoTelefono.substring(0,3))
        num.push(guion)
        num.push(nuevoTelefono.substring(3,6))
        num.push(guion)
        num.push(nuevoTelefono.substring(6,9))
        nuevoTelefono = ""
        for(let i = 0; i < num.length; i++){
            nuevoTelefono += num[i]
        }
        // vacio el array y el string se lo paso al telefono del objeto.
        num.length = 0
        objJSON[j].telefono = nuevoTelefono
        console.log(`Formateo de telefono completada. Nuevo telefono: ${objJSON[j].telefono}`)
    }
    }

function limpiarEspacios(objJSON){
    console.log(" ")
    //recorre el array de objetos
    for(let i = 0; i<objJSON.length; i++){

        let nuevoNombre = objJSON[i].nombre
        let nuevoTelefono = objJSON[i].telefono

        //si tiene espacio al principio lo borra y lo cambia.
        while(nuevoNombre.charAt(0) == " "){
            nuevoNombre = nuevoNombre.substring(1)
            objJSON[i].nombre = nuevoNombre
        }
        //si tiene espacio al final lo borra y lo cambia.
        while(nuevoNombre.charAt(nuevoNombre.length-1) == " "){
            nuevoNombre = nuevoNombre.substring(0,(nuevoNombre.length)-1)
            objJSON[i].nombre = nuevoNombre
        }
        //si tiene espacio al principio lo borra y lo cambia.
        while(nuevoTelefono.charAt(0) == " "){
            nuevoTelefono = nuevoTelefono.substring(1)
            objJSON[i].telefono = nuevoTelefono
        }
        //si tiene espacio al final lo borra y lo cambia.
        while(nuevoTelefono.charAt(nuevoTelefono.length-1) == " "){
            nuevoTelefono = nuevoTelefono.substring(0,(nuevoTelefono.length)-1)
            objJSON[i].telefono = nuevoTelefono
        }

    }

    console.log("Lista de nombres y telefonos actualizada y sin espacios.")

}

function extraerUsuario(objJSON){
    console.log(" ")
    //creo un array de usuarios donde le voy a meter el split.
    let user = new Array()

    for(let i = 0; i < objJSON.length; i++){
        //hago el split para separar el principio del final a partir de la arroba
        let u = objJSON[i].correo.split("@")
        //le meto al array solo la parte sin el arroba
        user.push(u[0])
        //se lo añado al usuario
        objJSON[i].usuario = user[0]
        //reinicio el array para que el bucle no acumule usuarios
        user.length = 0
        //comunico que funciona.
        console.log(`usuario creado con éxito. Nuevo usuario: ${objJSON[i].usuario}`)
    }
}

