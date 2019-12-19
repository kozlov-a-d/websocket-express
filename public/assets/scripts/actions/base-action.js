'use strict'

import User from '../globals/user.js';
import {sendToServer} from '../globals/socket.js';
import ScreensManager from '../screens/index.js';

export default class BaseAction {
    constructor() {
        this.user = User;
        this.sendToServer = sendToServer;
        this.screensManager = ScreensManager;
    }
}
