'use strict'

import {sendToServer} from '../globals/socket.js';
import ModulesManager from '../modules/index.js';

export default class AbstractAction {
    constructor(user) {
        this.user = user;
        this.sendToServer = sendToServer;
        this.modulesManager = ModulesManager;
    }
}
