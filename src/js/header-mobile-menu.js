const mobileMenu = document.querySelector('.mobile-menu')
const openMobileMenu = document.querySelector('.open-mobile-menu')
const closeMobileMenu = document.querySelector('.close-btn-menu')

openMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('is-open')
    mobileMenu.classList.remove('is-closed')
})

closeMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('is-closed')
    mobileMenu.classList.remove('is-open')
})

window.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !openMobileMenu.contains(event.target)) {
        mobileMenu.classList.add('is-closed');
        mobileMenu.classList.remove('is-open');
    }
})