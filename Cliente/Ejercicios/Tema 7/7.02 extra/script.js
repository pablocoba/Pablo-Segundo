let pantalla = document.getElementById('pantalla') //pantalla de la calculadora
let numeros = document.getElementsByClassName('num') //numeros de la calculadora
let firstNum = true //variable que indica si el num que se pone es el primero del factor
let operador = "" 
let factor1 = 0 //primer factor de la operacion
let factor2 = 0 //segundo factor de la operación

let dibujarPantalla = function(event){
    //pasa a la pantalla el numero y si ya tiene lo concatena
    if(firstNum == true){
        pantalla.textContent = event.target.textContent //EL TARGET ES PARA QUE LO RECIBA
        //controla que si el primer número es 0, no deje de ser el primer número.
        if(event.target.textContent != 0){
            firstNum = false
        }
    }
    else{
        pantalla.textContent = pantalla.textContent + "" + event.target.textContent
    }
}

for(let n of numeros){
    n.addEventListener("click", dibujarPantalla)
}

//se le asigna el operador a la operación, cambia el bg para que sepas lo que haces,
//se asigna también el primer factor y first numero pasa a true para que no se siga concatenando el siguiente digito
let operadores = document.getElementsByClassName('operador')
for(let o of operadores){
    o.addEventListener("click", (event)=>{
        operador = o.textContent
        factor1 = pantalla.textContent
        firstNum = true
        //esto es para que al seleccionar otro operador de seguido se cambie el fondo y el que estaba marcado se desmarque
        operadores[0].style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
        operadores[1].style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
        operadores[2].style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
        operadores[3].style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
        o.style.background = "linear-gradient(to right, rgb(205,200,239), rgb(139,130,220))"
    })
    
}

//operadores para el switch
let suma = document.getElementById('suma')
let resta = document.getElementById('resta')
let multiplicar = document.getElementById('multiplicar')
let dividir = document.getElementById('dividir')

//al pulsar la C, todo se reinicia, y volvemos a tener firstNum true porque volverá a ser el primer numero
let c = document.getElementById('C')
c.addEventListener("click", (event) => {
    pantalla.textContent = 0
    factor1 = 0
    firstNum = true
    suma.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
    resta.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
    dividir.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
    multiplicar.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
})

let igual = document.getElementById('igual')
igual.addEventListener("click", (event)=>{
    //si se pulsa sin haber pulsado un operador antes, no va a hacer nada.
    if(factor1 != 0){ 
        factor2 = pantalla.textContent
        firstNum = true
        switch(operador){
            case '+':
                pantalla.textContent = parseFloat(factor1)+parseFloat(factor2)
                suma.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
                operador = ""
                break;
            case '-':
                pantalla.textContent = parseFloat(factor1)-parseFloat(factor2)
                resta.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
                operador = ""
                break;
            case '*':
                pantalla.textContent = parseFloat(factor1)*parseFloat(factor2)
                multiplicar.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
                operador = ""
                break;
            case '/':
                pantalla.textContent = parseFloat(factor1)/parseFloat(factor2)
                dividir.style.background = "linear-gradient(to right, rgb(209, 205, 235), rgb(164, 161, 190))"
                operador = ""
                break;
        }
    }
})

let coma = document.getElementById("coma")
coma.addEventListener("click", (event)=>{
    //añade una coma en la última posición
    if(!pantalla.textContent.includes('.')){
    pantalla.textContent = pantalla.textContent + '.'
    }
    //si pones la coma despues del 0 de inicio, te deja poner números detrás de la coma
    firstNum = false

})