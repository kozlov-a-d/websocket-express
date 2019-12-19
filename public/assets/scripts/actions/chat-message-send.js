'use strict'

import BaseAction from './base-action.js';

export default class ChatMessageSend extends BaseAction {
    constructor() {
        super();
    }
    
    doAction (response){
        if ( response.code === 200 ) {
            var incomingMessage = response.data.msg;
            console.log('incomingMessage', incomingMessage);
            showMessage(incomingMessage); 
        } else {
            // ws.send( JSON.stringify(errors['400']) )
        }
    }  
}

// показать сообщение в div#subscribe
function showMessage(msg) {
    var messageElem = document.createElement('div');
    messageElem.classList.add('chat-messages__item');
    messageElem.innerHTML = `
        <div class="chat-messages__item-author">${msg.user} say:</div>
        <div class="chat-messages__item-text">${msg.msg}</div>`;
    document.getElementById('subscribe').appendChild(messageElem);
}
