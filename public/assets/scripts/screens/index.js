'use strict'

import AuthorizeScreen from './authorize/authorize.js';
import LoadingScreen from './loading/loading.js';
import GameScreen from './game/game.js';

const ScreensManager = (() => {
    
    let self = {
        screens: {
            AuthorizeScreen: new AuthorizeScreen(),
            LoadingScreen: new LoadingScreen(),
            GameScreen: new GameScreen(),
        },
        currentScreen: null
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
    const init = () => {
        changeScreensByName('LoadingScreen');
    }

    return Object.freeze({
        init,
        changeScreensByName
    })
})();

export default ScreensManager;