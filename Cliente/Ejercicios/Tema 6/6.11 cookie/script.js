function getCookie(nombre){
    const listaCookies = document.cookie.split(';')

    for(const cookie of listaCookies){
        const par = cookie.split('=')
        if(par[0] === nombre){
            return par[1]
        }
    }
    return null;
}
function leerCookie(claveBuscada){
    if(document.cookie.length == 0){
        return;
    }
    let listaCookie = 
}

const nombre = prompt("dame nombre")
const edad = prompt("dame edad")

var expirationDate = new Date()
expirationDate.setTime(expirationDate.getTime()+30*60*1000)

document.cookie = `nombre ${nombre};expires=${expirationDate.toUTCString()}`
document.cookie = `edad ${edad};expires=${expirationDate.toUTCString()}`

alert(getCookie("nombre"))