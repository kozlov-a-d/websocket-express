'use strict'

import {socket} from './globals/socket.js';
import Actions from './actions/index.js'; 

export default class Router {
    constructor(user) {
        this.socket = socket;
        this.user = user;
        this.actions = Actions(this.user);
        this.init(this);
    }

    init(self) {
        // обработчик входящих сообщений
        this.socket.onmessage = (event) => {
            self.doAction(event.data);
        };
    }

    parseRequest(str) {
        let data = false;
        try {
            data = JSON.parse(str)
        } catch(e) {
            console.error('Ошибка при парсинге ', e);
        }
        return data;
    }
    
    doAction(response) {
        let data = this.parseRequest(response) // Вдруг прилетел неправильный json
        console.log('пришла дата ', data);
        if( data ) {
            // проверяем есть ли нужный action
            if (this.actions[data.action]) {
                // если есть - выполняем его
                this.actions[data.action].doAction(data);
            } else {
                // если нет - выводим ошибку и отдаём 404
                console.error(`Не удалось найти экшен ${data.action}`);
               // ws.send( JSON.stringify(errors['404']))
            }
        } else {
            ws.send( JSON.stringify(errors['400']));
        }
    }
}
