'use strict'

const UserAuthRequest = require('./actions/userAuthRequest') // Подключаем экшен
const UserOnlineListRequest = require('./actions/userOnlineListRequest') // Подключаем экшен
const ChatMessageSend = require('./actions/chatMessageSend') // Подключаем экшен
const errors = require('../errors')

module.exports = class Router {
  
    constructor() {
        this.userAuthRequest = new UserAuthRequest();
        this.userOnlineListRequest = new UserOnlineListRequest();
        this.chatMessageSend = new ChatMessageSend();
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
        console.log('[log][incoming-msg] ', data)
        if( data ) {
            switch( data.action ) { 
                case 'userAuthRequest': // Смотрим, есть ли у нас экшен
                    this.userAuthRequest.response(ws, data)
                    break 
                    
                case 'userOnlineListRequest': // Смотрим, есть ли у нас экшен
                    this.userOnlineListRequest.response(ws, data)
                    break                
                
                case 'chatMessageSend': // Смотрим, есть ли у нас экшен
                    this.chatMessageSend.response(ws, data)
                    break
                
                default: // Либо отдаём 404
                    ws.send( JSON.stringify(errors['404']) )
                    break
            }
        } else 
        ws.send( JSON.stringify(errors['400']) )    
    }
  
}