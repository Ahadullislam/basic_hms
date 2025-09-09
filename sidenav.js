// sidenav.js: handles show/hide of the sidebar

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hms-hamburger');
    const sidenav = document.getElementById('hms-sidenav');
    const overlay = document.getElementById('hms-sidenav-overlay');

    function openNav() {
        sidenav.classList.add('open');
        overlay.classList.add('show');
    }
    function closeNav() {
        sidenav.classList.remove('open');
        overlay.classList.remove('show');
    }

    hamburger.addEventListener('click', openNav);
    overlay.addEventListener('click', closeNav);

    // Optionally, allow ESC key to close nav
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeNav();
    });
});
