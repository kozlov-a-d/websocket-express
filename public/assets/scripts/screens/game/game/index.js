import Screen from './screen.js';
import Scene from './scene.js';
import Controls from './controls.js';

export default class Game{
    constructor(root){
        this.screen = new Screen(root); // canvas и работа с ним
        this.currentScene = new Scene(this);
        this.control = new Controls();
    }

    frame(time) {
        this.currentScene.render(time);
        requestAnimationFrame((time) => this.frame(time));
    } 

    run() {
        requestAnimationFrame((time) => this.frame(time));
    }
}