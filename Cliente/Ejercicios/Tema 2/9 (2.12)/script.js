let contador = -1;
for(let i = 0; i < 100; i++){

    if(i%7==0){
        console.log(i);
        contador++;
    }

}
window.alert(`Hay ${contador} números multiplos de 7 del 1 al 100.`);