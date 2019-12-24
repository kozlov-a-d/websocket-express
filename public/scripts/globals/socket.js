// создать подключение
export const socket = new WebSocket("ws://localhost:8081");

export const sendToServer = (dataObj) => {
    socket.send(JSON.stringify(dataObj));
}