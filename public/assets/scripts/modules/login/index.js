import ReceiveClientID from './actions/receive-client-id.js';
import RequestClientID from './actions/request-client-id.js';

export default class LoginModule {
    constructor(){
        this.actions = {
            receive: {
                receiveClientID: new ReceiveClientID(),
            },
            request: {
                requestClientID: new RequestClientID(),
            }
        }
    }

}