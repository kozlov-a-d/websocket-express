'use strict'

import ClientIdResponse from './actions/clientIdResponse.js'; // Подключаем экшен
import UserAuthResponse from './actions/userAuthResponse.js'; // Подключаем экшен
import UserOnlineListResponse from './actions/userOnlineListResponse.js'; // Подключаем экшен

export default class Router {

    constructor() {
        this.clientIdResponse = new ClientIdResponse()
        this.userAuthResponse = new UserAuthResponse()
        this.userOnlineListResponse = new UserOnlineListResponse()
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
                case 'clientIdResponse': // Смотрим, есть ли у нас экшен
                    this.clientIdResponse.check(data);
                    break                
                                    
                case 'userAuthResponse': // Смотрим, есть ли у нас экшен
                    this.userAuthResponse.check(data);
                    break                
                    
                case 'userOnlineListResponse':
                    this.userOnlineListResponse.check(data);
                    break
                
                default: // Либо отдаём 404
                    // ws.send( JSON.stringify(errors['404']) )
                    break
            }
        } else 
        ws.send( JSON.stringify(errors['400']) )    
    }
}
