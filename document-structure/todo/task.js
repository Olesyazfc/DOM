const input = document.getElementById('task__input')
const button = document.getElementById('tasks__add')
const tasksList = document.getElementById('tasks__list')

button.onclick = () => {
    let value = input.value.trim()
    pushTask(value)
    input.value = ''
    removeTask()
    return false
}

function pushTask(value) {
    if (value.length > 0) {
        tasksList.innerHTML +=

        `<div class="task">
            <div class="task__title">
            ${value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    }

}


function removeTask() {
    const removesList = Array.from(document.querySelectorAll('a.task__remove'))
    removesList.forEach((i) => i.onclick = () => {
        console.log(i)
        i.closest('div').remove()
    })
}





