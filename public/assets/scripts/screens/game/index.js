import BaseScreen from '../base-screen.js';
import Game from './game.js';

export default class GameSreen extends BaseScreen {
    constructor() {
        super();
    }

    beforeInit(){
        this.root.innerHTML = `
        <div class="game" id="game">
        </div>`;
        let game = new Game(this.root.querySelector('#game'));
        game.run();
    }

    afterInit(){
        // this.root.getElementsByClassName('auth-fullscreen')[0].classList.add('a-is-show');

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
        // this.root.getElementsByClassName('auth-fullscreen')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
