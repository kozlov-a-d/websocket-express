if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// создать подключение
var socket = new WebSocket("ws://localhost:8081");

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
    if ( this.message.value !== '' ) {
        var outgoingMessage = this.message.value;
        socket.send(outgoingMessage);
        this.message.value = '';
    }
    return false;
};

// обработчик входящих сообщений
socket.onmessage = function(event) {
    var incomingMessage = event.data;
    showMessage(incomingMessage); 
};

// показать сообщение в div#subscribe
function showMessage(message) {
    var messageElem = document.createElement('div');
    messageElem.classList.add('chat-messages__item');
    messageElem.appendChild(document.createTextNode(message));
    document.getElementById('subscribe').appendChild(messageElem);
}
