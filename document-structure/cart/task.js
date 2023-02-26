const quantity = Array.from(document.querySelectorAll('.product'))
const cart = document.querySelector('.cart__products')


quantity.forEach((item) => {
    let inc = item.querySelector('.product__quantity-control_inc')
    let dec = item.querySelector('.product__quantity-control_dec')
    let quantityValue = item.querySelector('.product__quantity-value')
    let productAdd = item.querySelector('.product__add') 
    inc.onclick = () => {addQuantity(quantityValue)} 
    dec.onclick = () => {reduceQuantity(quantityValue)}
    productAdd.onclick = () => addToCart(item, quantityValue)
})

function addQuantity(product) {
    let number = parseInt(product.textContent) 
    product.textContent = number + 1
}

function reduceQuantity(product) {
    let number = parseInt(product.textContent) 
    if (product.textContent > 0) {
        product.textContent = number - 1
    }
}

function addToCart(product, value) {

    let img = product.querySelector('img').cloneNode(false)
    let count = value.cloneNode(true)
    let id = product.cloneNode(false)
    let dataId = id.getAttribute('data-id')

    id.className = 'cart__product'
    img.className = 'cart__product-image'
    count.className = 'cart__product-count'


    let products = Array.from(cart.querySelectorAll('.cart__product'))
    let lastCount = products.filter(i => i.getAttribute('data-id') == dataId)
    
    if (lastCount.length > 0) {
        let cartCount = lastCount[0].querySelector('.cart__product-count')
        let lastInt = parseInt(cartCount.textContent)
        let newInt = parseInt(count.textContent)
        cartCount.textContent = lastInt + newInt      
    } else {
        cart.appendChild(id)
        id.appendChild(img)
        id.appendChild(count)
    }
}

    