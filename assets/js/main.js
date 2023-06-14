const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

const linkAction = () => {
    navMenu.classList.remove('show-menu')
}

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        linkAction()
    })
}

const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(x => x.addEventListener('click', linkAction))

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? 
        header.classList.add('blur-header') : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()
    contactForm.reset()
    setTimeout(() => {
        contactMessage.textContent = 'Mensagem enviada'
    }, 500)
}

contactForm.addEventListener('submit',sendEmail)