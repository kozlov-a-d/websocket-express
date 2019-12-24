'use strict'

import AbstractAction from './abstract-action.js';

export default class UserAuthResponse extends AbstractAction {
    constructor(user) {
        super(user);
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            // если авторизация успешная
            this.user.init(response.data.user);
            this.modulesManager.changeModuleByName('ChatModule');
            this.sendToServer({
                action: "userOnlineListRequest",  
                data: {}
            });
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
