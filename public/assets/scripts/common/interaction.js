export default class Interaction {
    constructor(actions) {
        this.actions = actions;
        this.socket = new WebSocket("ws://localhost:8081");
    }

    init() {
        document.addEventListener('sendToServer', (event) => {
            this.onSend(event.data)
        })
        
        this.socket.onmessage = (event) => {
            this.onRecive(event.data)
        };
    }

    onSend(data) {
        this.socket.send(JSON.stringify(data));
    }

    onRecive(data) {
        let data = this.parseRequest(response) // Вдруг прилетел неправильный json
        console.log('пришла дата ', data);
        if( data ) {
            // проверяем есть ли нужный action
            if (this.actions[data.action]) {
                // если есть - выполняем его
                this.actions[data.action].doAction(data);
            } else {
                // если нет - выводим ошибку и отдаём 404
                console.error(`Не удалось найти экшен ${data.action}`);
               // ws.send( JSON.stringify(errors['404']))
            }
        } else {
            ws.send( JSON.stringify(errors['400']));
        }
    }

    parseRequest(str) {
        let data = false;
        try {
            data = JSON.parse(str)
        } catch(e) {
            console.error('Ошибка при парсинге ', e);
        }
        return data;
    }
}
