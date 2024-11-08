let mensaje = prompt("Introduce una dirección de correo electrónico")
let hola = function(mensaje){
    let comprobar = new RegExp('[\\w.]{1,20}@[\\w.-]{1,20}\\.\\w{1,4}')
    return comprobar.test(mensaje);
}

console.log(hola(mensaje))


