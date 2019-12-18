'use strict'

const UserAuthRequest = require('./actions/userAuthRequest') // Подключаем экшен
const usersListAuthorized = require('./actions/usersListAuthorized') // Подключаем экшен
const errors = require('../errors')

module.exports = class Router {
  
    constructor() {
        this.userAuthRequest = new UserAuthRequest()
        this.usersListAuthorized = new usersListAuthorized()
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
        console.log('data', data)
        if( data ) {
            switch( data.action ) { 
                case 'userAuthRequest': // Смотрим, есть ли у нас экшен
                    this.userAuthRequest.response(ws, data)
                    break 
                    
                case 'usersListAuthorized': // Смотрим, есть ли у нас экшен
                    this.usersListAuthorized.response(ws, data)
                    break
                
                default: // Либо отдаём 404
                    ws.send( JSON.stringify(errors['404']) )
                    break
            }
        } else 
        ws.send( JSON.stringify(errors['400']) )    
    }
  
}