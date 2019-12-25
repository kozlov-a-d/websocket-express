'use strict'

import AbstractAction from './abstract-action.js';

export default class receiveClientID extends AbstractAction {
    constructor(user) {
        super(user);
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            this.user.setClientId(response.data.id);
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
