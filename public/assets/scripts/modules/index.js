import LoginModule from './login/index.js';

export default class Modules {
    constructor() {
        this.list = {
            login: new LoginModule()
        }
    }
} 