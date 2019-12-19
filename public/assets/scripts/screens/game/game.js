import Screen from './screen.js';
import Scene from './scene.js';

export default class Game{
    constructor(root){
        this.screen = new Screen(root);
        this.currentScene = new Scene(this);
    }

    frame(time) {
        this.currentScene.render(time);
        requestAnimationFrame((time) => this.frame(time));
    } 

    run() {
        requestAnimationFrame((time) => this.frame(time));
    }
}