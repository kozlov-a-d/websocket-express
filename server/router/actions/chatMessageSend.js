'use strict'
let clients = require('../../clients');

module.exports = class ChatMessageSend {
  
    response (ws, data){
        let msg = {
            user: data.username,
            msg: data.outgoingMessage
        }
        if ( true ) {
            for(var key in clients) {
                clients[key].ws.send(JSON.stringify({
                    action: 'chatMessageSend',
                    code: 200,           
                    data: {
                        action: "chatMessageSend",
                        msg: msg
                    },
                }));
            }
        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  

}
