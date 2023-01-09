const reveal = document.querySelector('.reveal')

function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom < 0 ) {
        return false
    }
    if (top > window.innerHeight) {
        return false
    }
    return true
}

setInterval(() => {
    if (isVisible(reveal) == true) {
        reveal.classList.add('reveal_active')
    }
    if (isVisible(reveal) == false) {
        reveal.classList.remove('reveal_active')
    }
}, 1000)