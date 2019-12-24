export default class Screen {
    constructor(root) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas = this.createCanvas(root);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
    }

    createCanvas(root) {
        let canvas = document.createElement('canvas');
        root.appendChild(canvas);
        return canvas;
    }

    fill(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0,0,this.width,this.height);
    }
}
