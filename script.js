let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let contactForm = document.querySelector('#contact-form');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.toggle('active', links.hash === '#' + id);
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

contactForm.addEventListener('submit', event => {
    event.preventDefault();

    let formData = new FormData(contactForm);
    let message = [
        `Nama: ${formData.get('name')}`,
        `Email: ${formData.get('email')}`,
        `Nomor telepon: ${formData.get('phone')}`,
        `Subjek: ${formData.get('subject')}`,
        `Pesan: ${formData.get('message')}`
    ].join('\n');

    window.location.href = `https://wa.me/6281214166691?text=${encodeURIComponent(message)}`;
});