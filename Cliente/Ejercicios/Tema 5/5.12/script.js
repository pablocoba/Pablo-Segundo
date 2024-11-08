let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]
let mensaje = prompt("NIF")
let [digitos,l] = mensaje.split(/([A-Z])/);
let resto = digitos%23
let letri = letras[digitos%23]

let hola = function(mensaje){
    if(mensaje != [digitos+letri]){
        console.log("no son iguales")
        return false;
    }
    else{
        let comprobar = new RegExp('\\d{8}\\w{1}')
        return comprobar.test(mensaje);
    }

}
if(hola(mensaje)==true){
    
}
console.log(hola(mensaje))


