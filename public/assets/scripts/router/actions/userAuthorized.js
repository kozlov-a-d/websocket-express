'use strict'
import User from '../../user.js';

export default class UserAuthorized {
    
    check (response){
        if ( response.code === 200 ) {
            console.log(response.data.user);
            User.set(response.data.user);
            document.querySelector('.modal').remove(); // TODO: заменить на модуль авторизации
            document.getElementById('myUser').innerHTML = `Вы вошли как <b>${response.data.user.username}</b>`;
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
