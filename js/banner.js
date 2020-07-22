  var banner = document.getElementsByClassName('banner__images')[0];
  var edoActual = 1;
  function bannerMov(cambioEdo) {
    edoActual=edoActual+cambioEdo;
    if (edoActual <= 0) {
      edoActual = 5;
    }
    if (edoActual >= 6) {
      edoActual = 1;
    }
    switch (edoActual) {
      case 1:
        banner.classList.remove('mov5');
        banner.classList.remove('mov2');
        banner.classList.add('mov1');
        break;
      case 2:
        banner.classList.remove('mov1');
        banner.classList.remove('mov3');
        banner.classList.add('mov2');
        break;
      case 3:
        banner.classList.remove('mov2');
        banner.classList.remove('mov4');
        banner.classList.add('mov3');
        break;
      case 4:
        banner.classList.remove('mov3');
        banner.classList.remove('mov5');
        banner.classList.add('mov4');
        break;
      case 5:
        banner.classList.remove('mov4');
        banner.classList.remove('mov1');
        banner.classList.add('mov5');
        break;
    }
  }