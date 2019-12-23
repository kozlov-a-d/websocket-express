'use strict'

import AuthorizeScreen from './authorize/index.js';
import LoadingScreen from './loading/index.js';
import GameScreen from './game/index.js';
import ChatScreen from './chat/index.js';

const ScreensManager = (() => {
    
    let self = {
        screens: {},
        currentScreen: null
    }

    const createSceensList = (user) => {
        self.screens = {
            AuthorizeScreen: new AuthorizeScreen(user),
            LoadingScreen: new LoadingScreen(user),
            GameScreen: new GameScreen(user),
            ChatScreen: new ChatScreen(user),
        }
    }

    /**
     * Change screens by name
     * @param {String} name 
     */
    const changeScreensByName = (name) => {
        if (self.currentScreen) self.screens[self.currentScreen].finish();
        self.currentScreen = name;
        self.screens[self.currentScreen].init();
    }    
    
    // const changeScreensToNext = () => {

    // }
    
    /**
     * Init screen manager
     */
    const init = (user) => {
        createSceensList(user);
        changeScreensByName('LoadingScreen');
    }

    return Object.freeze({
        init,
        changeScreensByName
    })
})();

export default ScreensManager;
