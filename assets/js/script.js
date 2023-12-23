function scrollTo(position) {
    const scrollDiv = document.getElementById(position);
    scrollDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeMobileMenu() {
    // prendo il menu tramite id 
    const mobileMenu = document.getElementById('mobile-menu');
    // nascondo il menu tramite lo style proprieties
    mobileMenu.style.display = 'none';
}

function onMobileMenuClick(to, position) {
    // richiamo le funzioni per chiudere il menu e scrollare nella posizione
    if (!window.location.href.includes(to)) {
        window.location.href = './' + to + (position ? '#' + position : '');
    } else {
        closeMobileMenu();
        scrollTo(position);
    }
}

function onDesktopMenuClick(to, position) {
    // controllo se devo andare in un'altra pagina e se c'è una posizione della pagina da raggiungere
    if (!window.location.href.includes(to)) {
        window.location.href = './' + to + (position ? '#' + position : '');
    } else {
        scrollTo(position);
    }
}

function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'block';
}