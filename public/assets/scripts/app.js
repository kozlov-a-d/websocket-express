'use strict'

import User from './common/user.js';
import Interaction from './common/interaction.js';
import Modules from './modules/index.js';

export default class App {
    constructor(){

        /**
         * сам пользователь и его методы
         */
        this.user = new User(); 
        // this.user.authorize();
        // this.user.setClientID();
        // this.user.getClientId();
        // this.user.setUsername();
        // this.user.getUsername();

        /**
         * список модулей
         * умеет переключать модуль
         * там же получать список экшенов? 
         */
        this.modules = new Modules(this.user); 
        console.log(this.modules)
        // this.modules.activateModule('module_name')
        // this.modules.list[key].actions[key]

        /**
         * принимает сообщения пришедшие от сервера
         * ловит тригеры внутренних событий
         * - единственный кто общается с сервером (в нем сокет)
         */
        this.interaction = new Interaction(); 

        this.init();
    }

    init() {
        if (!window.WebSocket) {
            document.body.innerHTML = 'WebSocket в этом браузере не поддерживается.';
        }

        // устанавливаем слушатели для взаимодействия
        this.interaction.init();
        
        // ScreensManager.init(this.user);
        // // ScreensManager.changeScreensByName('GameScreen');
        // setTimeout(() => {
        //     ScreensManager.changeScreensByName('AuthorizeScreen');
        // }, 1000);
    }

}

const app = new App();
