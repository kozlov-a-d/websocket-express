'use strict'
let clients = require('../../clients');

module.exports = class UserAuthRequest {
  
    response (ws, data){
        if ( data.username ) {
            console.log(`[log][user] userAuthorization ${data.clientId} | ${data.username}  - success`);
            clients[data.clientId].username = data.username;

            ws.send( JSON.stringify({
                action: 'userAuthResponse',
                code: 200,           
                data: {
                    user: {
                        username: data.username
                    }
                },
            }));

            for(var key in clients) {
                clients[key].ws.send(JSON.stringify({
                    action: 'userOnlineListResponse',
                    code: 200,           
                    data: {
                        clients: clients
                    },
                }));
            }

        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  

}
