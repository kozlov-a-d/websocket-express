if (!window.WebSocket) {
	document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
}

import {socket} from './globals/socket.js';
import Router from './router.js';
import ScreensManager from './screens/index.js';

let router = new Router();

ScreensManager.init();

ScreensManager.changeScreensByName('GameScreen');

// setTimeout(() => {
//     ScreensManager.changeScreensByName('AuthorizeScreen');
// }, 1000);

// обработчик входящих сообщений
socket.onmessage = function(event) {
    router.go(event.data);
};
