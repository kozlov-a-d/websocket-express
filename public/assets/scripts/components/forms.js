let FormsInit = {};

// отправить сообщение из формы publish 
// TODO: заменить на модуль авторизации
FormsInit.authorization = (socket) => {
    document.forms.authorization.onsubmit = function() {
        if ( this.name.value !== '' ) {
            socket.send(JSON.stringify({
                action: "userAuthorization",  
                username: this.name.value
            }));
        }
        return false;
    };
};

// отправить сообщение из формы chatSend
FormsInit.chatSend = (socket) => {
    document.forms.chatSend.onsubmit = function() {
        if ( this.message.value !== '' ) {
            var outgoingMessage = this.message.value;
            socket.send(JSON.stringify({
                user: user.name,
                msg: outgoingMessage
            }));
            this.message.value = '';
        }
        return false;
    };
}

export default FormsInit;