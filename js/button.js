const $BUTTON = window.parent.document.querySelector('.button__menu')
const $BUTTON2 = document.getElementById('buttonShow')
var state = 1;
const showMenu = (stateButton) => {
    $BUTTON.classList.remove('hidden')
    state = state += stateButton;
    if (state === 2) {
        $BUTTON.classList.remove('hidden')
        console.log(state)
        $BUTTON2.firstChild.remove()
        $BUTTON2.innerHTML = `<i class="fas fa-times"></i>`;
    } else if (state === 3) {
        $BUTTON.classList.add('hidden')
        console.log(state)
        $BUTTON2.firstChild.remove()
        $BUTTON2.innerHTML = `<i class="fas fa-bars"></i>`;
        state = 1;
    }

}