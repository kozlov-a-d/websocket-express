'use strict'

import {sendToServer} from '../globals/socket.js';
import ScreensManager from '../screens/index.js';

export default class AbstractAction {
    constructor(user) {
        this.user = user;
        this.sendToServer = sendToServer;
        this.screensManager = ScreensManager;
    }
}
