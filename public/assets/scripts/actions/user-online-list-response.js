'use strict'

import AbstractAction from './abstract-action.js';

export default class UserOnlineListResponse extends AbstractAction {
    constructor(user) {
        super(user);
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            console.log('userOnlineListResponse', response.data.clients);
            let clients = response.data.clients;
            
            let userListElement = document.getElementById('userList');
            let userCountElement = document.getElementById('userCount');

            if (userListElement && userCountElement) {
                let userCount = 0;
                if (userListElement) {
                    let result = '';
                    for (let key in clients) {
                        result += `<li>${response.data.clients[key].username}</li>`;
                        userCount++;
                    };
                    document.getElementById('userList').innerHTML = result;
                }
                userCountElement.innerHTML = `${userCount}`;
            }
            
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
