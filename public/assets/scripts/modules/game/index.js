import AbstractModule from '../abstract-module.js';
import Game from './game/index.js';

export default class GameModule extends AbstractModule {
    constructor(user) {
        super(user);
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
