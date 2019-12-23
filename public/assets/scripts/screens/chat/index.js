import BaseScreen from '../base-screen.js';
import {sendToServer} from '../../globals/socket.js';
import User from '../../globals/user.js';

export default class ChatSreen extends BaseScreen {
    constructor(user) {
        super(user);
    }

    beforeInit(){
        this.root.innerHTML = `
        <div class="chat">
            <div class="chat__users">
                <div class="chat-users">
                    <div class="chat-users__title">
                        Online: 
                        <span class="chat-users__title-count" id="userCount"></span>
                    </div>
                    <ul class="chat-users__list" id="userList"></ul>
                </div>
            </div>

            <div class="chat__messages">
                <div class="chat-messages" id="subscribe">
                </div>
            </div>
            
            <div class="chat__send-form">
                <form class="chat-send-form" name="chatSend">
                    <input class="chat-send-form__field" type="text" name="message" placeholder="Message..."/>
                    <button class="chat-send-form__btn-send" type="submit"/>Send</button>
                </form>
            </div>
        </div>`;
    }

    afterInit(){
        this.root.getElementsByClassName('chat')[0].classList.add('a-is-show');

        // отправить сообщение из формы authorization 
        document.forms.chatSend.onsubmit = function() {
            if ( this.message.value !== '' ) {
                var outgoingMessage = this.message.value;
                sendToServer({
                    action: "chatMessageSend",
                    username: User.getUsername(),
                    outgoingMessage: outgoingMessage
                });
                this.message.value = '';
            }
            return false;
        };
    }

    beforeFinish(){
        this.root.getElementsByClassName('chat')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
