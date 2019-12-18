'use strict'
import User from '../../user.js';

export default class ClientIdResponse {
    
    check (response){
        if ( response.code === 200 ) {
            User.setClientId(response.data.id)
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
