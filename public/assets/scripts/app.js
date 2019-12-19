if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

import {socket} from './globals/socket.js';
import Router from './router.js';
import './components/modal.js';
import FormsInit from './components/forms.js';

let router = new Router();


FormsInit.authorization();
FormsInit.chatSend();


// обработчик входящих сообщений
socket.onmessage = function(event) {
    router.go(event.data);
};
