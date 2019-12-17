'use strict'

const UserAuthorization = require('./actions/userAuthorization') // Подключаем экшен
const errors = require('../errors')

module.exports = class Router {
  
    constructor() {
        this.userAuthorization = new UserAuthorization()
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
    
    go(ws, msg) {
        let data = this.parseRequest(msg) // Вдруг прилетел неправильный json
        if( data ) {
            switch( data.action ) { 
                case 'userAuthorization': // Смотрим, есть ли у нас экшен
                    this.userAuthorization.response(ws, data)
                    break
                
                default: // Либо отдаём 404
                    ws.send( JSON.stringify(errors['404']) )
                    break
            }
        } else 
        ws.send( JSON.stringify(errors['400']) )    
    }
  
}