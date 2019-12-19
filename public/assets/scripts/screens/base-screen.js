export default class BaseScreen {
    constructor() {
        this.isActive = false;
        this.root = document.getElementById('app');
    }

    beforeInit() {

    } 
    afterInit() {

    }

    init() {
        this.beforeInit();
        this.isActive = true;
        this.afterInit();
    }

    beforeFinish() {

    } 

    afterFinish() {

    }

    
    finish() {
        this.beforeFinish();
        this.isActive = false;
        this.afterFinish();
    }
}