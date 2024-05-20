const typed = new Typed('#element', {
    strings: ['Software Engineer', 'Web Developer', 'Web Designer'],
    typeSpeed: 50,
});

const toggling = document.querySelector('.form-switch');
const foot = document.querySelector('.foot');
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const label = document.querySelector('.form-check-label');


toggling.addEventListener('click', (evt) => {

    body.classList.toggle('bodyToggle');
    foot.classList.toggle('footToggle');
    navbar.classList.toggle('navbarToggle');
    body.style.transition = 'all 1s ease-in';
    foot.style.transition = 'all 1s ease-in';
    navbar.style.transition = 'all 1s ease-in';
    label.innerText == "Light Mode" ? label.innerText = "Dark Mode" : label.innerText = "Light Mode";


})

