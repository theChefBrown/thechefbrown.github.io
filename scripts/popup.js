const box = document.getElementById('contact-box');
// const boxRegister = document.getElementById('box-login')
const openBtn = document.querySelectorAll("#main-btn");
const closeBtn = document.querySelector('.close-btn');

console.log(openBtn[1]);

openBtn[0].addEventListener('click', () => {
    box.style.display = 'block';
});

openBtn[1].addEventListener('click', () => {
    box.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    box.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === box){
        box.style.display = 'none';
    }
});
