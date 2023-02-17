var menu = document.querySelector('.burger');
var hamburger = document.querySelector('.menu');

menu.addEventListener("click", function() {
    hamburger.classList.toggle('open');
    menu.classList.toggle('active');
});