'use strict'

import BaseAction from './base-action.js';

export default class ClientIdResponse extends BaseAction {
    constructor() {
        super();
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            this.user.clientId(response.data.id);
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
