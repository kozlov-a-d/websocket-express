'use strict'

const UserAuthRequest = require('./user-auth-request') // Подключаем экшен
const UserOnlineListRequest = require('./user-online-list-request') // Подключаем экшен
const ChatMessageSend = require('./chat-message-send') // Подключаем экшен

module.exports = {
    userAuthRequest: new UserAuthRequest(),
    userOnlineListRequest: new UserOnlineListRequest(),
    chatMessageSend: new ChatMessageSend(),
};