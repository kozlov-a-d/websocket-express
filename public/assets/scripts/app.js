if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

import {socket} from './socket.js';
import Router from './router/index.js';
import './components/modal.js';
import FormsInit from './components/forms.js';

let router = new Router();


FormsInit.authorization();
FormsInit.chatSend();


// обработчик входящих сообщений
socket.onmessage = function(event) {
    router.go(event.data);
    // var incomingMessage = event.data;
    // showMessage(incomingMessage); 
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
