'use strict'
const actions = require('./actions');
const errors = require('./globals/errors');

module.exports = class Router {
  
    constructor() {
        this.actions = actions;
    }
    
    parseRequest(str) {
        let data = false
        try {
            data = JSON.parse(str)
        } catch(e) {
            console.error(`[log][error] Ошибка при парсинге ${e}`);
        }
        return data
    }
    
    go(ws, msg) {
        // логируем пришедший запрос
        console.log(`[log][incoming-msg] ${msg}`); 
        // Парсим json
        let data = this.parseRequest(msg) 
        // если пришла нормальная data
        if( data ) {
            // да:
            // проверяем есть ли нужный action
            if (this.actions[data.action]) {
                // если есть - выполняем его
                this.actions[data.action].response(ws, data);
            } else {
                // если нет - отдаём 404
                ws.send( JSON.stringify(errors['404']) )
            }
        } else {
            // нет:
            // отдаем 400
            ws.send( JSON.stringify(errors['400']) );
        }  
    }
}
