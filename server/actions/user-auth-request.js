'use strict'

const AbstractAction = require('./base-action');

module.exports = class UserAuthRequest extends AbstractAction {
    
    constructor() {
        super();
    }
  
    doAction (ws, data){
        if ( data.username ) {
            console.log(`[log][user] userAuthorization ${data.clientId} | ${data.username}  - success`);
            clients[data.clientId].username = data.username;

            this.sender.sendToClient(ws, {
                action: 'userAuthResponse',
                code: 200,           
                data: {
                    user: {
                        username: data.username
                    }
                },
            });

            this.sender.sendToAllClients({
                action: 'userOnlineListResponse',
                code: 200,           
                data: {
                    clients: clients
                },
            });

        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  

}
