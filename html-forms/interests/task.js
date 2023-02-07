const interests = document.querySelector('.interests_main')
const items = Array.from(interests.querySelector('ul').children)

const mainItems = Array.from((items.map((i) => i.querySelector('.interest__check'))))

mainItems.forEach((item) => { 
    let subpoints = item.closest('label').nextElementSibling
    let subpoint = Array.from(subpoints.querySelectorAll('.interest__check'))
    item.onclick = () => {
        if(item.checked === true) {

            subpoint.forEach((element) => element.checked = true) 
        } else {

            subpoint.forEach((element) => element.checked = false)
        }
    }
})

