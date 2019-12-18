import {sendToServer} from '../socket.js';

let FormsInit = {};

// отправить сообщение из формы publish 
// TODO: заменить на модуль авторизации
FormsInit.authorization = () => {
    document.forms.authorization.onsubmit = function() {
        if ( this.name.value !== '' ) {
            sendToServer({
                action: "userAuthRequest",  
                username: this.name.value
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
                user: user.name,
                msg: outgoingMessage
            });
            this.message.value = '';
        }
        return false;
    };
}

export default FormsInit;