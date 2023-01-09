const rotator = Array.from(document.querySelectorAll('.rotator__case'))
const activeCase = document.querySelector('.rotator__case')

let active = activeCase

function rotate() {

    active.className = 'rotator__case'  
    let newActive  

    if (active == rotator[rotator.length - 1]) {
        newActive = activeCase
    } else {
        newActive = active.nextElementSibling
    }

    newActive.classList.toggle('rotator__case_active')
    active = newActive
}

setInterval(() => { rotate() }, 1000)