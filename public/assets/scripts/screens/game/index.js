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
    }

    beforeFinish(){
        // this.root.getElementsByClassName('auth-fullscreen')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
