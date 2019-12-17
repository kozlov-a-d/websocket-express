'use strict'

import UserAuthorized from './actions/userAuthorized.js'; // Подключаем экшен

export default class Router {

    constructor() {
        this.userAuthorized = new UserAuthorized()
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
            switch( data.action ) { 
                case 'userAuthorized': // Смотрим, есть ли у нас экшен
                    this.userAuthorized.check(data);
                    break
                
                default: // Либо отдаём 404
                    // ws.send( JSON.stringify(errors['404']) )
                    break
            }
        } else 
        ws.send( JSON.stringify(errors['400']) )    
    }
}
