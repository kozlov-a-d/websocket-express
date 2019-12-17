'use strict'
let clients = require('../../clients');

module.exports = class UserAuthorization {
  
    response (ws, data){
        if ( data.username ) {
            console.log('[log][user] userAuthorization ' + data.username + ' - success');
            ws.send( JSON.stringify({
                action: 'userAuthorized',
                code: 200,           
                data: {
                    user: {
                        username: data.username
                    }
                },
            }));
        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  
    
}
