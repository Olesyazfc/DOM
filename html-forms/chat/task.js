const widget = document.querySelector('.chat-widget')
const input = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );

const answerList = [
        "Кто тут?",
        "Мы ничего не будем вам продавать",
        "Где ваша совесть?",
        "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
        "К сожалению, все операторы сейчас заняты. Не пишите нам больше!",
        "Добрый день! До свидания!",
        "Учись правильно задавать вопросы!",
    ];


widget.onclick = () => {
    widget.classList.add('chat-widget_active')
}

function pushMessage(e) {
    let result
    let value = input.value.trim()
    if (e.code === "Enter" && value.length != 0) {
        result = input.value
        input.value = ""
        rengerMessage(result, 'message_client')        
        pushBotMessage()
    }
}
document.addEventListener('keydown', pushMessage)


function pushBotMessage() {
    let randomIndex = Math.round(Math.random() * (answerList.length - 1));
    let answer = answerList[randomIndex];
    rengerMessage(answer, null)
}

function rengerMessage(value, classes) {
    messages.innerHTML += `
        <div class="message ${classes}">
            <div class="message__time">${new Date().toLocaleTimeString().slice(0,-3)}</div>
                <div class="message__text">${value}</div>
        </div>
        `;
}