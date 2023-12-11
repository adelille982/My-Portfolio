document.addEventListener('DOMContentLoaded', initializeMenu);
window.addEventListener('resize', handleResize);

const hamburgerBtn = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.nav-link');
const splineViewer = document.querySelector('spline-viewer'); // Référence à spline-viewer
let isNavDisplayed = false;

hamburgerBtn.addEventListener('click', toggleMenu);

// Ajoute un gestionnaire d'événement de clic pour chaque lien de menu
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isNavDisplayed) {
            toggleMenu(); // Ferme le menu lorsque le lien est cliqué
        }
    });
});

function toggleMenu() {
    if (isNavDisplayed) {
        menu.classList.add('hidden');
        splineViewer.classList.add('closed'); // Cache spline-viewer
        splineViewer.classList.remove('open');
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
    } else {
        menu.classList.remove('hidden');
        splineViewer.classList.remove('closed'); // Affiche spline-viewer
        splineViewer.classList.add('open');
        hamburgerBtn.classList.remove('bi-list');
        hamburgerBtn.classList.add('bi-x', 'open');
    }
    isNavDisplayed = !isNavDisplayed;
}

function handleResize() {
    if (window.innerWidth >= 1050) {
        menu.classList.remove('hidden', 'open');
        splineViewer.classList.add('closed'); // Assurez-vous que spline-viewer est caché sur les grands écrans
        splineViewer.classList.remove('open');
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = false;
    } else {
        if (!isNavDisplayed) {
            menu.classList.add('hidden');
            splineViewer.classList.add('closed'); // Assurez-vous que spline-viewer est caché lorsque le menu est fermé
            splineViewer.classList.remove('open');
            hamburgerBtn.classList.remove('bi-x', 'open');
            hamburgerBtn.classList.add('bi-list');
        }
    }
}

function initializeMenu() {
    if (window.innerWidth < 1050) {
        menu.classList.add('hidden');
        splineViewer.classList.add('closed'); // Cache spline-viewer lors de l'initialisation
        splineViewer.classList.remove('open');
        hamburgerBtn.classList.add('bi-list');
        hamburgerBtn.classList.remove('bi-x', 'open');
        isNavDisplayed = false;
    } else {
        menu.classList.remove('hidden');
        splineViewer.classList.remove('closed');
        splineViewer.classList.add('open'); // Affiche spline-viewer sur les grands écrans
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = true;
    }
}
