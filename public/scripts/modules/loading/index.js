import AbstractModule from '../abstract-module.js';

export default class LoadingModule extends AbstractModule {
    constructor(user) {
        super(user);
    }

    beforeInit(){
        this.root.innerHTML = `
        <div class="loading-fullscreen">
            <div class="loading-fullscreen__container">
                <div class="loading-fullscreen__img">
                    <img src="images/loader.svg" alt="loading">
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
