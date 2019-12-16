var express = require('express'); // Подключаем express
var app = express();
var expressWs = require('express-ws')(app); // без этого не работают websocket'ы

const clients = new Set();

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});
   
app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
});

app.ws('/', function(ws, req) {
    clients.add(ws);

    ws.on('connection', function connection() {
        console.log(`connection: ${msg}`);
    });

    ws.on('message', function(msg) {
        console.log(`msg: ${msg}`);

        for(let client of clients) {
            client.send(msg);
        }
    });

    // console.log('socket', req.testing);
});

app.listen(3020);
