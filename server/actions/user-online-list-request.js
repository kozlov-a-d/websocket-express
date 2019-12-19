'use strict'

const BaseAction = require('./base-action');

module.exports = class UserOnlineListRequest extends BaseAction {

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
