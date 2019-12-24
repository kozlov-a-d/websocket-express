'use strict'

import User from './globals/user.js';
import Router from './router.js';
import ScreensManager from './screens/index.js';

export default class App {
    constructor(){
        this.user = new User();
        this.router = new Router(this.user);
        this.init();
    }

    init() {
        if (!window.WebSocket) {
            document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
        }

        ScreensManager.init(this.user);
        ScreensManager.changeScreensByName('GameScreen');
        // setTimeout(() => {
        //     ScreensManager.changeScreensByName('AuthorizeScreen');
        // }, 1000);
    }

}

const app = new App();
