//!                     Notes /  JS

//* Sticky Nav using HTML & CSS.
//* Nav will transform on scroll.
//* Responsive 450-500px - 1750px
//* ( Large cell Phone /Small tablet up to laptop)

//!     -----        JavaScript       -------

const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};
