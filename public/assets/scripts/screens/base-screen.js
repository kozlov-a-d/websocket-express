export default class BaseScreen {
    constructor(user) {
        this.isActive = false;
        this.root = document.getElementById('app');
        this.user = user;
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