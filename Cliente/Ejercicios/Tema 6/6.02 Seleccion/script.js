//he cogido el elemento 
const primero = document.querySelector('.contenedor')

const items = primero.querySelectorAll('.item')

items.forEach(item =>{
    item.style.color = 'green'
})