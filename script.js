let qrcontain = document.getElementById('qrcode');
let input = document.getElementById('text');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    let QRAPI = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;

    let img = document.createElement('img');
    img.src = QRAPI;
    img.alt = "qr-code"
    img.style.height = "100%";
    img.style.width = "100%";

    qrcontain.innerHTML = '';
    qrcontain.appendChild(img);
})