import BaseScreen from '../base-screen.js';

export default class LoadingSreen extends BaseScreen {
    constructor(user) {
        super(user);
    }

    beforeInit(){
        this.root.innerHTML = `
        <div class="loading-fullscreen">
            <div class="loading-fullscreen__container">
                <div class="loading-fullscreen__img">
                    <img src="assets/images/loader.svg" alt="loading">
                </div>
                <div class="loading-fullscreen__text">Loading</div>
            </div>
        </div>`;
    }

    afterInit(){
        this.root.getElementsByClassName('loading-fullscreen')[0].classList.add('a-is-show');
    }

    beforeFinish(){
        this.root.getElementsByClassName('loading-fullscreen')[0].classList.remove('a-is-show');
    }    
    
    afterFinish(){
        this.root.innerHTML = '';
    }
}
