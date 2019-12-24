'use strict'

import ChatMessageSend from './chat-message-send.js';
import ClientIdResponse from './client-id-response.js';
import UserAuthResponse from './user-auth-response.js';
import UserOnlineListResponse from './user-online-list-response.js';

const Actions = (user) => Object.freeze({
    chatMessageSend: new ChatMessageSend(user),
    clientIdResponse: new ClientIdResponse(user),
    userAuthResponse: new UserAuthResponse(user),
    userOnlineListResponse: new UserOnlineListResponse(user),
});

export default Actions;