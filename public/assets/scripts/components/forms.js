let FormsInit = {};

// отправить сообщение из формы publish
FormsInit.authorization = () => {
    document.forms.authorization.onsubmit = function() {
        if ( this.name.value !== '' ) {
            // var outgoingMessage = this.name.value;
            // socket.send(outgoingMessage);
            user.name = this.name.value;
        }
        return false;
    };
};

// отправить сообщение из формы chatSend
FormsInit.chatSend = () => {
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