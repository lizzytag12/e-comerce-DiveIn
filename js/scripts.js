/* Selecting the search form element. */
//capturo el form
searchForm = document.querySelector('.search-form');

/* Adding an event listener to the search button. When the user clicks on the search button, the search
form will toggle the class of active. */
//capturo el boton de busqueda y le doy una clase o la saco al hacer click
document.querySelector('#search-btn').onclick = () =>{

    searchForm.classList.toggle('active')
}




/* capturo el contenedor del  formulario */
let loginForm = document.querySelector('.login-form-container');

/* capturo el icono de apertura del login para luego asignarle el evento que me permitira abrir la vista al login */
document.querySelector('#login-btn').onclick = () => {

    loginForm.classList.toggle('active')
}

/* capturo el icono de cierre de la vista login  y le asigno un evento que me permitira cerrar la vista*/
document.querySelector('#close-login-btn').onclick = () => {

    loginForm.classList.remove('active')
}





/* A function that is being called when the user scrolls. */

// al hacer scroll

window.onscroll = () =>{

   /* Removing the class of active from the search form. */
    searchForm.classList.remove('active')

   /* Adding a class of active to the header-2 class when the user scrolls down 80px. */
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }/* Removing the class of active from the header-2 class when the user scrolls up. */
    else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
     
}

//al cargar la pagina:
window.onload= () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
     
}