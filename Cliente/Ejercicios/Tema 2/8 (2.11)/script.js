let letra = 'x';
do{
    letra = window.prompt("Adivine la letra para ganar.")
    if(letra != 's'){
        window.alert("No ha habido suerte! Vuelva a intentarlo.");
    }
}while(letra != 's');
console.log("Se ha salido del programa.")