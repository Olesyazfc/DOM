const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

hasTooltip.forEach((i) => {

    let title = i.getAttribute('title')
        
    i.onclick = () => {
        let pos = i.getBoundingClientRect()
        top = pos.bottom + window.scrollY
        left = pos.left - window.scrollX 

        i.innerHTML += `
        <div class="tooltip" style="left: ${left}px; top: ${top}px; position: absolute;">
        ${title}
        </div>
      `

        i.querySelector('.tooltip').classList.toggle('tooltip_active')

        return false
    }
})

