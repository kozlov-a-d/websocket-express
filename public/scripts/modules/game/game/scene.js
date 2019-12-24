export default class Scene {
    constructor(game) {
        this.game = game;
    }

    render(time) {
        this.game.screen.fill('#110000');
    }
}
