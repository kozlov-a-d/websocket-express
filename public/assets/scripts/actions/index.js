'use strict'

import ChatMessageSend from './chat-message-send.js';
import ClientIdResponse from './client-id-response.js';
import UserAuthResponse from './user-auth-response.js';
import UserOnlineListResponse from './user-online-list-response.js';

const actions = {
    chatMessageSend: new ChatMessageSend(),
    clientIdResponse: new ClientIdResponse(),
    userAuthResponse: new UserAuthResponse(),
    userOnlineListResponse: new UserOnlineListResponse(),
}

export default actions;