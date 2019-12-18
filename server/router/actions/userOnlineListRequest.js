'use strict'
let clients = require('../../clients');

module.exports = class UserOnlineListRequest {
  
    response (ws, data){
        // if ( data.username ) {
        if ( true ) {

            ws.send( JSON.stringify({
                action: 'userOnlineListResponse',
                code: 200,           
                data: {
                    clients: clients
                },
            }));
        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  

}
