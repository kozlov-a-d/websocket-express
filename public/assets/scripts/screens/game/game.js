import BaseScreen from '../base-screen.js';

export default class GameSreen extends BaseScreen {
    constructor() {
        super();
    }

    beforeInit(){
        this.root.innerHTML = `
        <div class="auth-fullscreen">
            <div class="auth-fullscreen__container">
                <div class="auth-fullscreen__title">Войдите в чат</div>
                <form class="auth-form" name="authorization">
                    <input class="auth-form__field" type="text" name="name" placeholder="Ваш ник..."/>
                    <button class="auth-form__btn-send" type="submit"/>Отправить</button>
                </form>
            </div>
        </div>`;
        
    }

    afterInit(){
        this.root.getElementsByClassName('auth-fullscreen')[0].classList.add('a-is-show');

        // отправить сообщение из формы authorization 
        // document.forms.chatSend.onsubmit = function() {
        //     if ( this.message.value !== '' ) {
        //         var outgoingMessage = this.message.value;
        //         sendToServer({
        //             action: "chatMessageSend",
        //             username: User.username(),
        //             outgoingMessage: outgoingMessage
        //         });
        //         this.message.value = '';
        //     }
        //     return false;
        // };
    }

    beforeFinish(){
        this.root.getElementsByClassName('auth-fullscreen')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
