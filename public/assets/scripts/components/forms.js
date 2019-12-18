import {sendToServer} from '../socket.js';
import User from '../user.js';

let FormsInit = {};

// отправить сообщение из формы publish 
// TODO: заменить на модуль авторизации
FormsInit.authorization = () => {
    document.forms.authorization.onsubmit = function() {
        if ( this.name.value !== '' ) {
            // console.log('user', User); 
            // console.log('user', User.getClientId()); 
            sendToServer({
                action: "userAuthRequest",  
                username: this.name.value,
                clientId: User.getClientId()
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
                username: User.getUsername(),
                outgoingMessage: outgoingMessage
            });
            console.log(outgoingMessage);
            this.message.value = '';
        }
        return false;
    };
}

export default FormsInit;