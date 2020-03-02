

window.addEventListener('scroll', function() {
    let windowLength = window.scrollY;
    let overlay1 = document.querySelector('.overlay-1');

    overlay1.style.transform = 'translateY( ' + windowLength + 'px)';

    console.log(windowLength);
});