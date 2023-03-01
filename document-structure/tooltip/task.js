const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'))

hasTooltip.forEach((i) => {

    let title = i.getAttribute('title')
        
    i.onclick = () => {

      if ( i.nextElementSibling === null || i.nextElementSibling.classList[0] != 'tooltip' ) {

        let pos = i.getBoundingClientRect()
        top = pos.bottom + window.scrollY
        left = pos.left - window.scrollX 

        let newElement = `
        <div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px; position: absolute;">
        ${title}
        </div>
      `
        i.insertAdjacentHTML('afterend', newElement)
      } else {
        let a = i.nextElementSibling
        a.classList.toggle('tooltip_active')
      }

      return false
    }
})

