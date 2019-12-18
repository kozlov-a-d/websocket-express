let clients = require('../globals/clients');

module.exports = (() => {

    /**
     * Send response to client
     * @param {WebSocket} ws 
     * @param {Object} res {action, code, data}
     */
    const sendToClient = (ws, res) => {
        ws.send( JSON.stringify(res));
    }

    /**
     * Send response to client by clients Id
     * @param {number} clientId 
     * @param {Object} res {action, code, data}
     */
    const sendToClientById = (clientId, res) => {
        clients[clientId].ws.send( JSON.stringify(res));
    }

    /**
     * Send response to all client
     * @param {Object} res {action, code, data}
     */
    const sendToAllClients = (res) => {
        for(var key in clients) {
            clients[key].ws.send(JSON.stringify(res));
        }
    }

    return Object.freeze({
        sendToClient,
        sendToClientById,
        sendToAllClients
    })
})();
