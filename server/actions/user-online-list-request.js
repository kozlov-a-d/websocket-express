'use strict'

const AbstractAction = require('./base-action');

module.exports = class UserOnlineListRequest extends AbstractAction {

    constructor() {
        super();
    }
  
    doAction (ws, data){
        if ( true ) {
            this.sender.sendToClient(ws, {
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
