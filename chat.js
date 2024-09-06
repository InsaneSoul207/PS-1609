document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.chat-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        const chatID = this.getAttribute('data-chat');

        document.querySelectorAll('.chat-content').forEach(chat => chat.classList.remove('active'));

        document.getElementById(chatID).classList.add('active');
    });
});

document.querySelectorAll('.chat-input button').forEach(button => {
    button.addEventListener('click', function() {
        const activeChat = document.querySelector('.chat-content.active');

        const messageInput = activeChat.querySelector('.chat-input input');

        const messageText = messageInput.value.trim();

        if (messageText !== '') {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message', 'sent');
            newMessage.innerHTML = `
                <p>${messageText}</p>
                <span class="time">${new Date().toLocaleTimeString()}</span>
            `;

            activeChat.querySelector('.chat-messages').appendChild(newMessage);

            messageInput.value = '';

            activeChat.querySelector('.chat-messages').scrollTop = activeChat.querySelector('.chat-messages').scrollHeight;
        }
    });
});

document.querySelectorAll('.chat-input input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.nextElementSibling.click();
        }
    });
});
function sendMessage(inputId, chatId) {
    const messageInput = document.getElementById(inputId);
    const chatMessages = document.getElementById(chatId);
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `
            <p>${messageText}</p>
            <span class="time">${new Date().toLocaleTimeString()}</span>
        `;

        chatMessages.appendChild(newMessage);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');

        const chatID = this.getAttribute('data-chat');
        document.querySelectorAll('.chat-area').forEach(chat => chat.classList.remove('active'));
        document.getElementById(chatID).classList.add('active');
    });
});