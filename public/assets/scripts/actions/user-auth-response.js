'use strict'

import BaseAction from './base-action.js';

export default class UserAuthResponse extends BaseAction {
    constructor() {
        super();
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            // если авторизация успешная
            this.user.set(response.data.user);
            this.screensManager.changeScreensByName('ChatScreen');

            this.sendToServer({
                action: "userOnlineListRequest",  
                data: {}
            });
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
