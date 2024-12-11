document.addEventListener("click", (event)=>{

    console.log(`Coordenada X: ${event.screenX}, Coordenada Y: ${event.screenY}`)
    console.log(event.target)
})
