import BaseScreen from '../base-screen.js';
import {sendToServer} from '../../globals/socket.js';
import User from '../../globals/user.js';

export default class AuthSreen extends BaseScreen {
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
    }

    beforeFinish(){
        this.root.getElementsByClassName('auth-fullscreen')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
