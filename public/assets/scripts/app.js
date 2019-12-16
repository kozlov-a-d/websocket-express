if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

// создать подключение
var socket = new WebSocket("ws://localhost:8081");

var user = {
    name: 'quest'
}

// отправить сообщение из формы publish
document.forms.authorization.onsubmit = function() {
    if ( this.name.value !== '' ) {
        // var outgoingMessage = this.name.value;
        // socket.send(outgoingMessage);
        user.name = this.name.value;
    }
    return false;
};

// отправить сообщение из формы publish
document.forms.publish.onsubmit = function() {
    if ( this.message.value !== '' ) {
        var outgoingMessage = this.message.value;
        socket.send(JSON.stringify({
            user: user.name,
            msg: outgoingMessage
        }));
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
function showMessage(msg) {
    var message = JSON.parse(msg);
    var messageElem = document.createElement('div');
    messageElem.classList.add('chat-messages__item');
    messageElem.innerHTML = `
        <div class="chat-messages__item-author">${message.user} say:</div>
        <div class="chat-messages__item-text">${message.msg}</div>`;
    document.getElementById('subscribe').appendChild(messageElem);
}
