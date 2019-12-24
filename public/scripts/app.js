'use strict'

import User from './globals/user.js';
import Router from './router.js';
import ModulesManager from './modules/modules-manager.js';

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

        ModulesManager.init(this.user);
        // ModulesManager.changeModuleByName('GameModule');
        setTimeout(() => {
            ModulesManager.changeModuleByName('AuthorizeModule');
        }, 1000);
    }

}

const app = new App();
