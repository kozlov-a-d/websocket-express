'use strict'

module.exports = class UserAuthorization {
  
    response (ws, data){
        console.log('userAuthorization ' + data.username);
        if ( data.username ) {
            console.log('userAuthorization - success');
            ws.send( JSON.stringify({
                action: 'userAuthorized',
                code: 200,           
                data: {
                    user: {
                        username: data.username
                    }
                },
            }));
        } else {
            ws.send( JSON.stringify(errors['400']) )
        }
    }  
}
