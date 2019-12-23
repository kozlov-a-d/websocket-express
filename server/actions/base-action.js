'use strict'
let clients = require('../globals/clients');
const errors = require('../globals/errors');
const Sender = require('../globals/sender');

/**
 * ипортируются clients, errors, Sender
 */
module.exports = class AbstractAction {
    
    constructor() {
        this.sender = Sender;
    }
    
}