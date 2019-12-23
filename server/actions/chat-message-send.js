'use strict'

const AbstractAction = require('./base-action');

module.exports = class ChatMessageSend extends AbstractAction {

    constructor() {
        super();
    }
  
    doAction (ws, data){
        let msg = {
            user: data.username,
            msg: data.outgoingMessage
        }
        if ( true ) {
            this.sender.sendToAllClients({
                action: 'chatMessageSend',
                code: 200,           
                data: {
                    action: "chatMessageSend",
                    msg: msg
                },
            });
        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  

}
