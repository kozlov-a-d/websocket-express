const config = {
    url: {
        protocol: 'ws',
        host: 'localhost',
        port: 3020
    }
}
const socket = new WebSocket(`${config.url.protocol}://${config.url.host}:${config.url.port}`);

socket.onopen = function(e) {
    console.log(`[open] Соединение установлено"`);
    // Отправляем данные на сервер
    socket.send(`Меня зовут Username${Math.round(Math.random()*10000)}`);
};

socket.onmessage = function(event) {
    console.log(`[message] Данные получены с сервера: ${event.data}`);
};

socket.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        // например, сервер убил процесс или сеть недоступна
        // обычно в этом случае event.code 1006
        console.log('[close] Соединение прервано');
    }
};

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`);
};

//===========================================

// отправка сообщения из формы
document.forms.publish.onsubmit = function() {
    let outgoingMessage = this.message.value;
  
    socket.send(outgoingMessage);
    return false;
};
  
// получение сообщения - отобразить данные в div#messages
socket.onmessage = function(event) {
    let message = event.data;
  
    let messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('messages').prepend(messageElem);
}
