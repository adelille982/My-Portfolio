document.addEventListener('DOMContentLoaded', initializeMenu);
window.addEventListener('resize', handleResize);

const hamburgerBtn = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
let isNavDisplayed = false;

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (isNavDisplayed) {
        menu.classList.add('hidden'); // Cache le menu
        hamburgerBtn.classList.remove('bi-x', 'open'); // Retire la classe pour la croix noire
        hamburgerBtn.classList.add('bi-list');
    } else {
        menu.classList.remove('hidden'); // Affiche le menu
        hamburgerBtn.classList.remove('bi-list');
        hamburgerBtn.classList.add('bi-x', 'open'); // Ajoute la classe pour la croix noire
    }
    isNavDisplayed = !isNavDisplayed;
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        menu.classList.remove('hidden', 'open'); // Assurez-vous que le menu est affiché normalement
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = false;
    } else {
        if (!isNavDisplayed) {
            menu.classList.add('hidden');
            hamburgerBtn.classList.remove('bi-x', 'open');
            hamburgerBtn.classList.add('bi-list');
        }
    }
}

function initializeMenu() {
    if (window.innerWidth < 1000) {
        menu.classList.add('hidden');
        hamburgerBtn.classList.add('bi-list');
        hamburgerBtn.classList.remove('bi-x', 'open');
        isNavDisplayed = false;
    } else {
        menu.classList.remove('hidden');
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = true;
    }
}
