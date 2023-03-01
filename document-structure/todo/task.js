const input = document.getElementById('task__input')
const button = document.getElementById('tasks__add')
const tasksList = document.getElementById('tasks__list')

button.onclick = () => {
    let value = input.value.trim()
    pushTask(value)
    input.value = ''
    return false
}

function pushTask(value) {
    if (value.length > 0) {
        
        let newTitle = `
        <div class="task">
            <div class="task__title">
            ${value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`

        tasksList.insertAdjacentHTML('beforeend', newTitle)

        let removeTitle = tasksList.lastChild

        removeTitle.onclick = () => {
            removeTitle.closest('div').remove()
        }


    }

}


