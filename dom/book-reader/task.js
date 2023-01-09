const book = document.getElementById('book')
const small = document.querySelector('.font-size_small')
const normal = small.nextElementSibling
const big = document.querySelector('.font-size_big')

function changeSize(size) {
    let activeSize = document.querySelector('.font-size_active')
    activeSize.classList.remove('font-size_active')
    size.classList.add('font-size_active')
}

small.onclick = () => {
    book.className = 'book book_fs-small'
    changeSize(small)
    return false
}

normal.onclick = () => {
    book.className = 'book'
    changeSize(normal)
    return false
}

big.onclick = () => {
    book.className = 'book book_fs-big'
    changeSize(big)
    return false
}