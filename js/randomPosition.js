document.addEventListener('DOMContentLoaded', function() {
    var photo = document.getElementById('main-photo')
    var navbar = document.getElementById('navbar');
    var contentwindow = document.getElementsByClassName('content');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    var navbarHeight = navbar.offsetHeight;
    var navbarWidth = navbar.offsetWidth;

    var randomX = Math.floor(Math.random() * (windowWidth - photo.offsetWidth));
    var randomY = Math.floor(Math.random() * (windowHeight - photo.offsetHeight));

    if (randomX <= navbarWidth) {     randomX += navbarWidth;     }

    photo.style.left = randomX + 'px';
    photo.style.top = randomY + 'px';
});
