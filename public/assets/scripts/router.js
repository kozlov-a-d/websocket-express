'use strict'

import actions from './actions/index.js'; 

export default class Router {

    constructor() {
        this.actions = actions;
    }

    parseRequest(str) {
        let data = false
        try {
            data = JSON.parse(str)
        } catch(e) {
            console.error('Ошибка при парсинге ', e);
        }
        return data
    }
    
    go(response) {
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
               // ws.send( JSON.stringify(errors['404']) )
            }
        } else {
            ws.send( JSON.stringify(errors['400']) )    
        }
    }
}
