import {sendToServer} from '../globals/socket.js';
import User from '../globals/user.js';

let FormsInit = {};

// отправить сообщение из формы publish 
// TODO: заменить на модуль авторизации
FormsInit.authorization = () => {
    document.forms.authorization.onsubmit = function() {
        if ( this.name.value !== '' ) {
            console.log('AuthData', {
                clientId: User.clientId(),
                username: this.name.value
            }); 
            sendToServer({
                action: "userAuthRequest",  
                username: this.name.value,
                clientId: User.clientId()
            });
        }
        return false;
    };
};

// отправить сообщение из формы chatSend
FormsInit.chatSend = () => {
    document.forms.chatSend.onsubmit = function() {
        if ( this.message.value !== '' ) {
            var outgoingMessage = this.message.value;
            sendToServer({
                action: "chatMessageSend",
                username: User.username(),
                outgoingMessage: outgoingMessage
            });
            this.message.value = '';
        }
        return false;
    };
}

export default FormsInit;