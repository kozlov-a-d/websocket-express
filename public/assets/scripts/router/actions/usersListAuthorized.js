'use strict'
import User from '../../user.js';

export default class UsersListAuthorized {
    
    check (response){
        if ( response.code === 200 ) {
            console.log(response.data.clients);
            document.getElementById('userList').innerHTML = (() => {
                let result = '';
                response.data.clients.forEach(element => {
                    result += `<li>${element.name}</li>`;
                });
                console.log(result);
                return result;
            })
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
