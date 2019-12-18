const http = require('http');
const Static = require('node-static');
const WebSocketServer = new require('ws');
const Router = require('./server/router/router');
let clients = require('./server/clients');

let router = new Router();
// подключенные клиенты



// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

    var id = Math.round(Math.random()*10000000);
    clients[id] = {};
    clients[id].ws = ws;
    console.log("[log][connection] новое соединение " + id);

    ws.send( JSON.stringify({
        action: 'clientIdResponse',
        code: 200,           
        data: {
            id: id
        },
    }));
    

    ws.on('message', function(msg) {
        router.go(ws, msg);
    });

    ws.on('close', function() {
        console.log('[log][connection] соединение закрыто ' + id);
        delete clients[id];

        for(var key in clients) {
            clients[key].ws.send(JSON.stringify({
                action: 'userOnlineListResponse',
                code: 200,           
                data: {
                    clients: clients
                },
            }));
        }
    });

});


// обычный сервер (статика) на порту 8080
var fileServer = new Static.Server('./public');
http.createServer(function (req, res) {
  
    fileServer.serve(req, res);

}).listen(8080);

console.log("[info] Сервер запущен на портах 8080, 8081");

/**
 * Планы:
 * - в public добавить scripts/global, туда пойдут юзер, коннектор и прочее
 * - в сервере переработать структуру, тоже зависти папку для глобальных сушностей
 * - в сервере сделать компонент, который будет рассылать сообщения
 * - в сервере отвязать экшены от роута, сделать какую-то прослойку, чтобы экшены можно было вызывать отдельно, а не только из роута
 */
// for(var key in clients) {
    //     clients[key].ws.send(JSON.stringify({
    //         user: 'System',
    //         msg: "новое соединение " + id
    //     }));
    // }