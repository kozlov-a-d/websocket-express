'use strict'

import ChatMessageSend from './chat-message-send.js';
import ClientID from './client-id.js';
import UserAuthResponse from './user-auth-response.js';
import UserOnlineListResponse from './user-online-list-response.js';

const Actions = (user) => Object.freeze({
    chatMessageSend: new ChatMessageSend(user),
    clientID: new ClientID(user),
    userAuthResponse: new UserAuthResponse(user),
    userOnlineListResponse: new UserOnlineListResponse(user),
});

export default Actions;