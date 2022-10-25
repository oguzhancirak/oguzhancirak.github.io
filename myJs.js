const modalKapa = document.querySelector('table')
const formKapa = document.querySelector('.modal-body');
const tıklandığında = document.querySelector('#mailGonder');
const mailGonder1 = document.querySelector('#mailGonder1');

tıklandığında.addEventListener('click', (e) => {
    const toast = new bootstrap.Toast(mailGonder1);
    toast.show();

})

const urlGetir = document.querySelector('#btn1');

urlGetir.addEventListener('click', goToLink);

function goToLink() {
    location.href = "https://www.instagram.com/oguzzcirak0/";
}

document.querySelector('.navbar').style.opacity = 1;
window.addEventListener("scroll", (event) => {
    let scroll = Number(window.scrollY)
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 900) {
        nav.style.opacity = 0;
    }
    else if (window.scrollY < 900) {
        nav.style.opacity = 100 / scroll;
    }


});
const canvasA = document.querySelector('.offcanvas-body');
let buttonum = document.createElement('button');
const ekleSayfaya = document.querySelector('body');


buttonum.setAttribute('type', 'button')
buttonum.innerHTML = 'yukarı';
buttonum.style.cssText = 'color:black; font-size:50px; background:green;float:right;roundend;border-radius:50px;position:fixed;bottom:30px;'



const btnEvent = buttonum.addEventListener('click', function (e) {

    location.href = '#myNavbar'
    buttonum.style.opacity = 0;

});


canvasA.addEventListener('click', function (e) {
    ekleSayfaya.appendChild(buttonum);
    btnEvent();




})





