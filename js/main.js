const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/menu_close.svg";
    } else {
        navBtnImg.src = './img/icons/menu_open.svg';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var section = document.querySelector(link.getAttribute('href'));
            nav.classList.remove('open');
            navBtnImg.src = './img/icons/menu_open.svg';
            section.scrollIntoView({behavior: 'smooth'});
        });
    });
});

AOS.init({
    once: false
});