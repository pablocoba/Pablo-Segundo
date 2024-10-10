let letra = 'x';
while(letra != 's'){
    letra = window.prompt("Adivine la letra para ganar.")
    if(letra != 's'){
        window.alert("No ha habido suerte! Vuelva a intentarlo.");
    }
}
console.log("Se ha salido del programa.")