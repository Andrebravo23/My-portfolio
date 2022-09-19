const body = document.querySelector('body');
const header = document.getElementById('header');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = 0;
    } else {
        header.style.top = '-' + header.offsetHeight + 'px';
    }
    prevScrollpos = currentScrollPos;
}

const navbar = document.getElementById('navbar');
const toggleNav = document.querySelectorAll('.btn-nav');

toggleNav.forEach(btn => {
    btn.addEventListener('click', () => {
        navbar.classList.toggle('show');
        body.classList.toggle('noscroll');
    });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
        body.classList.remove('noscroll');
    });
});