/* Selecting the search form element. */
searchForm = document.querySelector('.search-form');

/* Adding an event listener to the search button. When the user clicks on the search button, the search
form will toggle the class of active. */
document.querySelector('#search-btn').onclick = () =>{

    searchForm.classList.toggle('active')
}

/* A function that is being called when the user scrolls. */
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


window.onload= () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
     
}