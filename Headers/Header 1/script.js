

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('shownav');
    nav.classList.toggle('shownav');
});