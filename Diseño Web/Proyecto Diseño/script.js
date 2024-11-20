//función que muestra el sidebar en dispositivos pequeños.
function showSidebar(){
    const sidebar = document.getElementById('sidebar');
    const profilesidebar = document.getElementById('profile-sidebar')
    const psbp = window.getComputedStyle(profilesidebar); //esto coge las clases del css, sin esto no deja. psbp = profile sidebar 
    //si la Profile-sidebar ya está abierta no se podrá abrir
    if(psbp.visibility === "visible"){
    }else{
        sidebar.classList.add('visible');
    }
    
}

//función que muestra el profile-sidebar en dispositivos pequeños.
function showProfilebar(){
    const sidebar = document.getElementById('sidebar');
    const sbp = window.getComputedStyle(sidebar); //esto coge las clases del css, sin esto no deja.
    const profilesidebar = document.getElementById('profile-sidebar')
    //si la sidebar ya está abierta no se podrá abrir
    if(sbp.visibility === "visible"){
    }else{
        profilesidebar.classList.add('visible');
    }
}

//esconde el sidebar
function hideSidebar(){
    const sidebar = document.getElementById('sidebar')
    sidebar.classList.remove('visible');
}

//esconde el profile-sidebar
function hideProfilebar(){
    const profilesidebar = document.getElementById('profile-sidebar')
    profilesidebar.classList.remove('visible');
}

//hace que se quite el menu si pulsamos fuera del sidebar.
document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const sbp = window.getComputedStyle(sidebar); //cogemos las dimensiones y posicion del sidebar
    if(sbp.visibility === "visible"){ //con computedStyle no hace falta poner .style.visibility
        if (sidebar.contains(event.target) === false) { //si el sidebar no contiene el punto donde hemos tocado, lo oculta
            hideSidebar();
        }
    }
});

//hace que se quite el menu si pulsamos fuera del profile-sidebar.
document.addEventListener("click", (event) => {
    const psidebar = document.getElementById("profile-sidebar");
    const psbp = window.getComputedStyle(psidebar); //cogemos las dimensiones y posicion del sidebar 
    if(psbp.visibility === "visible"){
        if (psidebar.contains(event.target) === false) { //si el sidebar no contiene el punto donde hemos tocado, lo oculta
            hideProfilebar();
        }
    }
});

//esto hace que el <a> en el que nos encontramos esté subrayado automáticamente siempre que el html de su href y su id sean iguales
//por ello es importante que el .html y el id del <a> se llamen igual.
const currentPage = window.location.pathname.split('/').pop().split('.')[0] //le quita el .html al archivo (quedaría "index" en el caso de "index.html")
const currentLink = document.getElementById(currentPage)
if(currentLink){
    currentLink.classList.add('active') 
}