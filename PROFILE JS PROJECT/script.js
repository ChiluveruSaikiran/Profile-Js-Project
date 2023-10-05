let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');



function openModal(){
    // modal.style.scale='1';
    // overlay.style.opacity='1';
    modal.classList.add('modalactive');
    overlay.classList.add('overlayactive');

}

function closeModal(){
    // modal.style.scale='0';
    // overlay.style.opacity='0';
    modal.classList.remove('modalactive');
    overlay.classList.remove('overlayactive');

    

}