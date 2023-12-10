document.addEventListener('DOMContentLoaded', initializeMenu);
window.addEventListener('resize', handleResize);

const hamburgerBtn = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
let isNavDisplayed = false; // Suivre l'état d'affichage du menu

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (isNavDisplayed) {
        menu.classList.add('hidden'); // Cache le menu
        hamburgerBtn.classList.remove('bi-x'); // Change en icône de menu burger
        hamburgerBtn.classList.add('bi-list');
    } else {
        menu.classList.remove('hidden'); // Affiche le menu
        hamburgerBtn.classList.remove('bi-list'); // Change en icône de croix
        hamburgerBtn.classList.add('bi-x');
    }
    isNavDisplayed = !isNavDisplayed; // Bascule l'état d'affichage
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        // Sur les grands écrans, affiche toujours le menu et réinitialise l'icône
        menu.classList.remove('hidden');
        hamburgerBtn.classList.remove('bi-x');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = true;
    } else {
        // Sur les petits écrans, cache toujours le menu et réinitialise l'icône
        menu.classList.add('hidden');
        hamburgerBtn.classList.remove('bi-x');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = false;
    }
}

function initializeMenu() {
    if (window.innerWidth < 1000) {
        menu.classList.add('hidden');
        hamburgerBtn.classList.add('bi-list');
        hamburgerBtn.classList.remove('bi-x');
        isNavDisplayed = false;
    } else {
        menu.classList.remove('hidden');
        hamburgerBtn.classList.remove('bi-x');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = true;
    }
}