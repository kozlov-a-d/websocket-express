'use strict'

import AuthorizeModule from './authorize/index.js';
import LoadingModule from './loading/index.js';
import GameModule from './game/index.js';
import ChatModule from './chat/index.js';

const ModulesManager = (() => {
    
    let self = {
        modules: {},
        currentModule: null
    }

    const createSceensList = (user) => {
        self.modules = {
            AuthorizeModule: new AuthorizeModule(user),
            LoadingModule: new LoadingModule(user),
            GameModule: new GameModule(user),
            ChatModule: new ChatModule(user),
        }
    }

    /**
     * Change Modules by name
     * @param {String} name 
     */
    const changeModuleByName = (name) => {
        if (self.currentModule) self.modules[self.currentModule].finish();
        self.currentModule = name;
        self.modules[self.currentModule].init();
    }    
    
    // const changeModulesToNext = () => {

    // }
    
    /**
     * Init Module manager
     */
    const init = (user) => {
        createSceensList(user);
        changeModuleByName('LoadingModule');
    }

    return Object.freeze({
        init,
        changeModuleByName
    })
})();

export default ModulesManager;
