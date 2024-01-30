// custom utility function to get elements
const select = (selector) => document.querySelector(selector);

// get elements
const navbar = select('.navbar');

// change navbar's background color based on height
const navHeight = navbar.offsetHeight;

window.addEventListener('scroll', function (e) {
    if (window.innerWidth > 992) {
        if (window.scrollY > navHeight) {
            navbar.style.backgroundColor = '#222222';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }
})