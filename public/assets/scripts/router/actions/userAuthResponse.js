'use strict'
import User from '../../user.js';
import {sendToServer} from '../../socket.js';

export default class UserAuthResponse {
    
    check (response){
        if ( response.code === 200 ) {
            User.set(response.data.user);
            document.querySelector('.modal').remove(); // TODO: заменить на модуль авторизации
            document.getElementById('myUser').innerHTML = `Вы вошли как <b>${response.data.user.username}</b>`;

            sendToServer({
                action: "userOnlineListRequest",  
                data: {}
            });
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
