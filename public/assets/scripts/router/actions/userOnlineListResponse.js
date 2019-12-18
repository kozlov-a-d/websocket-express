'use strict'
import User from '../../user.js';

export default class UserOnlineListResponse {
    
    check (response){
        if ( response.code === 200 ) {
            console.log('userOnlineListResponse', response.data.clients);
            let clients = response.data.clients;
            
            let result = '';
            for (let key in clients) {
                result += `<li>${response.data.clients[key].username}</li>`;
            };
            document.getElementById('userList').innerHTML = result;
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
