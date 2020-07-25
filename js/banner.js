var banner = document.getElementsByClassName('banner-image-container')[0];
var edoActual = 1;
const ChangeImg = (cambioEdo) => {
    edoActual = edoActual + cambioEdo;
    if (edoActual <= 0) {
        edoActual = 5;
    }
    if (edoActual >= 6) {
        edoActual = 1;
    }
    console.log(edoActual)
    switch (edoActual) {
        case 1:
            banner.classList.remove('img5');
            banner.classList.remove('img2');
            banner.classList.add('img1');
            break;
        case 2:
            banner.classList.remove('img1');
            banner.classList.remove('img3');
            banner.classList.add('img2');
            break;
        case 3:
            banner.classList.remove('img2');
            banner.classList.remove('img4');
            banner.classList.add('img3');
            break;
        case 4:
            banner.classList.remove('img3');
            banner.classList.remove('img5');
            banner.classList.add('img4');
            break;
        case 5:
            banner.classList.remove('img4');
            banner.classList.remove('img1');
            banner.classList.add('img5');
            break;
    }
}